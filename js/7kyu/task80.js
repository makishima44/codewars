function freedPrisoners(prison) {
  if (prison[0] === false) return 0;

  let count = 0;
  let current = prison.slice();
  let lastIndex = -1;

  while (true) {
    let nextIndex = null;
    for (let i = lastIndex + 1; i < current.length; i++) {
      if (current[i] === true) {
        nextIndex = i;
        break;
      }
    }

    if (nextIndex === null) break;

    count++;
    lastIndex = nextIndex;
    current = current.map((c) => !c);
  }

  return count;
}


