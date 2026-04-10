import { memo } from "react";
import { HeroBubbleSlide } from "./HeroBubbleSlide";

/**
 * HeroCoreValuesSlide - Type 3: Core Values hero with bubble network visualization
 * Completely isolated component wrapping the bubble network visualization
 * Uses the same rendering as HeroBubbleSlide but semantically distinct for Core Values
 *
 * Props:
 *   - slide: { eyebrow, title, description, bubbles, buttons, image, overlay }
 *   - isActive: boolean (fade in/out based on this)
 */
export const HeroCoreValuesSlide = memo(function HeroCoreValuesSlide({
  slide,
  isActive,
}) {
  return <HeroBubbleSlide slide={slide} isActive={isActive} />;
});

HeroCoreValuesSlide.displayName = "HeroCoreValuesSlide";
