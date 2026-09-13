-- Beulah Splendor — D1 Initial Schema
-- Migration 0001: Core tables

CREATE TABLE IF NOT EXISTS treatments (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('body', 'face', 'beauty', 'wellness')),
  short_description TEXT,
  long_description TEXT,
  duration_minutes INTEGER,
  price_zar INTEGER,
  image TEXT,
  active INTEGER DEFAULT 1,
  sort_order INTEGER DEFAULT 0,
  preparation TEXT,
  aftercare TEXT,
  suitability TEXT,
  created_at TEXT DEFAULT (datetime('now')),
  updated_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS booking_requests (
  id TEXT PRIMARY KEY,
  reference TEXT UNIQUE NOT NULL,
  treatment_id TEXT,
  preferred_date TEXT NOT NULL,
  preferred_time TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_email TEXT,
  notes TEXT,
  status TEXT DEFAULT 'requested' CHECK (status IN ('requested', 'confirmed', 'cancelled', 'completed')),
  created_at TEXT DEFAULT (datetime('now')),
  FOREIGN KEY (treatment_id) REFERENCES treatments(id)
);

CREATE INDEX IF NOT EXISTS idx_booking_requests_status ON booking_requests(status);
CREATE INDEX IF NOT EXISTS idx_booking_requests_date ON booking_requests(preferred_date);

CREATE TABLE IF NOT EXISTS talks (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT,
  topic TEXT,
  duration_minutes INTEGER,
  video_url TEXT,
  audio_url TEXT,
  hero_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS journal_posts (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT,
  hero_image TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  published_at TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS circle_interest (
  id TEXT PRIMARY KEY,
  name TEXT,
  phone TEXT,
  email TEXT,
  created_at TEXT DEFAULT (datetime('now'))
);
