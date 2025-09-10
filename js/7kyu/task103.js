function noonerize(numbers) {
  if (typeof numbers[0] !== "number" || typeof numbers[1] !== "number") return "invalid array";

  const first = Number(`${String(numbers[1]).slice(0, 1) + String(numbers[0]).slice(1)}`);
  const second = Number(`${String(numbers[0]).slice(0, 1) + String(numbers[1]).slice(1)}`);

  return first > second ? first - second : second - first;
}
