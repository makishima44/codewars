export function nextId(ids: number[]): number {
  const idSet = new Set(ids);

  let i = 0;
  while (idSet.has(i)) {
    i++;
  }

  return i;
}
