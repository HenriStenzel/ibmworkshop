/**
 * validator.js — Validates that an object contains required string fields.
 */

const REQUIRED_FIELDS = ['id', 'name'];

/**
 * Checks whether the given object contains all required string fields.
 *
 * @param {Object} obj - The object to validate.
 * @returns {{ valid: boolean, missing: string[] }} Result with validity flag and
 *   list of any missing or non-string fields.
 */
function validate(obj) {
  if (obj === null || typeof obj !== 'object') {
    return { valid: false, missing: REQUIRED_FIELDS.slice() };
  }

  const missing = REQUIRED_FIELDS.filter(
    field => typeof obj[field] !== 'string' || obj[field].trim() === ''
  );

  return { valid: missing.length === 0, missing };
}

module.exports = { validate };
