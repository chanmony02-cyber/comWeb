# Smart Infrastructure Website — Copilot Instructions

## Project Overview
React 19 + JSX + Tailwind CSS company website. No TypeScript — plain JavaScript only. All component files use `.jsx` extension.

## Design Tokens — Never Hardcode Colors
```
Navy (primary bg) : #001439  → use Tailwind token `bg-navy` / `text-navy`
Blue (primary)    : #2A8CD5  → use Tailwind token `bg-primary-blue` / `text-primary-blue`
Sky Blue (accent) : #9FCCFF  → use Tailwind token `bg-sky-accent` / `text-sky-accent`
Heading font      : Segoe UI
Body font         : Inter
```
Tokens are defined in `src/styles/index.css` and `tailwind.config.js`. Always use the token class, never raw hex.

---

## Absolute Rules

### 1. Folder Placement Decision Tree
```
Used on 2+ unrelated pages?
  YES → src/components/ui/
  NO  →
    Is it a layout shell (Navbar, Footer, TopBar)?
      YES → src/components/common/
      NO  →
        Shared across 2+ pages in the SAME section?
          YES → src/pages/[SectionGroup]/components/
          NO  → src/pages/[PageName]/components/
```

### 2. Shared Components — Never Recreate These
The following already exist. Import them, never rewrite them:

| Component | Path | When to use |
|---|---|---|
| `SectionHeader` | `@/components/ui/SectionHeader` | Every centered label + title + subtitle block |
| `GetInTouchForm` | `@/components/ui/GetInTouchForm` | Every contact form (First Name, Last Name, Phone, Email, Message) |
| `FAQAccordion` | `@/components/ui/FAQAccordion` | Any expandable FAQ list |
| `ProductCard` | `@/components/ui/ProductCard` | Any product card with image + name + category |
| `ServiceCard` | `@/components/ui/ServiceCard` | Any card with icon + title + description |
| `BackButton` | `@/components/ui/BackButton` | `← Back` link on all detail pages |
| `StatsBar` | `@/components/ui/StatsBar` | Row of highlight numbers/stats |
| `Navbar` | `@/components/common/Navbar/Navbar` | Injected by MainLayout — never add to pages directly |
| `Footer` | `@/components/common/Footer/Footer` | Injected by MainLayout — never add to pages directly |

### 3. Every Page Must Use MainLayout
```jsx
// ✅ Always
import MainLayout from '@/layouts/MainLayout';
export default function MyPage() {
  return <MainLayout>...</MainLayout>;
}

// ❌ Never add Navbar or Footer manually inside a page
```

### 4. Data Lives in src/data/ — Never Inside Components
```jsx
// ✅ Correct
import { products } from '@/data/products';

// ❌ Wrong — never define arrays inside .jsx files
const products = [{ name: 'Smart Meter', ... }];
```

### 5. Site Config — Never Hardcode Contact Info
```jsx
// ✅ Correct
import { siteConfig } from '@/config/siteConfig';
<a href={`tel:${siteConfig.phone}`}>{siteConfig.phone}</a>

// ❌ Wrong
<a href="tel:+1234567890">+(855) XXX XXX XXX</a>
```

### 6. Routes — Never Hardcode URL Strings
```jsx
// ✅ Correct
import { ROUTES } from '@/config/routes';
<Link to={ROUTES.PRODUCTS} />

// ❌ Wrong
<Link to="/products" />
```

### 7. Exports
- Shared/UI components → **named export**: `export function SectionHeader() {}`
- Page components → **default export**: `export default function HomePage() {}`
- Every page folder needs `index.js`: `export { default } from './PageName';`

### 8. Import Alias
Always use `@/` for cross-folder imports, never deep relative paths (`../../../`).

### 9. Tailwind Only — No Inline Styles
Use Tailwind utility classes. No `style={{}}` unless the value is truly dynamic and impossible in Tailwind.

### 10. No TypeScript
No `interface`, `type`, `: string`, or generics. Plain JavaScript only.
