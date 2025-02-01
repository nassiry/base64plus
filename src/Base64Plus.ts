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
     * @param input - The string to encode.
     * @returns The Base64-encoded string.
     * @throws TypeError if input is not a valid string.
     */
    public static encode(input: string): string {
        if (typeof input !== 'string') {
            throw new TypeError('Input must be a string');
        }

        const encoder = new TextEncoder();
        const data = encoder.encode(input);
        const binary = String.fromCharCode(...data);

        return Base64Utils.btoaFn(binary);
    }

    /**
     * Decodes a Base64 string back to a Unicode string.
     * @param base64String - The Base64-encoded string.
     * @returns The decoded Unicode string.
     * @throws TypeError if input is not a valid Base64 string.
     */
    public static decode(base64String: string): string {
        if (typeof base64String !== 'string') {
            throw new TypeError('Base64 input must be a string');
        }

        if (!Base64Utils.isValidBase64(base64String)) {
            throw new TypeError('Invalid Base64 string format');
        }

        const binary = Base64Utils.atobFn(base64String);
        const data = Uint8Array.from(binary, char => char.charCodeAt(0));
        const decoder = new TextDecoder();

        return decoder.decode(data);
    }

    /**
     * Validates if a string is a valid Base64 string.
     * @param base64String - The string to validate.
     * @returns True if valid, false otherwise.
     */
    public static isValidBase64(base64String: string): boolean {
        return Base64Utils.isValidBase64(base64String);
    }
}
