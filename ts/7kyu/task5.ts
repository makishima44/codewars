export function growingPlant(up: number, down: number, h: number): number {
  let count: number = 0;
  let height: number = 0;

  while (true) {
    count++;
    height += up;

    if (height >= h) {
      return count;
    }

    height -= down;
  }
}


