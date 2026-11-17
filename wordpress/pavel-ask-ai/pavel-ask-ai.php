<?php
/**
 * Plugin Name: Pavel's Portfolio Ask AI
 * Description: Answers portfolio questions from Pavel's published professional profile.
 * Version: 1.0.0
 * Author: Pavel Terenin
 */
defined('ABSPATH') || exit;

define('PTAI_MODEL', 'gpt-6-luna');

function ptai_key() {
    foreach (array('PTAI_OPENAI_API_KEY', 'OPENAI_API_KEY') as $name) {
        $key = defined($name) ? constant($name) : getenv($name);
        if (is_string($key) && trim($key) !== '') {
            return trim($key);
        }
    }
    $stored = get_option('ptai_sealed_key', '');
    if (!$stored || !function_exists('openssl_decrypt')) {
        return '';
    }
    $bytes = base64_decode($stored, true);
    if ($bytes === false || strlen($bytes) <= 48) {
        return '';
    }
    $body = substr($bytes, 32);
    if (!hash_equals(substr($bytes, 0, 32), hash_hmac('sha256', $body, wp_salt('secure_auth'), true))) {
        return '';
    }
    return (string) openssl_decrypt(substr($body, 16), 'aes-256-cbc', hash('sha256', wp_salt('auth'), true), OPENSSL_RAW_DATA, substr($body, 0, 16));
}

register_activation_hook(__FILE__, 'ptai_install');
function ptai_install() {
    global $wpdb;
    require_once ABSPATH . 'wp-admin/includes/upgrade.php';
    $table = $wpdb->prefix . 'ptai_quota';
    $collation = $wpdb->get_charset_collate();
    dbDelta("CREATE TABLE $table (
        bucket varchar(64) NOT NULL,
        hits int unsigned NOT NULL DEFAULT 0,
        expires bigint unsigned NOT NULL,
        PRIMARY KEY  (bucket),
        KEY expires (expires)
    ) $collation;");
}

function ptai_allow($scope, $seconds, $limit) {
    global $wpdb;
    $table = $wpdb->prefix . 'ptai_quota';
    $now = time();
    $window = (int) floor($now / $seconds);
    $bucket = hash_hmac('sha256', $scope . ':' . $window, wp_salt('nonce'));
    // A conditional increment in MySQL keeps concurrent requests within the same limit.
    $wpdb->query($wpdb->prepare("DELETE FROM $table WHERE expires <= %d LIMIT 32", $now));
    $created = $wpdb->query($wpdb->prepare("INSERT IGNORE INTO $table (bucket,hits,expires) VALUES (%s,0,%d)", $bucket, ($window + 1) * $seconds));
    if ($created === false) {
        return false;
    }
    return 1 === $wpdb->query($wpdb->prepare("UPDATE $table SET hits = hits + 1 WHERE bucket = %s AND hits < %d", $bucket, $limit));
}

function ptai_profile() {
    static $topics = null;
    if ($topics === null) {
        $topics = json_decode(file_get_contents(dirname(__FILE__) . '/profile.json'), true);
    }
    return is_array($topics) ? $topics : array();
}

function ptai_make_request($question, $history, $topics) {
    $rules = array(
        "You answer visitors to Pavel Terenin's professional portfolio. Use third person and the visitor's language. Write two to five plain-text sentences. For greetings, offer a choice of portfolio topics.",
        "Base factual answers only on the public records below. Use recent turns for follow-up questions. Identify the relevant records by ID. Links are added by the application. State when a fact is undocumented. Keep unrelated requests focused on Pavel's work.",
        "Distinguish Pavel's own contribution from team work and local simulations from live use. Do not guess private details, business metrics or legal status, identify the client of the anonymous capacity article, or name the personal assistant.",
    );
    $ids = array();
    foreach ($topics as $topic) {
        $ids[] = $topic['id'];
        $rules[] = '[' . $topic['id'] . '] ' . $topic['title'] . "\n" . $topic['en'] . (isset($topic['detail']) ? ' ' . $topic['detail'] : '');
    }
    $history[] = array('role' => 'user', 'content' => $question);
    return array(
        'model' => PTAI_MODEL, 'store' => false, 'reasoning' => array('effort' => 'none'), 'max_output_tokens' => 550,
        'instructions' => implode("\n\n", $rules), 'input' => $history,
        'text' => array('format' => array('name' => 'portfolio_answer', 'type' => 'json_schema', 'strict' => true,
            'schema' => array('type' => 'object', 'additionalProperties' => false, 'required' => array('answer', 'sources'),
                'properties' => array('answer' => array('type' => 'string'), 'sources' => array('type' => 'array', 'items' => array('type' => 'string', 'enum' => $ids))))))
    );
}

