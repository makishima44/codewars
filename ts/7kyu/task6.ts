export function flyBy(lamps: string, drone: string): string {
  return lamps
    .split("")
    .map((el, id) => (id < drone.length ? "o" : "x"))
    .join("");
}
