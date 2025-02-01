/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */
export declare class Base64Plus {
    /**
     * Encodes a string to Base64, supporting full Unicode characters.
     * @param input - The string to encode.
     * @returns The Base64-encoded string.
     * @throws TypeError if input is not a valid string.
     */
    static encode(input: string): string;
    /**
     * Decodes a Base64 string back to a Unicode string.
     * @param base64String - The Base64-encoded string.
     * @returns The decoded Unicode string.
     * @throws TypeError if input is not a valid Base64 string.
     */
    static decode(base64String: string): string;
    /**
     * Validates if a string is a valid Base64 string.
     * @param base64String - The string to validate.
     * @returns True if valid, false otherwise.
     */
    static isValidBase64(base64String: string): boolean;
}
