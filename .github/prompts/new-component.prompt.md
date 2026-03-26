---
description: Scaffold a new reusable UI component correctly
mode: ask
---

# Create a New Shared Component

Use this when building a component that will be used on 2+ unrelated pages.

## Placement Rule
- Used on 2+ unrelated pages → `src/components/ui/[ComponentName].jsx`
- App-wide shell (nav, footer) → `src/components/common/[ComponentName]/[ComponentName].jsx`

## Template
```jsx
// src/components/ui/[ComponentName].jsx

import { useState } from 'react';             // only if needed
import { Link } from 'react-router-dom';      // only if needed

/**
 * [ComponentName] — brief description of what it renders
 * @param {string} propA - description
 * @param {string} [propB='default'] - optional prop with default
 */
export function [ComponentName]({ propA, propB = 'default' }) {
  return (
    <div className="...">
      {/* JSX here — use Tailwind only, no inline styles */}
    </div>
  );
}
```

## Rules
- **Named export only** — never `export default` for shared components
- **No hardcoded data** — accept data via props or import from `src/data/`
- **No hardcoded colors** — use design token classes from `tailwind.config.js`
- **No Navbar/Footer** — those are layout components, not UI components
- After creating, **add it to `.github/copilot-instructions.md`** in the shared components table so Copilot knows it exists
