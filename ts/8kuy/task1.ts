export function toCsvText(array: number[][]): string {
  let result: string = "";

  for (let i = 0; i < array.length; i++) {
    result += array[i].join(",");

    if (i !== array.length - 1) {
      result += "\n";
    }
  }

  return result;
}
