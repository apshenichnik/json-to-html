import {defineConfig} from 'vite';
import zipPack from "vite-plugin-zip-pack";
import { resolve } from 'path';
import { readFileSync } from 'fs';

// Read and parse package.json
const packageJson = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf-8'));
const version = packageJson.version;
const name = packageJson.name;

export default defineConfig({
    plugins: [
        zipPack({
            inDir: 'dist',        // The input directory to zip (default is 'dist')
            outDir: './dist/release',          // The directory where the zip will be saved (default is 'dist-zip')
            outFileName: `${name}.release-${version}.zip`, // The name of the output zip file (default is 'dist.zip')
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/lib/parser.ts'), // Entry file for the library
            name: 'JSON-To-HTML', // Global variable name for UMD build
            fileName: (format) => `${name}.${format}.js`, // Output file naming pattern
        },
        rollupOptions: {},
    },
});