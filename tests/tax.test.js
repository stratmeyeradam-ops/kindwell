// tests/tax.test.js
import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateOrderTax,
  configureTaxRule,
  resetTaxConfig,
  taxConfig
} from '../src/services/tax.js';

describe('Configuration-Driven Tax System', () => {
  beforeEach(() => {
    resetTaxConfig();
  });

  test('unconfigured jurisdictions strictly return zero tax (no invented default rates)', () => {
    const items = [
      { type: 'printify_merch', totalPrice: 100.00 },
      { type: 'digital', totalPrice: 50.00 }
    ];

    // Testing unconfigured jurisdictions - must return 0.00
    assert.equal(calculateOrderTax(items, { state: 'CA', country: 'US' }), 0.00);
    assert.equal(calculateOrderTax(items, { state: 'NY', country: 'US' }), 0.00);
    assert.equal(calculateOrderTax(items, { state: 'TX', country: 'US' }), 0.00);
    assert.equal(calculateOrderTax(items, { state: 'UNKNOWN', country: 'XX' }), 0.00);
  });

  test('explicitly configured exempt jurisdiction (e.g. Oregon) returns zero tax', () => {
    const items = [{ type: 'printify_merch', totalPrice: 50.00 }];
    assert.equal(calculateOrderTax(items, { state: 'OR', country: 'US' }), 0.00);
  });

  test('supports explicit configured rules with separate physical vs digital product rates', () => {
    // Configure an explicit tax rule for Washington: 6.5% on physical goods, 0% on digital goods
    configureTaxRule('US:WA', {
      name: 'Washington State Test Rule',
      physicalRate: 0.065,
      digitalRate: 0.00
    });

    const physicalOnly = [{ type: 'printify_merch', totalPrice: 100.00 }];
    assert.equal(calculateOrderTax(physicalOnly, { state: 'WA', country: 'US' }), 6.50);

    const digitalOnly = [{ type: 'digital', totalPrice: 100.00 }];
    assert.equal(calculateOrderTax(digitalOnly, { state: 'WA', country: 'US' }), 0.00);

    const mixedOrder = [
      { type: 'printify_merch', totalPrice: 100.00 },
      { type: 'digital', totalPrice: 50.00 }
    ];
    // 100 * 0.065 + 50 * 0.00 = 6.50
    assert.equal(calculateOrderTax(mixedOrder, { state: 'WA', country: 'US' }), 6.50);
  });

  test('supports updating rules dynamically without application architectural changes', () => {
    // Dynamically configure a country-level rule
    configureTaxRule('CA', {
      name: 'Canada Test Rule',
      physicalRate: 0.05,
      digitalRate: 0.05
    });

    const items = [{ type: 'digital', totalPrice: 80.00 }];
    assert.equal(calculateOrderTax(items, { country: 'CA' }), 4.00);

    // Reset restores initial state
    resetTaxConfig();
    assert.equal(calculateOrderTax(items, { country: 'CA' }), 0.00);
  });
});
