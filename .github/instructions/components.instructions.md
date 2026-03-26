---
applyTo: "src/components/**/*.jsx,src/pages/**/*.jsx,src/layouts/**/*.jsx"
---

# Component Authoring Rules

## File Structure Template
```jsx
// 1. React imports
import { useState } from 'react';

// 2. Third-party
import { Link } from 'react-router-dom';

// 3. Internal components — always use @/ alias
import SectionHeader from '@/components/ui/SectionHeader';

// 4. Data imports
import { products } from '@/data/products';

// 5. Named export for reusable/UI components
export function MyComponent({ title, description }) {
  return <div className="...">{title}</div>;
}
```

## Page File Template
```jsx
import MainLayout from '@/layouts/MainLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import GetInTouchForm from '@/components/ui/GetInTouchForm';
import { HeroSection } from './components/HeroSection';

export default function PageName() {
  return (
    <MainLayout>
      <HeroSection />
      <GetInTouchForm />
    </MainLayout>
  );
}
```

## Props
- Destructure at the function signature: `function Card({ title, image, href })`
- Always provide defaults for optional props: `function Card({ align = 'center' })`

## Do Not
- No `class` attribute — use `className`
- No TypeScript syntax
- No per-component CSS imports
- No `React.FC` — write plain functions
- No `export default` for shared UI components
