import { defineConfig } from 'orval';

export default defineConfig({
  'busy-bee': {
    input: './openapi.json',
        output: {
            target: './src/schemas.ts',
            mode: 'single',
            client: 'zod'
        },
  },
});
