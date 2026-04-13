# AGENTS.md - Barbería PRO

## Project Overview
- **Type**: React SPA with React Router
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM 7

## Build Commands

```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

**Note**: No test framework or linter is currently configured.
**Recommendation**: Install ESLint + Prettier and Vitest before continuing development.

## Code Style Guidelines

### Project Structure
```
src/
├── screens/          # Page-level components (each route)
├── components/      # Reusable UI components (create as needed)
├── assets/          # Static assets (images, icons)
├── main.jsx         # Entry point
├── App.jsx          # Router configuration
└── style.css        # Global styles + Tailwind
```

### Imports
```jsx
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Component from './components/Component';
```

### Component Patterns
- Use functional components with arrow function syntax
- Export default at bottom of file
- Use JSX fragments `<>...</>` when needed
- Keep components focused and single-purpose

```jsx
const ComponentName = () => {
  const navigate = useNavigate();
  const handleClick = () => { /* ... */ };
  return <div>{/* JSX */}</div>;
};
export default ComponentName;
```

### Tailwind CSS (v4)
- Custom fonts: `font-headline`, `font-body`, `font-label`
- Custom colors: `primary`, `surface`, `on-surface`, `on-surface-variant`
- Use `bg-artisan-gradient` for primary buttons
- Custom shadows: `inner-shadow-outline-variant-15`

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Files | PascalCase | `Login.jsx` |
| Components | PascalCase | `const Login = () => ...` |
| Functions | camelCase | `handleSubmit` |
| CSS classes | kebab-case | `text-primary` |

### JSX Conventions
- Self-closing tags: `<Input />`
- Semantic HTML: `<main>`, `<section>`, `<header>`
- Accessibility: `htmlFor` on labels, `alt` on images, `type` on inputs

### Error Handling
- Use try/catch for async operations
- Validate form inputs inline
- Display errors via state: `const [error, setError] = useState(null);`

### State Management
```jsx
const [state, setState] = useState(initialValue);
useEffect(() => { /* side effect */ }, [dependencies]);
```

### Common Patterns

**Link navigation**: `<Link to="/ruta">Texto</Link>`
**Route parameter**: `const { id } = useParams();`
**Navigate**: `const navigate = useNavigate(); navigate('/ruta');`
**Form handler**: `const handleSubmit = (e) => { e.preventDefault(); /* ... */ };`

## Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | LandingPage | Home page |
| `/login` | Login | User login |
| `/registro` | Registro | User registration |
| `/seleccion` | SeleccionServicio | Service selection |
| `/calendario` | Calendario | Appointment booking |
| `/perfil` | Perfil | User profile |
| `/portfolio` | Portfolio | Barbers portfolio |
| `/confirmacion` | Confirmacion | Booking confirmation |

## Component Guidelines

### Creating New Screens
1. Create file in `src/screens/` with PascalCase name
2. Add route in `App.jsx` following existing pattern
3. Use semantic HTML structure (header/main/section/footer)
4. Apply consistent spacing with Tailwind utilities

### Reusable Components
- Create shared components in `src/components/`
- Examples: Button, Input, Card, Modal, LoadingSpinner
- Keep props simple and well-documented
- Use TypeScript if available for type safety

### State and Data Flow
- Pass data via props (parent to child)
- Use callback functions for child-to-parent communication
- Consider React Context for theme/auth/global state
- Avoid prop drilling - extract intermediate components

## Development Workflow

### Running Development Server
```bash
npm run dev
```
- Opens http://localhost:5173
- Hot module replacement enabled
- Changes auto-reload in browser

### Building for Production
```bash
npm run build
```
- Outputs to `dist/` directory
- Optimized and minified assets
- Ready for deployment to hosting

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Useful to test build before deployment

## Code Review Checklist

- [ ] Import React at top of JSX files
- [ ] Use semantic HTML elements
- [ ] Include accessibility attributes (alt, htmlFor, type)
- [ ] Follow naming conventions (PascalCase files/components)
- [ ] Use Tailwind utility classes consistently
- [ ] Handle errors in async operations
- [ ] Remove unused imports and variables

## Common Patterns Reference

### Conditional Classes
```jsx
className={`base-class ${isActive ? 'active-class' : ''}`}
```

### List Rendering
```jsx
items.map(item => (
  <Item key={item.id} data={item} />
))
```

### Loading State
```jsx
{isLoading ? <Spinner /> : <Content />}
```

### Form with Validation
```jsx
const [errors, setErrors] = useState({});
const validate = () => { /* ... */ };
const handleSubmit = (e) => {
  e.preventDefault();
  if (validate()) { /* submit */ }
};
```

## Working on This Project
1. Run `npm run dev` to start the dev server
2. Edit files in `src/` - changes hot-reload automatically
3. Build with `npm run build` before deploying
4. Test in browser at http://localhost:5173

## Recommended Improvements
- Add ESLint + Prettier for code consistency
- Add Vitest or React Testing Library for tests
- Consider TypeScript for type safety
- Extract repeated JSX into reusable components
- Add error boundaries for better error handling
- Implement proper form validation libraries
- Add prop-types or switch to TypeScript