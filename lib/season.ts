export type Season = "spring" | "summer" | "autumn" | "winter";

/** Meteorological seasons for the Northern Hemisphere (Spokane). */
export function seasonFor(date: Date = new Date()): Season {
  const month = date.getMonth(); // 0 = January
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "autumn";
  return "winter";
}

/**
 * Seasonal stills. Drop Mitch's Spokane photographs into /public/images/seasons
 * using these file names and flip `ready` to true for each one.
 * Until a season is ready it uses an existing Riverside State Park still.
 */
export const seasonal: Record<
  Season,
  { src: string; ready: boolean; alt: string; position?: string }
> = {
  spring: {
    src: "/images/seasons/spring.jpg",
    ready: false,
    alt: "Spokane in spring",
    position: "50% 70%",
  },
  summer: {
    src: "/images/seasons/summer.jpg",
    ready: false,
    alt: "Spokane in summer",
    position: "50% 70%",
  },
  autumn: {
    src: "/images/seasons/autumn.jpg",
    ready: false,
    alt: "Spokane in autumn",
    position: "50% 70%",
  },
  winter: {
    src: "/images/seasons/winter.jpg",
    ready: false,
    alt: "Spokane in winter",
    position: "50% 70%",
  },
};

const fallback = {
  src: "/images/spokane-river.jpg",
  alt: "The Spokane River winding through ponderosa pines at Riverside State Park",
  position: "50% 60%",
};

export function seasonPhoto(season: Season) {
  const entry = seasonal[season];
  return entry.ready
    ? { src: entry.src, alt: entry.alt, position: entry.position ?? "50% 70%" }
    : fallback;
}
