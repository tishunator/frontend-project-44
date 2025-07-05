import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // базовый набор правил JavaScript
  js.configs.recommended,

  // кастомный слой с настройками под твой CLI‑проект
  {
    files: ['**/*.{js,mjs,cjs}'],          // JSX больше не нужен
    languageOptions: {
      // говорим ESLint, что код запускается в Node
      globals: globals.node,
      sourceType: 'module',                // мы пишем ES‑модули (import/export)
      ecmaVersion: 'latest',
    },
    // здесь можно добавить свои правила или плагины позже
  },
]);