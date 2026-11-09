/**
 * app.js — Demonstrates calculator utilities with operation tracking.
 */

const { add, multiply, StatsTracker } = require('./utils/calculator');

const tracker = new StatsTracker();

// 3 additions
console.log('add(2, 3)      =>', add(2, 3));
tracker.record('add');

console.log('add(10, 7)     =>', add(10, 7));
tracker.record('add');

console.log('add(100, 250)  =>', add(100, 250));
tracker.record('add');

// 2 multiplications
console.log('multiply(4, 5) =>', multiply(4, 5));
tracker.record('multiply');

console.log('multiply(3, 9) =>', multiply(3, 9));
tracker.record('multiply');

// Summary
console.log('\n--- Operation Summary ---');
console.log(tracker.getStats());
