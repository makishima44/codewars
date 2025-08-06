function rgbToGrayscale(color) {
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  const y = Math.round(0.299 * r + 0.587 * g + 0.114 * b);

  const yHex = y.toString(16).padStart(2, "0").toUpperCase();
  return `#${yHex}${yHex}${yHex}`;
}
