function capitalize(string, indices) {
  const arr = string.split("");

  for (let i = 0; i < indices.length; i++) {
    const idx = indices[i];
    if (idx >= 0 && idx < arr.length) {
      arr[idx] = arr[idx].toUpperCase();
    }
  }

  return arr.join("");
}
