function spoonerize(words) {
  const arr = words.split(" ");
  return `${arr[1].slice(0, 1) + arr[0].slice(1)} ${arr[0].slice(0, 1) + arr[1].slice(1)}`;
}
