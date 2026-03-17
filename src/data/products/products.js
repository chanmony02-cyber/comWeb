import productCircuitBreaker from "@/assets/images/products/product-circuit-breaker.jpg";
import productCapacitor from "@/assets/images/products/product-capacitor.jpg";
import productCurrentTransformer from "@/assets/images/products/product-current-transformer.jpg";
import productFuse from "@/assets/images/products/product-fuse.jpg";
import productGrounding from "@/assets/images/products/product-grounding.jpg";
import productPanelBoard from "@/assets/images/products/product-panel-board.jpg";
import productSurgeArrester from "@/assets/images/products/product-surge-arrester.jpg";
import productTransformer from "@/assets/images/products/product-transformer.jpg";

export const products = [
  {
    id: 1,
    name: "Circuit Breaker",
    category: "LV",
    image: productCircuitBreaker,
    description:
      "Protects low-voltage circuits from overloads and short circuits.",
    specs: {
      rating: "Up to 63A",
      standard: "IEC 60898-1",
    },
  },
  {
    id: 2,
    name: "Fuse Link",
    category: "LV",
    image: productFuse,
    description: "Fast-acting fuse links for reliable LV protection.",
    specs: {
      rating: "10A-125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 3,
    name: "Current Transformer",
    category: "MV",
    image: productCurrentTransformer,
    description: "Accurate measurement and protection for MV systems.",
    specs: {
      ratio: "100/5 A",
      accuracy: "Class 0.5",
    },
  },
  {
    id: 4,
    name: "Panel Board",
    category: "LV",
    image: productPanelBoard,
    description: "Modular LV distribution panels for safe load management.",
    specs: {
      busbar: "Up to 400A",
      enclosure: "IP42",
    },
  },
  {
    id: 5,
    name: "Distribution Transformer",
    category: "MV",
    image: productTransformer,
    description: "Efficient MV/LV power distribution for utility networks.",
    specs: {
      capacity: "100-1000 kVA",
      cooling: "ONAN",
    },
  },
  {
    id: 6,
    name: "Surge Arrester",
    category: "MV",
    image: productSurgeArrester,
    description: "Protects MV equipment from lightning and switching surges.",
    specs: {
      systemVoltage: "11-33 kV",
      housing: "Polymer",
    },
  },
  {
    id: 7,
    name: "Capacitor Bank",
    category: "MV",
    image: productCapacitor,
    description: "Power factor correction for MV networks.",
    specs: {
      kvar: "100-1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 8,
    name: "Grounding System",
    category: "LV",
    image: productGrounding,
    description: "Reliable earthing solution for LV installations.",
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 9,
    name: "Grounding System",
    category: "LV",
    image: productGrounding,
    description: "Reliable earthing solution for LV installations.",
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 10,
    name: "Grounding System",
    category: "LV",
    image: productGrounding,
    description: "Reliable earthing solution for LV installations.",
    specs: {
      material: "Copper-bonded",
      resistance: "Under 5 ohms",
    },
  },
  {
    id: 11,
    name: "Capacitor Bank",
    category: "MV",
    image: productCapacitor,
    description: "Power factor correction for MV networks.",
    specs: {
      kvar: "100-1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 12,
    name: "Capacitor Bank",
    category: "MV",
    image: productCapacitor,
    description: "Power factor correction for MV networks.",
    specs: {
      kvar: "100-1000 kvar",
      control: "Automatic",
    },
  },
  {
    id: 13,
    name: "Fuse Link",
    category: "LV",
    image: productFuse,
    description: "Fast-acting fuse links for reliable LV protection.",
    specs: {
      rating: "10A-125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 14,
    name: "Fuse Link",
    category: "LV",
    image: productFuse,
    description: "Fast-acting fuse links for reliable LV protection.",
    specs: {
      rating: "10A-125A",
      standard: "IEC 60269",
    },
  },
  {
    id: 15,
    name: "Fuse Link",
    category: "LV",
    image: productFuse,
    description: "Fast-acting fuse links for reliable LV protection.",
    specs: {
      rating: "10A-125A",
      standard: "IEC 60269",
    },
  },
];
