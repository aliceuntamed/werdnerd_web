import { describe, expect, it } from 'vitest';
import { authErrorMessage, safeReturnTo } from './auth';

describe('account return destination', () => {
  it('preserves an internal Werd destination and filters', () => {
    expect(safeReturnTo('/werd/serendipity')).toBe('/werd/serendipity');
    expect(safeReturnTo('/vault?tag=rare#shelf')).toBe('/vault?tag=rare#shelf');
  });
  it.each([null, 'https://example.com', '//example.com', '/\\example.com', '/%2fexample.com', '/%5cexample.com', '/auth/login', '/auth/signup?next=/profile', '/bad%'])('rejects unsafe or looping destination %s', value => {
    expect(safeReturnTo(value)).toBe('/profile');
  });
});

describe('account errors', () => {
  it('never displays an unknown server error verbatim', () => {
    expect(authErrorMessage({ message: 'sensitive internal server detail' })).not.toContain('sensitive');
    expect(authErrorMessage(new TypeError('Failed to fetch'))).toContain('connection');
  });
  it('gives useful guidance for bad credentials and expired links', () => {
    expect(authErrorMessage({ code: 'invalid_credentials' })).toContain('email and password');
    expect(authErrorMessage({ code: 'otp_expired' })).toContain('expired');
  });
});
