/** Licensed stills of Riverside State Park / the Spokane River. Motion is CSS drift, not video. */
export const photos = {
  mist: {
    src: "/images/spokane-river.jpg",
    alt: "The Spokane River winding through ponderosa pines at Riverside State Park",
    objectPosition: "50% 92%",
  },
  pines: {
    src: "/images/spokane-bridge.jpg",
    alt: "The swinging bridge over the Spokane River at Riverside State Park",
    objectPosition: "50% 48%",
  },
  forest: {
    src: "/images/spokane-bowl.jpg",
    alt: "Bowl and Pitcher basalt formations on the Spokane River",
    objectPosition: "50% 42%",
  },
} as const;

export const photoPosition: Record<string, string> = {
  [photos.mist.src]: photos.mist.objectPosition,
  [photos.pines.src]: photos.pines.objectPosition,
  [photos.forest.src]: photos.forest.objectPosition,
};
