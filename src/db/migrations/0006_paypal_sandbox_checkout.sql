-- PayPal Sandbox order, subscription, and webhook metadata.
ALTER TABLE subscriptions ADD COLUMN paypal_plan_id TEXT;
ALTER TABLE subscriptions ADD COLUMN paypal_subscription_status TEXT;
ALTER TABLE orders ADD COLUMN paypal_order_id TEXT;
ALTER TABLE orders ADD COLUMN paypal_capture_id TEXT;
ALTER TABLE orders ADD COLUMN printify_payload TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_paypal_order_id ON orders (paypal_order_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_paypal_capture_id ON orders (paypal_capture_id);

CREATE TABLE IF NOT EXISTS paypal_webhook_events (
    event_id TEXT PRIMARY KEY,
    event_type TEXT NOT NULL,
    resource_id TEXT,
    processed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_paypal_webhook_resource
    ON paypal_webhook_events (resource_id);
