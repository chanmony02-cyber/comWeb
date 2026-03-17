---
description: Step-by-step guide to scaffold a new page correctly
mode: ask
---

# Create a New Page

Follow these steps in order before writing any code:

## Step 1 — Identify shared components to import
Check which of these already exist and should be imported (not recreated):
- `SectionHeader` from `@/components/ui/SectionHeader` — for any centered title block
- `GetInTouchForm` from `@/components/ui/GetInTouchForm` — always at the bottom
- `FAQAccordion` from `@/components/ui/FAQAccordion` — if page has FAQs
- `ProductCard` from `@/components/ui/ProductCard` — if page shows products
- `ServiceCard` from `@/components/ui/ServiceCard` — if page shows service cards
- `BackButton` from `@/components/ui/BackButton` — if this is a detail/sub page
- `StatsBar` from `@/components/ui/StatsBar` — if page has a stats row

## Step 2 — Create the folder structure
```
src/pages/[PageName]/
├── [PageName].jsx    ← main page
├── index.js          ← re-export
└── components/       ← page-specific sections only
    └── [SectionName].jsx
```

## Step 3 — Write index.js
```js
export { default } from './[PageName]';
```

## Step 4 — Write the page shell (always wrapped in MainLayout)
```jsx
import MainLayout from '@/layouts/MainLayout';
import GetInTouchForm from '@/components/ui/GetInTouchForm';
// ... other shared + page-specific imports

export default function [PageName]() {
  return (
    <MainLayout>
      {/* sections top to bottom */}
      <GetInTouchForm />
    </MainLayout>
  );
}
```

## Step 5 — Add the route
1. Add a constant to `src/config/routes.js`
2. Add a lazy import + `<Route>` to `src/router.jsx`

## Final Sanity Check
- [ ] No `<Navbar>` or `<Footer>` inside the page
- [ ] No contact form rebuilt from scratch
- [ ] No section header rebuilt inline
- [ ] No data arrays inside component files
- [ ] All `<Link to="">` use `ROUTES` constants
- [ ] `@/` alias used for all imports
- [ ] Shared components use named exports
- [ ] Page uses default export wrapped in `<MainLayout>`
