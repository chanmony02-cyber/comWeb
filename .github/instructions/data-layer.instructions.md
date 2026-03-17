---
applyTo: "src/data/**"
---

# Data Layer Rules

## File Registry
| File | Extension | Contents |
|---|---|---|
| `src/data/products.js` | `.js` | Products list |
| `src/data/services.jsx` | `.jsx` | Services — `.jsx` because entries contain inline SVG icons |
| `src/data/industries.js` | `.js` | Industries list |
| `src/data/projects.js` | `.js` | Recent projects |
| `src/data/partners.js` | `.js` | Partners |
| `src/data/navigation.js` | `.js` | Navbar links and dropdown structure |
| `src/data/faqs.js` | `.js` | FAQ entries (export one const per page/section) |

## Data File Format
```js
// src/data/products.js
export const products = [
  {
    id: 'smart-energy-meter',        // kebab-case, used in URL
    name: 'Smart Energy Meter',
    category: 'LV',                  // 'LV' | 'MV'
    image: '/assets/images/products/smart-energy-meter.jpg',
    description: 'Advanced smart energy meters...',
  },
];
```

```js
// src/data/faqs.js — export one named const per section
export const serviceFaqs = [
  { question: 'What services do you offer?', answer: '...' },
];
export const inspectionFaqs = [
  { question: 'How often should inspections be performed?', answer: '...' },
];
```

## Usage
```jsx
import { products } from '@/data/products';
import { serviceFaqs } from '@/data/faqs';
```
