import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom', 
        globals: true,       
        setupFiles: ['./vitest.setup.ts'],
    },
    resolve: {
        alias: {
            '@': path.resolve(import.meta.dirname, './src'), // '@/...' পাথ পাথ সঠিকভাবে রেজলভ করার জন্য
        },
    },
});