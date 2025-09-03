function save(sizes, hd) {
 let files = 0;
  let memories = 0;

  for (let i = 0; i < sizes.length; i++) {
    if (memories + sizes[i] <= hd) {
      memories += sizes[i];
      files++;
    } else {
      break;
    }
  }
  return files;
}