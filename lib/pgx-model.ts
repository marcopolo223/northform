/** Teaching sketch: same milligrams, different genetic handling. Not a patient result. */

export const fates = ["hold", "typical", "clear"] as const;
export type Fate = (typeof fates)[number];

/** How much of the same dose may still be available to work. Schematic only. */
export const remainingByFate: Record<Fate, number> = {
  hold: 0.88,
  typical: 0.5,
  clear: 0.18,
};
