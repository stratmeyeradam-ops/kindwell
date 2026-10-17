-- Printify catalog mappings, order lifecycle fields, and webhook receipts.
ALTER TABLE products ADD COLUMN printify_product_id TEXT;
ALTER TABLE products ADD COLUMN printify_synced_at TEXT;
ALTER TABLE orders ADD COLUMN printify_order_id TEXT;
ALTER TABLE orders ADD COLUMN printify_status TEXT;
ALTER TABLE orders ADD COLUMN tracking_number TEXT;
ALTER TABLE orders ADD COLUMN tracking_url TEXT;
ALTER TABLE orders ADD COLUMN updated_at TEXT;

CREATE UNIQUE INDEX IF NOT EXISTS idx_orders_printify_order_id
    ON orders (printify_order_id);

CREATE TABLE IF NOT EXISTS printify_product_variants (
    product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    printify_product_id TEXT NOT NULL,
    blueprint_id INTEGER,
    print_provider_id INTEGER,
    variant_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    is_available INTEGER NOT NULL DEFAULT 1,
    production_cost REAL,
    shipping_json TEXT,
    updated_at TEXT NOT NULL,
    PRIMARY KEY (product_id, variant_id)
);

CREATE INDEX IF NOT EXISTS idx_printify_variants_lookup
    ON printify_product_variants (printify_product_id, variant_id);

CREATE TABLE IF NOT EXISTS printify_webhook_events (
    event_id TEXT PRIMARY KEY,
    topic TEXT NOT NULL,
    printify_order_id TEXT,
    payload_hash TEXT,
    status TEXT NOT NULL DEFAULT 'processing',
    processed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_printify_webhook_order
    ON printify_webhook_events (printify_order_id);
