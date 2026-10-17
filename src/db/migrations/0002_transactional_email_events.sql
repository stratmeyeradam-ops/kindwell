-- Transactional email delivery metadata.
-- Message bodies are intentionally never stored.
CREATE TABLE IF NOT EXISTS transactional_email_events (
    id TEXT PRIMARY KEY,
    event_key TEXT UNIQUE NOT NULL,
    event_type TEXT NOT NULL,
    provider TEXT NOT NULL,
    recipient TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending',
    provider_message_id TEXT,
    created_at TEXT NOT NULL,
    sent_at TEXT,
    updated_at TEXT NOT NULL
);