function ptai_answer($data, $topics) {
    if (!isset($data['status'], $data['output']) || $data['status'] !== 'completed' || !is_array($data['output'])) {
        return null;
    }
    foreach ($data['output'] as $item) {
        if (!isset($item['type'], $item['content']) || $item['type'] !== 'message' || !is_array($item['content'])) {
            continue;
        }
        foreach ($item['content'] as $part) {
            if (!isset($part['type'], $part['text']) || $part['type'] !== 'output_text') {
                continue;
            }
            $reply = json_decode($part['text'], true);
            if (!isset($reply['answer'], $reply['sources']) || !is_string($reply['answer']) || trim($reply['answer']) === '' || !is_array($reply['sources'])) {
                continue;
            }
            $sources = array();
            foreach ($topics as $topic) {
                if (!empty($topic['url']) && in_array($topic['id'], $reply['sources'], true)) {
                    $sources[$topic['url']] = array('title' => $topic['title'], 'url' => $topic['url']);
                }
            }
            return array('response' => trim($reply['answer']), 'mode' => 'model', 'sources' => array_slice(array_values($sources), 0, 3));
        }
    }
    return null;
}

function ptai_valid_message($value) {
    return is_string($value) && trim($value) !== '' && strlen($value) <= 6000 && preg_match('/^.{1,1500}$/usD', $value);
}

add_action('rest_api_init', function () {
    register_rest_route('pavel-ask-ai/v1', '/chat', array(
        'methods' => 'POST', 'callback' => 'ptai_chat', 'permission_callback' => '__return_true',
    ));
});

function ptai_chat($request) {
    $origin = $request->get_header('origin');
    if ($origin && wp_parse_url($origin, PHP_URL_HOST) !== wp_parse_url(home_url(), PHP_URL_HOST)) {
        return new WP_Error('origin_denied', 'Use the portfolio chat.', array('status' => 403));
    }
    if (strlen($request->get_body()) > 40000) {
        return new WP_Error('payload_size', 'Request too large.', array('status' => 413));
    }
    $body = $request->get_json_params();
    if (!isset($body['message']) || !ptai_valid_message($body['message'])) {
        return new WP_Error('invalid_message', 'Enter a question of up to 1500 characters.', array('status' => 400));
    }
    $key = ptai_key();
    $topics = ptai_profile();
    if (!$key || !$topics) {
        return new WP_Error('model_unavailable', 'The portfolio AI is unavailable.', array('status' => 503));
    }
    $remote = isset($_SERVER['REMOTE_ADDR']) ? $_SERVER['REMOTE_ADDR'] : 'unknown';
    if (!ptai_allow('ip:' . $remote, 60, 10) || !ptai_allow('site', 86400, 500)) {
        return new WP_Error('rate_limited', 'The portfolio chat limit has been reached.', array('status' => 429));
    }
    $history = array();
    if (isset($body['history']) && is_array($body['history'])) {
        foreach (array_slice($body['history'], -4) as $turn) {
            if (isset($turn['role'], $turn['content']) && in_array($turn['role'], array('assistant', 'user'), true) && ptai_valid_message($turn['content'])) {
                $history[] = array('role' => $turn['role'], 'content' => $turn['content']);
            }
        }
    }
    $result = wp_remote_post('https://api.openai.com/v1/responses', array(
        'headers' => array('Authorization' => 'Bearer ' . $key, 'Content-Type' => 'application/json'),
        'body' => wp_json_encode(ptai_make_request(trim($body['message']), $history, $topics)),
        'timeout' => 20, 'redirection' => 0, 'limit_response_size' => 131072,
    ));
    $status = wp_remote_retrieve_response_code($result);
    $data = json_decode(wp_remote_retrieve_body($result), true);
    $answer = $status === 200 ? ptai_answer($data, $topics) : null;
    if (!$answer) {
        // Keep diagnostics available to the administrator without retaining conversations or credentials.
        $code = isset($data['error']['code']) && is_string($data['error']['code']) ? sanitize_key($data['error']['code']) : '';
        set_transient('ptai_failure', 'HTTP ' . (int) $status . ($code ? ' (' . $code . ')' : ''), HOUR_IN_SECONDS);
        return new WP_Error('model_unavailable', 'The portfolio AI is unavailable.', array('status' => 503));
    }
    $response = new WP_REST_Response($answer, 200);
    $response->header('Cache-Control', 'no-store');
    return $response;
}

if (is_admin()) {
    require_once dirname(__FILE__) . '/settings.php';
}
