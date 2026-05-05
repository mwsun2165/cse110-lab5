// unit.test.js

import * as functions from '../code-to-unit-test/unit-test-me';

describe('isPhoneNumber', () => {
  test('returns true for (123) 456-7890', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('returns true for 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('returns false for 1234567890', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
  });

  test('returns false for abc-def-ghij', () => {
    expect(functions.isPhoneNumber('abc-def-ghij')).toBe(false);
  });
});

describe('isEmail', () => {
  test('returns true for user@example.com', () => {
    expect(functions.isEmail('user@example.com')).toBe(true);
  });

  test('returns true for domain_user@domain.co', () => {
    expect(functions.isEmail('domain_user@domain.co')).toBe(true);
  });

  test('returns false for user@example', () => {
    expect(functions.isEmail('user@example')).toBe(false);
  });

  test('returns false for domain_user@domain.corp', () => {
    expect(functions.isEmail('domain_user@domain.corp')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('returns true for Abcd1234', () => {
    expect(functions.isStrongPassword('Abcd1234')).toBe(true);
  });

  test('returns true for a_b1', () => {
    expect(functions.isStrongPassword('a_b1')).toBe(true);
  });

  test('returns false when starting with number', () => {
    expect(functions.isStrongPassword('1abc')).toBe(false);
  });

  test('returns false when too short', () => {
    expect(functions.isStrongPassword('Ab1')).toBe(false);
  });
});

describe('isDate', () => {
  test('returns true for 1/2/2026', () => {
    expect(functions.isDate('1/2/2026')).toBe(true);
  });

  test('returns true for 12/31/1999', () => {
    expect(functions.isDate('12/31/1999')).toBe(true);
  });

  test('returns false for 1/2/26', () => {
    expect(functions.isDate('1/2/26')).toBe(false);
  });

  test('returns false for 2024-01-01', () => {
    expect(functions.isDate('2024-01-01')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('returns true for #fff', () => {
    expect(functions.isHexColor('#fff')).toBe(true);
  });

  test('returns true for A1B2C3', () => {
    expect(functions.isHexColor('A1B2C3')).toBe(true);
  });

  test('returns false for #12', () => {
    expect(functions.isHexColor('#12')).toBe(false);
  });

  test('returns false for #GGG', () => {
    expect(functions.isHexColor('#GGG')).toBe(false);
  });
});
