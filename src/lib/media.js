export function resolveMediaSrc(value, fallback = "") {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    if (typeof value.src === "string") {
      return value.src;
    }

    if (typeof value.default === "string") {
      return value.default;
    }
  }

  return fallback;
}
