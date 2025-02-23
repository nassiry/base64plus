/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */
/** @internal */
class Base64Utils {
    /**
     * Determines if the environment is Node.js.
     * @returns True if running in Node.js, otherwise false.
     */
    static get isNode() {
        return typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
    }
    /**
     * Node.js-compatible btoa function.
     * @param str - The binary string to encode.
     * @returns Base64-encoded string.
     */
    static nodeBtoa(str) {
        return Buffer.from(str, 'binary').toString('base64');
    }
    /**
     * Node.js-compatible atob function.
     * @param base64 - The Base64 string to decode.
     * @returns Decoded binary string.
     */
    static nodeAtob(base64) {
        return Buffer.from(base64, 'base64').toString('binary');
    }
    /**
     * Gets the appropriate `btoa` function based on the environment.
     */
    static get btoaFn() {
        return this.isNode ? this.nodeBtoa : btoa.bind(window);
    }
    /**
     * Gets the appropriate `atob` function based on the environment.
     */
    static get atobFn() {
        return this.isNode ? this.nodeAtob : atob.bind(window);
    }
    /**
     * Validates whether a given string is a properly formatted Base64 string.
     * @param base64String - The string to validate.
     * @returns True if the string is valid Base64, false otherwise.
     */
    static isValidBase64(base64String) {
        const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
        return base64Regex.test(base64String);
    }
}

/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */
class Base64Plus {
    /**
     * Encodes a string to Base64, supporting full Unicode characters.
     * @param input - The string to encode.
     * @returns The Base64-encoded string.
     * @throws TypeError if input is not a valid string.
     */
    static encode(input) {
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
    static decode(base64String) {
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
    static isValidBase64(base64String) {
        return Base64Utils.isValidBase64(base64String);
    }
}

/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */

export { Base64Plus as default };
//# sourceMappingURL=base64Plus.esm.js.map
