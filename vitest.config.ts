import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8', // Use 'v8' or 'istanbul' for coverage
    },
  },
});