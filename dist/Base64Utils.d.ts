/**
 * Copyright (c) A.S Nassiry
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see https://github.com/nassiry/base64plus
 */
/** @internal */
export declare class Base64Utils {
    /**
     * Determines if the environment is Node.js.
     * @returns True if running in Node.js, otherwise false.
     */
    static get isNode(): boolean;
    /**
     * Node.js-compatible btoa function.
     * @param str - The binary string to encode.
     * @returns Base64-encoded string.
     */
    static nodeBtoa(str: string): string;
    /**
     * Node.js-compatible atob function.
     * @param base64 - The Base64 string to decode.
     * @returns Decoded binary string.
     */
    static nodeAtob(base64: string): string;
    /**
     * Gets the appropriate `btoa` function based on the environment.
     */
    static get btoaFn(): (str: string) => string;
    /**
     * Gets the appropriate `atob` function based on the environment.
     */
    static get atobFn(): (base64: string) => string;
    /**
     * Validates whether a given string is a properly formatted Base64 string.
     * @param base64String - The string to validate.
     * @returns True if the string is valid Base64, false otherwise.
     */
    static isValidBase64(base64String: string): boolean;
}
