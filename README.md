<div align="center">

# Base64Plus

![Build Status](https://img.shields.io/github/actions/workflow/status/nassiry/base64plus/ci.yml?branch=main)
[![npm version](https://img.shields.io/npm/v/base64plus?color=blue&label=npm%20version&style=flat-square)](https://www.npmjs.com/package/base64plus)
![Total Downloads](https://img.shields.io/npm/dt/base64plus.svg)
[![Latest Release](https://img.shields.io/github/release/nassiry/base64plus?style=flat-square)](https://github.com/nassiry/base64plus/releases)
[![License](https://img.shields.io/github/license/nassiry/base64plus?style=flat-square)](https://github.com/nassiry/base64plus/blob/main/LICENSE)

</div>

**Base64Plus** is a modern, Unicode-safe Base64 encoding and decoding library.
It supports **Node.js**, **ES Modules**, **Browsers**, and **TypeScript** with a built-in polyfill for Node.js environments.

- **Handles Unicode strings properly**: Native `atob`/`btoa` fail with multi-byte characters like emojis or non-Latin scripts.
- **Works in both Node.js & Browsers**: Node.js lacks `atob`/`btoa`, but **Base64Plus** provides a seamless polyfill.
- **Supports ES Modules & TypeScript**: Fully typed for modern JavaScript projects.
- **Encodes and decodes Buffers**: Unlike `atob`, which only works with plain strings.
- **No dependencies & lightweight**: Small package size with no external dependencies.

## Table Of Contents

1. [Installation](#1-installation)
    - [Option 1: Install via NPM](#option-1-install-via-npm)
    - [Option 2: Use via CDN](#option-2-use-via-cdn)
    - [Option 3: Download Manually](#option-3-download-manually)
2. [Usage](#2-usage)
    - [Node.js (CommonJS)](#nodejs-commonjs)
    - [ES Modules / TypeScript](#es-modules--typescript)
3. [API Reference](#3-api-reference)
    - [Encoding and Decoding](#encoding-and-decoding)
    - [Validation](#validation)
4. [Development & Contribution](#4-development--contribution)
    - [Build the Project](#build-the-project)
    - [Run Tests](#run-tests)
5. [Changelog](#changelog)
6. [License](#license)


## 1. Installation

- ### Option 1: Install via NPM
    ```sh
    npm install base64plus
    ```

- ### Option 2: Use via CDN
Include the `UMD` version directly in your HTML file:

```html
<script src="https://github.com/nassiry/base64plus/releases/latest/download/base64Plus.umd.js"></script>
<script>
  console.log(Base64Plus.encode("Hello, World!"));
</script>
```
- ### Option 3: Download Manually
Get the latest release from [GitHub Releases](https://github.com/nassiry/base64plus/releases/latest).

## 2. Usage
- ### Node.js (CommonJS)
    ```javascript
    const Base64Plus = require("base64plus");
    
    const encoded = Base64Plus.encode("Hello, World!");
    console.log(encoded); // Base64 string
    
    const decoded = Base64Plus.decode(encoded);
    console.log(decoded); // Hello, World!
  
    const encodedUrl = Base64Plus.encodeUrl("Hello, World!");
    console.log(encodedUrl); // Base64 string  
    
    const decodedUrl = Base64Plus.decodeUrl(encodedUrl);
    console.log(decodedUrl); // Hello, World!
    ```

- ### ES Modules / TypeScript
    ```javascript
    import Base64Plus from "base64plus";
    
    const encoded = Base64Plus.encode("Base64 Encoding");
    console.log(encoded); // Base64 string
    
    const decoded = Base64Plus.decode(encoded);
    console.log(decoded); // Base64 Encoding
    ```

## 3. API Reference
### Encoding and Decoding
- `Base64Plus.encode(input: string): string`
    - Encodes a string to **Base64** while supporting full **Unicode characters**.
- `Base64Plus.decode(base64String: string): string`
    - Decodes a **Base64 string** back to a **Unicode string**.
-  `Base64Plus.encodeUrl(input: string): string`
    - Encodes a string to **URL-safe Base64**.
- `Base64Plus.decodeUrl(Base64String: string): string`
    - Decodes a **URL-safe Base64** string back to a Unicode string.
### Validation
- `Base64Plus.isValid(base64String: string): boolean`
    - Checks if a string is a valid **Base64 string**.
> **Deprecated:** `Base64Plus.isValidBase64(base64String: string): boolean`
Use `Base64Plus.isValid` instead.

## 4. Development & Contribution
Clone the Repository & `install` the dependencies.
```sh
git clone https://github.com/nassiry/base64plus.git
cd base64plus
npm install
```
- ### Build the Project
    ```sh
    npm run build
    ```
- ### Run Tests
    ```sh
    npm test
    ```
For more details on contributing, see [CONTRIBUTING](CONTRIBUTING.md).

## Changelog

See [CHANGELOG](CHANGELOG.md) for release details.

## License
This package is open-source software licensed under the [MIT license](LICENSE).
