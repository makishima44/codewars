export function save(sizes: number[], hd: number) {
  let files: number = 0;
  let memories: number = 0;

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


