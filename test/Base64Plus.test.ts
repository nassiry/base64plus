import Base64Plus from "../src";

describe('Base64Plus', () => {
    test('encodes and decodes Latin characters', () => {
        const input = 'Hello, World!';
        const encoded = Base64Plus.encode(input);
        const decoded = Base64Plus.decode(encoded);
        expect(decoded).toBe(input);
    });

    test('encodes and decodes Arabic characters', () => {
        const input = 'مرحبا بالعالم';
        const encoded = Base64Plus.encode(input);
        const decoded = Base64Plus.decode(encoded);
        expect(decoded).toBe(input);
    });

    test('encodes and decodes Persian characters', () => {
        const input = 'سلام جهان';
        const encoded = Base64Plus.encode(input);
        const decoded = Base64Plus.decode(encoded);
        expect(decoded).toBe(input);
    });

    test('validates Base64 strings', () => {
        const validBase64 = 'SGVsbG8gV29ybGQ=';
        const invalidBase64 = 'Invalid@Base64!';
        expect(Base64Plus.isValid(validBase64)).toBe(true);
        expect(Base64Plus.isValid(invalidBase64)).toBe(false);
    });

    test('throws error for invalid inputs', () => {
        expect(() => Base64Plus.encode(123 as any)).toThrow(TypeError);
        expect(() => Base64Plus.decode('Invalid@Base64!')).toThrow(TypeError);
    });

    test('encodes and decodes Latin characters (URL-safe)', () => {
        const input = 'Hello, World!';
        const encoded = Base64Plus.encodeUrl(input);
        const decoded = Base64Plus.decodeUrl(encoded);
        expect(decoded).toBe(input);
    });

    test('encodes and decodes Arabic characters (URL-safe)', () => {
        const input = 'مرحبا بالعالم';
        const encoded = Base64Plus.encodeUrl(input);
        const decoded = Base64Plus.decodeUrl(encoded);
        expect(decoded).toBe(input);
    });

    test('encodes and decodes Persian characters (URL-safe)', () => {
        const input = 'سلام جهان';
        const encoded = Base64Plus.encodeUrl(input);
        const decoded = Base64Plus.decodeUrl(encoded);
        expect(decoded).toBe(input);
    });

    test('validates URL-safe Base64 strings', () => {
        const validUrlSafeBase64 = 'SGVsbG8gV29ybGQ';
        const invalidUrlSafeBase64 = 'Invalid@Base64!';
        expect(Base64Plus.isValid(validUrlSafeBase64)).toBe(true);
        expect(Base64Plus.isValid(invalidUrlSafeBase64)).toBe(false);
    });

    test('validates URL-safe Base64 strings with padding', () => {
        const validUrlSafeBase64 = 'SGVsbG8gV29ybGQ=';
        expect(Base64Plus.isValid(validUrlSafeBase64)).toBe(true);
    });

    test('validates URL-safe Base64 strings with special characters', () => {
        const validUrlSafeBase64 = 'SGVsbG8gV29ybGQ-_';
        expect(Base64Plus.isValid(validUrlSafeBase64)).toBe(true);
    });

    test('rejects invalid Base64 strings', () => {
        const invalidBase64 = 'SGVsbG8gV29ybGQ!';
        expect(Base64Plus.isValid(invalidBase64)).toBe(false);
    });

    test('throws error for invalid URL-safe inputs', () => {
        expect(() => Base64Plus.encodeUrl(123 as any)).toThrow(TypeError);
        expect(() => Base64Plus.decodeUrl('Invalid@Base64!')).toThrow(TypeError);
    });
});
