// Task: Zebulan's Nightmare
// Link: https://www.codewars.com/kata/570fd7ad34e6130455001835/train/javascript

function zebulansNightmare(functionName) {
  const arr = functionName.split("_");
  return (
    arr[0] +
    arr
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("")
  );
}
