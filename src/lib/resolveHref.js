export function resolveHref(value, fallback = "#") {
  if (typeof value === "string") {
    return value;
  }

  if (value && typeof value === "object") {
    if (typeof value.href === "string") {
      return value.href;
    }

    if (typeof value.pathname === "string") {
      const query = value.query;
      if (query && typeof query === "object") {
        const search = new URLSearchParams();

        Object.entries(query).forEach(([key, queryValue]) => {
          if (Array.isArray(queryValue)) {
            queryValue.forEach((entry) => {
              search.append(key, String(entry));
            });
            return;
          }

          if (queryValue !== undefined && queryValue !== null) {
            search.append(key, String(queryValue));
          }
        });

        const searchString = search.toString();
        return searchString
          ? `${value.pathname}?${searchString}`
          : value.pathname;
      }

      return value.pathname;
    }
  }

  if (typeof window !== "undefined" && typeof console !== "undefined") {
    console.warn("resolveHref received a non-string href:", value);
  }

  return fallback;
}
