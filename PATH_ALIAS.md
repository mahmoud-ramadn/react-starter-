# Path Alias Configuration

## 📂 Path Alias Setup

This project is configured with a path alias `@` that points to the `src` directory, making imports cleaner and more maintainable.

## 🎯 Usage Examples

### Before (relative imports):

```typescript
import { formatNumber } from '../../../utils';
import Header from '../../components/Header';
import { API_ENDPOINTS } from '../../../constants';
```

### After (using @ alias):

```typescript
import { formatNumber } from '@/utils';
import Header from '@/components/Header';
import { API_ENDPOINTS } from '@/constants';
```

## 📁 Available Paths

- `@/components` → `src/components`
- `@/pages` → `src/pages`
- `@/utils` → `src/utils`
- `@/hooks` → `src/hooks`
- `@/services` → `src/services`
- `@/types` → `src/types`
- `@/constants` → `src/constants`
- `@/styles` → `src/styles`
- `@/assets` → `src/assets`

## ⚙️ Configuration Files Updated

1. **`vite.config.ts`** - Added resolve alias for Vite bundler
2. **`tsconfig.app.json`** - Added TypeScript path mapping for IntelliSense
3. **`vitest.config.ts`** - Added alias support for testing environment
4. **`.vscode/settings.json`** - Updated import preferences for VS Code

## 🎉 Benefits

- **Cleaner imports**: No more `../../../` relative paths
- **Better refactoring**: Moving files won't break imports
- **Improved readability**: Clear indication of module location
- **IDE support**: Full IntelliSense and auto-completion
- **Consistent across environments**: Works in dev, build, and test

## 💡 Example Implementation

The project already includes examples in:

- **`src/pages/App.tsx`** - Uses `@/utils`, `@/assets`, and `@/styles` aliases
- **`src/pages/App.test.tsx`** - Uses `@/pages` alias for importing components
- **`src/utils/index.ts`** - Contains utility functions accessible via `@/utils`

## 🔧 VS Code Integration

The configuration ensures that:

- Auto-imports prefer the shortest path (using aliases when beneficial)
- IntelliSense works correctly with the alias paths
- Import suggestions include both relative and alias options
