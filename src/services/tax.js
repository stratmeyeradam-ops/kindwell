// src/services/tax.js
// Configuration-driven tax calculation for KindWell
// Tax rates are explicit configuration/data, NOT asserted universal rates.
// Unconfigured jurisdictions do not receive an invented rate.

export const taxConfig = {
  // Jurisdiction rules: { physicalRate: number, digitalRate: number, exempt?: boolean, name?: string }
  jurisdictions: {
    'US:OR': {
      name: 'Oregon',
      physicalRate: 0.0,
      digitalRate: 0.0,
      exempt: true
    }
  },
  // Default unconfigured rule: zero rate
  defaultRule: {
    physicalRate: 0.0,
    digitalRate: 0.0,
    configured: false
  }
};

/**
 * Allows explicit configuration of a tax jurisdiction rule.
 */
export function configureTaxRule(jurisdictionKey, rule) {
  taxConfig.jurisdictions[jurisdictionKey.toUpperCase()] = rule;
}

/**
 * Resets configuration to initial clean state.
 */
export function resetTaxConfig() {
  taxConfig.jurisdictions = {
    'US:OR': {
      name: 'Oregon',
      physicalRate: 0.0,
      digitalRate: 0.0,
      exempt: true
    }
  };
}

/**
 * Calculates tax for an order based on destination and item types.
 * Preserves separation between physical merchandise and digital products.
 * Unconfigured jurisdictions strictly return 0.00 tax.
 */
export function calculateOrderTax(items, { state = '', country = 'US' } = {}) {
  if (!items || items.length === 0) return 0.00;

  const normCountry = (country || 'US').trim().toUpperCase();
  const normState = (state || '').trim().toUpperCase();
  const jurisdictionKey = normState ? `${normCountry}:${normState}` : normCountry;

  // Exact lookup: jurisdiction rule or unconfigured default rule
  const rule = taxConfig.jurisdictions[jurisdictionKey] || taxConfig.defaultRule;

  let totalTax = 0;

  for (const item of items) {
    const isDigital = item.type === 'digital' || item.productType === 'digital';
    const rate = isDigital ? (rule.digitalRate || 0.0) : (rule.physicalRate || 0.0);
    const itemSubtotal = item.totalPrice != null
      ? item.totalPrice
      : ((item.unitPrice || item.price || 0) * (item.quantity || 1));

    totalTax += itemSubtotal * rate;
  }

  return Math.round(totalTax * 100) / 100;
}
