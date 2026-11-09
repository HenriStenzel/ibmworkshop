/**
 * calculator.js — Basic arithmetic utilities and operation stats tracker.
 */

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Tracks how many times each operation has been called.
 */
class StatsTracker {
  constructor() {
    this.counts = {};
  }

  /**
   * Records an operation by name.
   * @param {string} operation - Name of the operation (e.g. 'add', 'multiply').
   */
  record(operation) {
    this.counts[operation] = (this.counts[operation] || 0) + 1;
    console.log(`[StatsTracker] ${operation}: ${this.counts[operation]} call(s)`);
  }

  /**
   * Returns the current counts for all tracked operations.
   * @returns {Object}
   */
  getStats() {
    return { ...this.counts };
  }
}

module.exports = { add, multiply, StatsTracker };
