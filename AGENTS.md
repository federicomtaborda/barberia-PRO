# AGENTS.md - Barbería PRO

## Project Overview

Full-stack project with React frontend (Vite) and Django backend.

| Component | Technology |
|-----------|------------|
| Frontend | React 19, Vite 8, React Router 7, Tailwind CSS 4 |
| Backend | Django 5, Django REST Framework, JWT (SimpleJWT) |
| State | Zustand (frontend), Django ORM (backend) |

---

## Build Commands

### Frontend (cd frontend)

```bash
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run generate-types  # Generate API types from OpenAPI schema
```

### Backend (cd backend)

```bash
python manage.py runserver           # Start Django server (http://localhost:8000)
python manage.py migrate            # Run migrations
python manage.py createsuperuser    # Create admin user
pytest                              # Run all tests
pytest path/to/test.py              # Run single test file
pytest -k test_name                 # Run tests matching pattern
pytest --tb=short                  # Run with shorter traceback
```

### Docker

```bash
docker-compose up --build           # Start all services
docker-compose down                 # Stop all services
```

---

## Code Style Guidelines

### General

- **Line length**: Max 100 characters
- **Indentation**: 2 spaces (frontend), 4 spaces (backend Python)
- **No trailing whitespace**
- **Use meaningful variable/function names**

### Frontend (React/TypeScript)

**Imports** (grouped, separated by blank lines):
```tsx
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useBookingStore from '../store/useBookingStore';
import Component from './components/Component';
```

**Component Pattern**:
```tsx
const ComponentName = () => {
  const navigate = useNavigate();
  const handleClick = () => { /* ... */ };
  return <div>{/* JSX */}</div>;
};
export default ComponentName;
```

**Naming**:
| Type | Convention | Example |
|------|------------|---------|
| Files | PascalCase | `Login.tsx` |
| Components | PascalCase | `const Login = () => ...` |
| Functions | camelCase | `handleSubmit` |
| Hooks | camelCase, prefix `use` | `useAuth` |

**Tailwind CSS**:
- Use `@theme` custom properties in `style.css`
- Custom fonts: `font-headline`, `font-body`, `font-label`
- Custom colors: `primary`, `surface`, `on-surface`
- Use `bg-artisan-gradient` for primary buttons
- Custom shadows: `inner-shadow-outline-variant-15`

**State Management**:
- Use Zustand for global state (`src/store/`)
- Use React useState/useEffect for local state

### Backend (Django/Python)

**Imports** (PEP 8 - stdlib, third-party, local):
```python
import os
from pathlib import Path

import environ
from rest_framework import generics, permissions

from users.models import CustomUser
from users.serializers import UserSerializer
```

**Naming**:
| Type | Convention | Example |
|------|------------|---------|
| Files | snake_case | `views.py` |
| Classes | PascalCase | `class UserSerializer` |
| Functions | snake_case | `def get_queryset` |
| Constants | UPPER_SNAKE_CASE | `MAX_RETRIES = 3` |

**Django Patterns**:
- Use DRF generics for views: `ListAPIView`, `CreateAPIView`, etc.
- Serializers should inherit from `serializers.ModelSerializer`
- Models use `models.Model` with clear field definitions
- URLs use descriptive names with `app_name` in `urls.py`

**Error Handling**:
- Use try/except in views for external calls
- Return appropriate HTTP status codes
- Use Django's logging for errors

---

## Project Structure

```
barberia-pro/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── api/             # Axios config, interceptors
│   │   ├── store/           # Zustand stores
│   │   ├── screens/         # Page components
│   │   ├── components/      # Reusable UI components
│   │   ├── types/           # TypeScript types
│   │   └── main.jsx         # Entry point
│   ├── package.json
│   └── vite.config.js
├── backend/                  # Django REST API
│   ├── core/                # Appointments, services app
│   ├── users/               # Custom user app
│   ├── barberia_pro/        # Django project settings
│   ├── requirements.txt
│   └── manage.py
├── docker-compose.yml
└── .env                     # Environment variables
```

---

## Routes

### Frontend

| Path | Component | Description |
|------|-----------|-------------|
| `/` | LandingPage | Home page |
| `/login` | Login | User login |
| `/registro` | Registro | Registration |
| `/seleccion` | SeleccionServicio | Service selection |
| `/calendario` | Calendario | Date/time selection |
| `/perfil` | Perfil | User profile (protected) |
| `/portfolio` | Portfolio | Barbers portfolio |
| `/confirmacion` | Confirmacion | Booking confirmation |

### Backend API

| Endpoint | Description |
|----------|-------------|
| `/api/` | API root |
| `/api/schema/` | OpenAPI schema |
| `/api/auth/` | Authentication endpoints |
| `/api/users/` | User CRUD |

---

## Agent Responsibilities

1. **Auth Agent**: Protect routes (`/perfil`, `/confirmacion`), JWT lifecycle
2. **Booking Agent**: Zustand store for appointments, validation before confirmation
3. **UX/UI Agent**: Maintain "No-Line" design system, use `ChromaticImage`

---

## Common Patterns

### Frontend: API call with error handling
```tsx
try {
  const response = await api.post('/endpoint', data);
  setData(response.data);
} catch (error) {
  setError(error.message);
}
```

### Backend: Model with timestamps
```python
class Service(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

---

## Development Workflow

1. Start backend: `cd backend && python manage.py runserver`
2. Start frontend: `cd frontend && npm run dev`
3. Make changes - hot reload enabled
4. Test: run pytest for backend, browser for frontend
5. Build: `npm run build` for frontend

---

## Recommended Improvements

- Add ESLint + Prettier for frontend
- Add Vitest for frontend tests
- Use TypeScript strictly (currently partial)
- Add black/isort for Python formatting