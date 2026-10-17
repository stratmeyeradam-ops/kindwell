-- KindWell D1 Database Schema
-- Production Rebuild 2026-09-07

-- 1. Native Better Auth D1 Tables
CREATE TABLE IF NOT EXISTS user (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    emailVerified INTEGER NOT NULL DEFAULT 0,
    image TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL,
    role TEXT DEFAULT 'member', -- 'member', 'moderator', 'admin'
    tier TEXT DEFAULT 'free', -- 'free', 'kind', 'steady', 'supported'
    locale TEXT DEFAULT 'en' -- 'en', 'es', 'pt-BR'
);

CREATE TABLE IF NOT EXISTS session (
    id TEXT PRIMARY KEY,
    expiresAt INTEGER NOT NULL,
    token TEXT UNIQUE NOT NULL,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL,
    ipAddress TEXT,
    userAgent TEXT,
    userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS account (
    id TEXT PRIMARY KEY,
    accountId TEXT NOT NULL,
    providerId TEXT NOT NULL,
    userId TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    accessToken TEXT,
    refreshToken TEXT,
    idToken TEXT,
    accessTokenExpiresAt INTEGER,
    refreshTokenExpiresAt INTEGER,
    scope TEXT,
    password TEXT,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS verification (
    id TEXT PRIMARY KEY,
    identifier TEXT NOT NULL,
    value TEXT NOT NULL,
    expiresAt INTEGER NOT NULL,
    createdAt INTEGER NOT NULL,
    updatedAt INTEGER NOT NULL
);

-- Compatibility views
CREATE VIEW IF NOT EXISTS users AS SELECT * FROM user;
CREATE VIEW IF NOT EXISTS sessions AS SELECT * FROM session;
-- 2. Subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    tier TEXT NOT NULL, -- 'kind', 'steady', 'supported'
    amount REAL NOT NULL,
    currency TEXT DEFAULT 'USD',
    status TEXT NOT NULL, -- 'active', 'canceled', 'past_due'
    provider TEXT DEFAULT 'stripe',
    provider_sub_id TEXT,
    provider_customer_id TEXT, -- Stripe customer id (cus_…)
    paypal_plan_id TEXT,
    paypal_subscription_status TEXT,
    current_period_start TEXT NOT NULL,
    current_period_end TEXT NOT NULL,
    cancel_at_period_end INTEGER DEFAULT 0,
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

-- 3. Daily Content & Favorites
CREATE TABLE IF NOT EXISTS affirmations (
    id TEXT PRIMARY KEY,
    date TEXT NOT NULL, -- YYYY-MM-DD
    locale TEXT NOT NULL, -- 'en', 'es', 'pt-BR'
    affirmation TEXT NOT NULL,
    reflection TEXT NOT NULL,
    journal_prompt TEXT,
    grounding_practice_id TEXT,
    is_member_only INTEGER DEFAULT 0,
    created_at TEXT NOT NULL,
    UNIQUE(date, locale)
);

CREATE TABLE IF NOT EXISTS saved_favorites (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    item_type TEXT NOT NULL, -- 'affirmation', 'practice', 'remedy', 'crystal', 'guide'
    item_id TEXT NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(user_id, item_type, item_id)
);

-- 4. Practices (12 Micro-practices)
CREATE TABLE IF NOT EXISTS practices (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL, -- 'Grounding', 'Emotions', 'Self-Compassion', 'Relationships', 'Grief'
    duration_minutes INTEGER NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    is_premium INTEGER DEFAULT 0,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS practice_translations (
    practice_id TEXT REFERENCES practices(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    steps TEXT NOT NULL, -- JSON array of strings
    why_it_helps TEXT NOT NULL,
    PRIMARY KEY(practice_id, locale)
);

-- 5. Remedies & Holistic Care
CREATE TABLE IF NOT EXISTS remedies (
    id TEXT PRIMARY KEY,
    category TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS remedy_translations (
    remedy_id TEXT REFERENCES remedies(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    botanical_allies TEXT NOT NULL, -- JSON
    somatic_approaches TEXT NOT NULL, -- JSON
    cautions TEXT NOT NULL, -- JSON
    pregnancy_warning TEXT,
    escalation_flags TEXT NOT NULL, -- JSON
    PRIMARY KEY(remedy_id, locale)
);

-- 6. Reiki & Crystals
CREATE TABLE IF NOT EXISTS reiki_articles (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT NOT NULL,
    UNIQUE(slug, locale)
);

CREATE TABLE IF NOT EXISTS crystals (
    id TEXT NOT NULL,
    slug TEXT NOT NULL,
    name TEXT NOT NULL,
    locale TEXT NOT NULL,
    spiritual_association TEXT NOT NULL,
    traditions TEXT NOT NULL,
    appearance TEXT NOT NULL,
    care_instructions TEXT NOT NULL,
    mohs_hardness TEXT NOT NULL,
    reflection_practice TEXT NOT NULL,
    safety_notes TEXT NOT NULL,
    PRIMARY KEY(id, locale)
);

-- 7. Courses, Modules, Lessons, Progress & Certificates
CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    is_premium INTEGER DEFAULT 1,
    level TEXT DEFAULT 'All levels',
    estimated_hours REAL DEFAULT 2.5,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS course_translations (
    course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    learning_outcomes TEXT NOT NULL, -- JSON
    PRIMARY KEY(course_id, locale)
);

CREATE TABLE IF NOT EXISTS modules (
    id TEXT PRIMARY KEY,
    course_id TEXT REFERENCES courses(id) ON DELETE CASCADE,
    sort_order INTEGER NOT NULL,
    slug TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS module_translations (
    module_id TEXT REFERENCES modules(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    PRIMARY KEY(module_id, locale)
);

CREATE TABLE IF NOT EXISTS lessons (
    id TEXT PRIMARY KEY,
    module_id TEXT REFERENCES modules(id) ON DELETE CASCADE,
    sort_order INTEGER NOT NULL,
    slug TEXT NOT NULL,
    duration_minutes INTEGER DEFAULT 15
);

CREATE TABLE IF NOT EXISTS lesson_translations (
    lesson_id TEXT REFERENCES lessons(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    reflection_prompt TEXT,
    worksheet_reference TEXT,
    PRIMARY KEY(lesson_id, locale)
);

CREATE TABLE IF NOT EXISTS enrollments (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'active', -- 'active', 'completed'
    enrolled_at TEXT NOT NULL,
    completed_at TEXT,
    UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS lesson_progress (
    id TEXT PRIMARY KEY,
    enrollment_id TEXT NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
    lesson_id TEXT NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    completed INTEGER DEFAULT 1,
    reflection_note TEXT,
    updated_at TEXT NOT NULL,
    UNIQUE(enrollment_id, lesson_id)
);

CREATE TABLE IF NOT EXISTS certificates (
    id TEXT PRIMARY KEY,
    enrollment_id TEXT UNIQUE NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    course_id TEXT NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
    student_name TEXT NOT NULL,
    verification_code TEXT UNIQUE NOT NULL,
    issued_at TEXT NOT NULL
);

-- 8. Quizzes & Self-Assessments
CREATE TABLE IF NOT EXISTS quizzes (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    tier_required TEXT DEFAULT 'steady', -- 'free', 'steady'
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS quiz_translations (
    quiz_id TEXT REFERENCES quizzes(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY(quiz_id, locale)
);

CREATE TABLE IF NOT EXISTS quiz_questions (
    id TEXT PRIMARY KEY,
    quiz_id TEXT REFERENCES quizzes(id) ON DELETE CASCADE,
    sort_order INTEGER NOT NULL,
    locale TEXT NOT NULL,
    question TEXT NOT NULL,
    options TEXT NOT NULL -- JSON array of {label, tag, value}
);

CREATE TABLE IF NOT EXISTS quiz_results (
    id TEXT PRIMARY KEY,
    quiz_id TEXT REFERENCES quizzes(id),
    user_id TEXT REFERENCES user(id),
    answers TEXT NOT NULL, -- JSON
    result_profile TEXT NOT NULL,
    recommendations TEXT NOT NULL, -- JSON {practices, guides, courses}
    created_at TEXT NOT NULL
);

-- 9. KindWell Circle Community
CREATE TABLE IF NOT EXISTS circle_spaces (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    sort_order INTEGER NOT NULL,
    icon TEXT
);

CREATE TABLE IF NOT EXISTS circle_space_translations (
    space_id TEXT REFERENCES circle_spaces(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY(space_id, locale)
);

CREATE TABLE IF NOT EXISTS circle_threads (
    id TEXT PRIMARY KEY,
    space_id TEXT NOT NULL REFERENCES circle_spaces(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    locale TEXT DEFAULT 'en',
    moderation_status TEXT DEFAULT 'approved', -- 'approved', 'flagged', 'hidden'
    created_at TEXT NOT NULL,
    updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS circle_posts (
    id TEXT PRIMARY KEY,
    thread_id TEXT NOT NULL REFERENCES circle_threads(id) ON DELETE CASCADE,
    user_id TEXT NOT NULL REFERENCES user(id) ON DELETE CASCADE,
    body TEXT NOT NULL,
    moderation_status TEXT DEFAULT 'approved', -- 'approved', 'flagged', 'hidden'
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS circle_reports (
    id TEXT PRIMARY KEY,
    reporter_id TEXT NOT NULL REFERENCES user(id),
    reporter_name TEXT NOT NULL,
    reporter_email TEXT NOT NULL,
    thread_id TEXT REFERENCES circle_threads(id),
    post_id TEXT REFERENCES circle_posts(id),
    reason TEXT NOT NULL,
    status TEXT DEFAULT 'pending', -- 'pending', 'reviewed', 'dismissed'
    created_at TEXT NOT NULL
);

-- 10. Practitioners & Network
CREATE TABLE IF NOT EXISTS practitioners (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    is_owner INTEGER DEFAULT 0,
    photo_url TEXT,
    modality TEXT NOT NULL,
    credentials TEXT,
    location TEXT NOT NULL,
    is_remote INTEGER DEFAULT 1,
    is_in_person INTEGER DEFAULT 0,
    accepting_clients INTEGER DEFAULT 0,
    availability_note TEXT NOT NULL,
    booking_url TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS practitioner_translations (
    practitioner_id TEXT REFERENCES practitioners(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    modality_display TEXT NOT NULL,
    bio TEXT NOT NULL,
    approach TEXT NOT NULL,
    availability_text TEXT NOT NULL,
    PRIMARY KEY(practitioner_id, locale)
);

-- 11. Store & Orders
CREATE TABLE IF NOT EXISTS products (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    type TEXT NOT NULL, -- 'digital', 'printify_merch', 'direct_wellness'
    price REAL NOT NULL,
    member_price REAL NOT NULL, -- 15% discount for Supported tier
    currency TEXT DEFAULT 'USD',
    image_url TEXT NOT NULL,
    is_active INTEGER DEFAULT 1,
    digital_file_key TEXT,
    printify_blueprint_id TEXT,
    printify_print_provider_id TEXT,
    printify_product_id TEXT,
    printify_synced_at TEXT,
    created_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS product_translations (
    product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
    locale TEXT NOT NULL,
    name TEXT NOT NULL,
    tagline TEXT NOT NULL,
    description TEXT NOT NULL,
    details TEXT NOT NULL, -- JSON array of strings
    PRIMARY KEY(product_id, locale)
);

CREATE TABLE IF NOT EXISTS orders (
    id TEXT PRIMARY KEY,
    user_id TEXT REFERENCES user(id),
    customer_email TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    subtotal REAL NOT NULL,
    discount REAL DEFAULT 0,
    tax REAL DEFAULT 0,
    shipping REAL DEFAULT 0,
    total REAL NOT NULL,
    currency TEXT DEFAULT 'USD',
    payment_status TEXT DEFAULT 'pending', -- 'pending', 'completed', 'failed', 'refunded'
    payment_provider TEXT DEFAULT 'stripe',
    fulfillment_status TEXT DEFAULT 'pending', -- 'pending', 'processing', 'fulfilled', 'canceled', 'failed'
    stripe_session_id TEXT,
    stripe_payment_intent_id TEXT,
    paypal_order_id TEXT UNIQUE,
    paypal_capture_id TEXT UNIQUE,
    printify_payload TEXT,
    printify_order_id TEXT UNIQUE,
    printify_status TEXT,
    printify_attempts INTEGER DEFAULT 0,
    printify_error TEXT,
    shipping_json TEXT,
    tracking_number TEXT,
    tracking_url TEXT,
    created_at TEXT NOT NULL,
    updated_at TEXT
);

CREATE TABLE IF NOT EXISTS order_items (
    id TEXT PRIMARY KEY,
    order_id TEXT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL REFERENCES products(id),
    variant_title TEXT,
    quantity INTEGER NOT NULL,
    unit_price REAL NOT NULL,
    total_price REAL NOT NULL,
    download_token TEXT UNIQUE,
    download_expires_at TEXT,
    printify_product_id TEXT,
    printify_variant_id INTEGER
);

CREATE TABLE IF NOT EXISTS digital_downloads (
    token TEXT PRIMARY KEY,
    order_item_id TEXT REFERENCES order_items(id),
    product_id TEXT REFERENCES products(id),
    user_id TEXT REFERENCES user(id),
    download_count INTEGER DEFAULT 0,
    max_downloads INTEGER DEFAULT 10,
    expires_at TEXT NOT NULL,
    created_at TEXT NOT NULL
);
-- 12. Printify catalog mappings and webhook receipts
CREATE TABLE IF NOT EXISTS printify_product_variants (
    product_id TEXT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    printify_product_id TEXT NOT NULL,
    blueprint_id INTEGER,
    print_provider_id INTEGER,
    variant_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    is_available INTEGER NOT NULL DEFAULT 1,
    production_cost REAL,
    retail_price REAL,
    shipping_json TEXT,
    hostinger_variant_id TEXT,
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
    processed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_printify_webhook_order
    ON printify_webhook_events (printify_order_id);

CREATE TABLE IF NOT EXISTS paypal_webhook_events (
    event_id TEXT PRIMARY KEY,
    event_type TEXT NOT NULL,
    resource_id TEXT,
    processed_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_paypal_webhook_resource
    ON paypal_webhook_events (resource_id);

-- 13. Transactional email delivery metadata (message bodies are never stored)
CREATE TABLE IF NOT EXISTS transactional_email_events (
    id TEXT PRIMARY KEY,
    event_key TEXT UNIQUE NOT NULL,
    event_type TEXT NOT NULL,
    provider TEXT NOT NULL,
    recipient TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'pending', -- 'pending', 'sent', 'failed'
    provider_message_id TEXT,
    created_at TEXT NOT NULL,
    sent_at TEXT,
    updated_at TEXT NOT NULL
);


-- 12. Member Wellness Letters
CREATE TABLE IF NOT EXISTS wellness_letters (
    id TEXT PRIMARY KEY,
    slug TEXT NOT NULL,
    locale TEXT NOT NULL,
    title TEXT NOT NULL,
    publish_date TEXT NOT NULL,
    summary TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(slug, locale)
);
