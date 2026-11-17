<?php
defined('ABSPATH') || exit;

add_action('admin_menu', function () {
    add_options_page('Portfolio Ask AI', 'Portfolio Ask AI', 'manage_options', 'ptai-settings', 'ptai_settings_page');
});

function ptai_save_key($key) {
    if (!preg_match('/^[A-Za-z0-9_-]{20,512}$/D', $key)) {
        return 'Check the API key and try again.';
    }
    if (!function_exists('openssl_encrypt') || !function_exists('openssl_random_pseudo_bytes')) {
        return 'Set PTAI_OPENAI_API_KEY on the server. Encrypted storage is unavailable.';
    }
    $strong = false;
    $iv = openssl_random_pseudo_bytes(16, $strong);
    if (!$strong || $iv === false) {
        return 'A secure encryption IV could not be generated.';
    }
    $encrypted = openssl_encrypt($key, 'aes-256-cbc', hash('sha256', wp_salt('auth'), true), OPENSSL_RAW_DATA, $iv);
    if ($encrypted === false) {
        return 'Encryption failed. The key was not saved.';
    }
    $body = $iv . $encrypted;
    $sealed = base64_encode(hash_hmac('sha256', $body, wp_salt('secure_auth'), true) . $body);
    if (!update_option('ptai_sealed_key', $sealed, false)) {
        return 'WordPress could not save the key.';
    }
    return 'The encrypted key was saved.';
}

function ptai_check_connection() {
    $key = ptai_key();
    $response = wp_remote_get('https://api.openai.com/v1/models/' . PTAI_MODEL, array(
        'headers' => $key ? array('Authorization' => 'Bearer ' . $key) : array(),
        'timeout' => 12, 'redirection' => 0, 'limit_response_size' => 16384,
    ));
    if (is_wp_error($response)) {
        return 'WordPress could not connect to api.openai.com. ' . $response->get_error_message();
    }
    $status = (int) wp_remote_retrieve_response_code($response);
    $data = json_decode(wp_remote_retrieve_body($response), true);
    if (!$key && $status === 401 && isset($data['error'])) {
        return 'WordPress reached the OpenAI API over HTTPS (HTTP 401). Add a key to enable model answers.';
    }
    if ($status === 200 && isset($data['id']) && $data['id'] === PTAI_MODEL) {
        return 'WordPress reached OpenAI and the key can access ' . PTAI_MODEL . '.';
    }
    return 'OpenAI endpoint returned HTTP ' . $status . (isset($data['error']['code']) && is_string($data['error']['code']) ? ' (' . sanitize_key($data['error']['code']) . ')' : '') . '.';
}

function ptai_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    $notice = '';
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['ptai_action'])) {
        check_admin_referer('ptai_settings');
        if ($_POST['ptai_action'] === 'test') {
            $notice = ptai_check_connection();
        } elseif ($_POST['ptai_action'] === 'save' && isset($_POST['ptai_key']) && is_string($_POST['ptai_key'])) {
            $notice = ptai_save_key(trim(wp_unslash($_POST['ptai_key'])));
        }
    }
    ?>
    <div class="wrap">
        <h1>Portfolio Ask AI</h1>
        <?php if ($notice) : ?><div class="notice notice-info"><p><?php echo esc_html($notice); ?></p></div><?php endif; ?>
        <p>Model: <code><?php echo esc_html(PTAI_MODEL); ?></code>. API key: <strong><?php echo ptai_key() ? 'configured' : 'not configured'; ?></strong>.</p>
        <form method="post">
            <?php wp_nonce_field('ptai_settings'); ?>
            <input type="hidden" name="ptai_action" value="test">
            <?php submit_button('Test connection to OpenAI', 'secondary', 'submit', false); ?>
        </form>
        <h2>Configure the OpenAI API key</h2>
        <p>Use a project key for this portfolio. The key stays on your server. A server setting named <code>PTAI_OPENAI_API_KEY</code> takes precedence over a saved key.</p>
        <form method="post" autocomplete="off">
            <?php wp_nonce_field('ptai_settings'); ?>
            <input type="hidden" name="ptai_action" value="save">
            <label for="ptai-key">New OpenAI API key</label><br>
            <input type="password" class="regular-text" name="ptai_key" id="ptai-key" value="" required autocomplete="new-password" spellcheck="false">
            <?php submit_button('Save API key'); ?>
        </form>
        <?php if (get_transient('ptai_failure')) : ?><p>Recent API error: <?php echo esc_html(get_transient('ptai_failure')); ?></p><?php endif; ?>
    </div>
    <?php
}
