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
});
