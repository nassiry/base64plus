<div align="center">

# Base64Plus

![Build Status](https://img.shields.io/github/actions/workflow/status/nassiry/base64plus/ci.yml?branch=main)
[![License](https://img.shields.io/github/license/nassiry/base64plus?style=flat-square)](https://github.com/nassiry/base64plus/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/base64plus?color=blue&label=npm%20version&style=flat-square)](https://www.npmjs.com/package/base64plus)
![Total Downloads](https://img.shields.io/npm/dt/base64plus.svg)
[![Latest Release](https://img.shields.io/github/release/nassiry/base64plus?style=flat-square)](https://github.com/nassiry/base64plus/releases)

</div>

**Base64Plus** is a modern, Unicode-safe **Base64 encoding and decoding** library.  
It supports **Node.js**, **ES Modules**, **Browsers** and **TypeScript**.

## Installation

### **Option 1: Install via NPM**
```sh
npm install base64plus
```

### Option 2: Use via CDN
Include the `UMD` version directly in your HTML file:
```html
<script src="https://github.com/nassiry/base64plus/releases/latest/download/base64Plus.umd.js"></script>
<script>
  console.log(Base64Plus.encode("Hello, World!"));
</script>
```
### Option 3: Download Manually
Get the latest release from [GitHub Releases](https://github.com/nassiry/base64plus/releases/latest).

## Usage
### 1. Node.js (CommonJS)
```javascript
const { Base64Plus } = require("base64plus");

const encoded = Base64Plus.encode("Hello, World!");
console.log(encoded); // Base64 string

const decoded = Base64Plus.decode(encoded);
console.log(decoded); // Hello, World!
```

### 2. ES Modules
```javascript
import { Base64Plus } from "base64plus";

const encoded = Base64Plus.encode("Base64 Encoding");
console.log(encoded); // Base64 string

const decoded = Base64Plus.decode(encoded);
console.log(decoded); // Base64 Encoding
```
### 3. TypeScript Usage
For **TypeScript**, just import **Base64Plus** and enjoy the full type support!
```javascript
import { Base64Plus } from "base64plus";

const encoded: string = Base64Plus.encode("Hello, TypeScript!");
console.log(encoded); // Base64 string

const decoded: string = Base64Plus.decode(encoded);
console.log(decoded); // Hello, TypeScript!
```

### API Reference
- `Base64Plus.encode(input: string): string`
    Encodes a string to **Base64** while supporting full **Unicode characters**.
- `Base64Plus.decode(base64String: string): string`
    Decodes a **Base64 string** back to a **Unicode string**.    
- `Base64Plus.isValidBase64(base64String: string): boolean`
    Checks if a string is a valid **Base64 string**.    

### Development & Contribution
Clone the Repository & `install` the dependencies.
```sh
git clone https://github.com/nassiry/base64plus.git
cd base64plus
npm install
```
### Build the Project
```sh
npm run build
```
### Run Tests
```sh
npm test
```
### License
This package is open-source software licensed under the [MIT license](LICENSE).
