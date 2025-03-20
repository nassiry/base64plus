/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */

/** @internal */
export class Base64Utils {
    /**
     * Determines if the environment is Node.js.
     *
     * @returns True if running in Node.js, otherwise false.
     */
    public static get isNode(): boolean {
        return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    }

    /**
     * Node.js-compatible btoa function.
     *
     * @param str - The binary string to encode.
     * @returns Base64-encoded string.
     */
    public static nodeBtoa(str: string): string {
        return Buffer.from(str, 'binary').toString('base64');
    }

    /**
     * Node.js-compatible atob function.
     *
     * @param base64 - The Base64 string to decode.
     * @returns Decoded binary string.
     */
    public static nodeAtob(base64: string): string {
        return Buffer.from(base64, 'base64').toString('binary');
    }

    /**
     * Gets the appropriate `btoa` function based on the environment.
     */
    public static get btoaFn(): (str: string) => string {
        return this.isNode ? this.nodeBtoa : (typeof btoa === 'function' ? btoa.bind(window) : this.nodeBtoa);
    }

    /**
     * Gets the appropriate `atob` function based on the environment.
     */
    public static get atobFn(): (base64: string) => string {
        return this.isNode ? this.nodeAtob : (typeof atob === 'function' ? atob.bind(window) : this.nodeAtob);
    }

    /**
     * Validates whether a given string is a properly formatted Base64 string.
     *
     * @param base64String - The string to validate.
     * @returns True if the string is valid Base64, false otherwise.
     */
    public static isValidBase64(base64String: string): boolean {
        const trimmed = base64String.trim();

        if (trimmed.length === 0) {
            return true;
        }

        // Regex to match both standard and URL-safe Base64
        // Allows at most 2 "=" padding characters at the end (or no padding at all)
        const base64Regex = /^[A-Za-z0-9+/_-]+={0,2}$/;

        if (!base64Regex.test(trimmed)) {
            return false;
        }

        // If padding exists, ensure correct format
        if (trimmed.includes('=')) {
            return trimmed.endsWith('=') && (trimmed.length % 4 === 0);
        }

        return true;
    }
}
