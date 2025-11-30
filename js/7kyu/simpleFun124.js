// Task: Simple Fun #124: Lamps
// Link: https://www.codewars.com/kata/58a3c1f12f949e21b300005c/train/javascript

function lamps(a) {
  let switchIfStartWith0 = 0;
  let switchIfStartWith1 = 0;

  for (let i = 0; i < a.length; i++) {
    const expectedIf0 = i % 2 === 0 ? 0 : 1;
    const expectedIf1 = i % 2 === 0 ? 1 : 0;

    if (a[i] !== expectedIf0) switchIfStartWith0++;
    if (a[i] !== expectedIf1) switchIfStartWith1++;
  }

  return Math.min(switchIfStartWith0, switchIfStartWith1);
}


