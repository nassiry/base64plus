import { Base64Utils } from './Base64Utils';

/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */
export class Base64Plus {
    /**
     * Encodes a string to Base64, supporting full Unicode characters.
     *
     * @param input - The string to encode.
     * @returns The Base64-encoded string.
     * @throws TypeError if input is not a valid string.
     */
    public static encode(input: string): string {
        if (typeof input !== 'string') {
            throw new TypeError(`[Base64Plus]: Expected a string, but got ${typeof input}`);
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const chunkSize = 65535;
        const binaryChunks: string[] = [];

        for (let i = 0; i < data.length; i += chunkSize) {

            const chunk = data.subarray(i, i + chunkSize);

            // Convert the chunk to a binary string using the spread operator
            // Note: The spread operator is safe for chunks of size <= 65,535
            binaryChunks.push(String.fromCharCode(...chunk));
        }

        const binary = binaryChunks.join('');
        return Base64Utils.btoaFn(binary);
    }

    /**
     * Decodes a Base64 string back to a Unicode string.
     *
     * @param base64String - The Base64-encoded string.
     * @returns The decoded Unicode string.
     * @throws TypeError if input is not a valid Base64 string.
     */
    public static decode(base64String: string): string {
        if (typeof base64String !== 'string') {
            throw new TypeError(`[Base64Plus]: Expected a Base64 string, but got ${typeof base64String}`);
        }

        if (!Base64Utils.isValidBase64(base64String)) {
            throw new TypeError(`[Base64Plus]: Invalid Base64 format: "${base64String}". Ensure the input is correctly encoded.`);
        }

        const binary = Base64Utils.atobFn(base64String);
        const data = Uint8Array.from(binary, char => char.charCodeAt(0));
        const decoder = new TextDecoder();

        return decoder.decode(data);
    }

    /**
     * Encodes a string to URL-safe Base64.
     *
     * @param input - The string to encode.
     * @returns The URL-safe Base64-encoded string.
     * @throws TypeError if input is not a valid string.
     */
    public static encodeUrl(input: string): string {
        const standardBase64 = this.encode(input);
        return standardBase64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    /**
     * Decodes a URL-safe Base64 string back to a Unicode string.
     *
     * @param urlSafeBase64 - The URL-safe Base64-encoded string.
     * @returns The decoded Unicode string.
     * @throws TypeError if input is not a valid URL-safe Base64 string.
     */
    public static decodeUrl(urlSafeBase64: string): string {
        const standardBase64 = urlSafeBase64
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const paddingLength = (4 - (standardBase64.length % 4)) % 4;
        const paddedBase64 = standardBase64 + '='.repeat(paddingLength);

        return this.decode(paddedBase64);
    }

    /**
     * Validates if a string is a valid Base64 string.
     *
     * @param base64String - The string to validate.
     * @returns True if valid, false otherwise.
     */
    public static isValid(base64String: string): boolean {
        return Base64Utils.isValidBase64(base64String);
    }

    /**
     * @deprecated Use `isValid` instead.
     */
    public static isValidBase64(base64String: string): boolean {
        return Base64Utils.isValidBase64(base64String);
    }
}
