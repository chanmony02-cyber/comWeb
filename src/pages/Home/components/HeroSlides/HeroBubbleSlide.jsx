import { memo } from "react";
import { BubbleConnectionSlide } from "../BubbleConnectionSlide";

/**
 * HeroBubbleSlide - Type 4: Bubble Network hero with animated connections
 * Wraps the bubble network visualization in isolated hero component
 * Completely isolated component with own rendering
 *
 * Props:
 *   - slide: { eyebrow, title, description, bubbles, buttons, image, overlay }
 *   - isActive: boolean (currently unused but available for future use)
 */
export const HeroBubbleSlide = memo(function HeroBubbleSlide({
  slide,
  isActive,
}) {
  return (
    <div className="absolute inset-0">
      <BubbleConnectionSlide slide={slide} />
    </div>
  );
});

HeroBubbleSlide.displayName = "HeroBubbleSlide";
