# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## 📁 Project Structure

This project follows a well-organized folder structure for better maintainability and scalability. See [`FOLDER_STRUCTURE.md`](./FOLDER_STRUCTURE.md) for detailed information about the project organization.

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Run tests:

   ```bash
   npm run test        # Run tests in watch mode
   npm run test:run    # Run tests once
   npm run test:ui     # Run tests with UI
   ```

5. Code formatting and linting:
   ```bash
   npm run lint        # Check for linting issues
   npm run lint:fix    # Auto-fix linting issues
   npm run format      # Format code with Prettier
   ```

## 🪝 Git Hooks (Husky)

This project uses Husky to enforce code quality:

- **pre-commit**: Runs linting, formatting, and tests on staged files
- **commit-msg**: Validates commit messages follow conventional commit format
- **pre-push**: Runs full test suite before pushing to remote

Commit message format examples:

- `feat: add new user authentication`
- `fix: resolve navigation bug`
- `docs: update README with setup instructions`
- `test: add unit tests for user service`

## 📚 Available Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
