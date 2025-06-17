function orderFood(list) {
  let food = {};

  for (const person of list) {
    const meal = person.meal;
    if (food[meal]) food[meal] += 1;
    else food[meal] = 1;
  }

  return food;
}
