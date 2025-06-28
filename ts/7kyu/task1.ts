export function containAllRots(str: string, arr: string[]): boolean {
  if (str === "") return true;

  const rotation: string[] = [];

  for (let i = 0; i < str.length; i++) {
    rotation.push(str.slice(i) + str.slice(0, i));
  }
  return rotation.every((r) => arr.includes(r));
}
