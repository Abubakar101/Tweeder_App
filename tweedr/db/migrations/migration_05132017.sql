\c tweedr_dev

CREATE TABLE IF NOT EXISTS tweeds (
  id BIGSERIAL PRIMARY KEY,
  tweed_text VARCHAR(1024),
  tweed_time VARCHAR(1024)
);
