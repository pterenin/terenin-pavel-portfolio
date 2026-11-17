## Portfolio Ask AI on WordPress

Install the pavel-ask-ai directory as a WordPress plugin in the blog and activate it. Under Settings > Portfolio Ask AI, test the outbound HTTPS connection and configure a portfolio-specific OpenAI API key. The plugin also accepts PTAI_OPENAI_API_KEY or OPENAI_API_KEY from the hosting environment or wp-config.php. Stored keys use authenticated encryption with the site's salts. Changing the salts requires re-entering the saved key.

The home-page widget posts to /blog/?rest_route=/pavel-ask-ai/v1/chat. The handler uses GPT-6 Luna via the Responses API. The public profile records in pavel-ask-ai/profile.json supply both the server context and the client's labeled fallback excerpts. Update both the deployed plugin and the static build after editing these records.

The server retains short-lived request counts and upstream error codes. It forwards up to four recent turns and caps model attempts at ten per visitor IP per minute and five hundred per UTC day for the whole site. It does not store chat transcripts. Check for mode "model" when testing a live question.
