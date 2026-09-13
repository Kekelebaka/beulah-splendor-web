-- Beulah Splendor — Seed Data
-- Treatments placeholder — ALL values are CONTENT GAPS until founder confirms

-- Body
INSERT OR IGNORE INTO treatments (id, slug, name, category, short_description, active, sort_order) VALUES
('t-body-001', 'full-body-massage', 'Full Body Massage', 'body', 'Restoring massage for the full body.', 1, 1),
('t-body-002', 'back-neck-shoulders', 'Back, Neck & Shoulders', 'body', 'Focused care where tension settles.', 1, 2);

-- Face
INSERT OR IGNORE INTO treatments (id, slug, name, category, short_description, active, sort_order) VALUES
('t-face-001', 'signature-facial', 'Signature Facial', 'face', 'A facial shaped around your skin.', 1, 1),
('t-face-002', 'deep-cleanse-facial', 'Deep Cleanse Facial', 'face', 'Thorough cleansing and renewal.', 1, 2);

-- Beauty
INSERT OR IGNORE INTO treatments (id, slug, name, category, short_description, active, sort_order) VALUES
('t-beauty-001', 'professional-makeup', 'Professional Makeup', 'beauty', 'Makeup for any occasion.', 1, 1);

-- Wellness
INSERT OR IGNORE INTO treatments (id, slug, name, category, short_description, active, sort_order) VALUES
('t-wellness-001', 'health-scan', 'Health Scan', 'wellness', 'Wellness assessment for deeper understanding.', 1, 1);

-- NOTE: Duration, price, long description, preparation, aftercare, suitability
-- are ALL content gaps until founder provides confirmed details.
