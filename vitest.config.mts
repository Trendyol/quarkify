import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig, coverageConfigDefaults, configDefaults } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    exclude:[
      ...configDefaults.exclude, 
      'src/stories/**',
      'src/**/index.ts',
      'src/**/{interfaces,enums}/**',
    ],
    coverage: {
      thresholds: {
        statements: 97.30,
        branches: 95.12,
        functions: 93.93,
        lines: 97.30,
      },
      exclude: [
        ...coverageConfigDefaults.exclude,
        'src/stories/**',
        'src/**/index.ts',
        'src/**/{interfaces,enums}/**',
      ]
    }
  },
  plugins: [tsconfigPaths()], 
});