import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/base64Plus.esm.js',
                format: 'es',
                sourcemap: true,
            },
            {
                file: 'dist/base64Plus.umd.js',
                format: 'umd',
                name: 'Base64Plus',
                sourcemap: true,
            },
            {
                file: 'dist/base64Plus.iife.js',
                format: 'iife',
                name: 'Base64Plus',
                sourcemap: true,
            },
        ],
        plugins: [
            nodeResolve(),
            commonjs(),
            typescript(),
        ],
    },
];
