import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateEstimate, validateInquiryForm } from './estimator';

test('calculateEstimate returns 0 for empty service selection', () => {
  const result = calculateEstimate({
    selectedServices: [],
    scope: 'startup',
    speed: 'standard',
  });
  assert.equal(result.minBudget, 0);
  assert.equal(result.maxBudget, 0);
  assert.match(result.summary, /Select one or more services/);
});

test('calculateEstimate applies multi-service discounts and scope multipliers correctly', () => {
  const single = calculateEstimate({
    selectedServices: ['web-dev'],
    scope: 'startup',
    speed: 'standard',
  });
  assert.equal(single.minBudget, 4500);
  assert.equal(single.maxBudget, 12000);

  // 2 services get 10% discount
  const dual = calculateEstimate({
    selectedServices: ['web-dev', 'cloud-hosting'],
    scope: 'startup',
    speed: 'standard',
  });
  // (4500 + 2500) * 0.9 = 7000 * 0.9 = 6300
  assert.equal(dual.minBudget, 6300);
  // (12000 + 7500) * 0.9 = 19500 * 0.9 = 17550
  assert.equal(dual.maxBudget, 17550);

  // Enterprise scope has 2.5 multiplier
  const enterprise = calculateEstimate({
    selectedServices: ['custom-solutions'],
    scope: 'enterprise',
    speed: 'standard',
  });
  assert.equal(enterprise.minBudget, Math.round(7500 * 2.5));
  assert.equal(enterprise.maxBudget, Math.round(22000 * 2.5));
});

test('calculateEstimate handles add-ons and accelerated speed', () => {
  const result = calculateEstimate({
    selectedServices: ['web-dev'],
    scope: 'startup',
    speed: 'accelerated',
    includeAudit: true,
    dedicatedSla: true,
  });

  // Base 4500 + 1200 audit + 1800 SLA = 7500, * 1.2 accelerated = 9000
  assert.equal(result.minBudget, 9000);
  assert.ok(result.minWeeks <= 3);
});

test('validateInquiryForm checks valid and invalid cases', () => {
  const invalid = validateInquiryForm({
    fullName: '',
    email: 'bad-email',
    selectedServices: [],
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.selectedServices);
  assert.ok(invalid.errors.message);

  const valid = validateInquiryForm({
    fullName: 'Alexander Wright',
    email: 'alex@enterprise.com',
    selectedServices: ['web-dev', 'cloud-hosting'],
    message: 'We want to modernize our web platform and migrate to secure cloud hosting.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
