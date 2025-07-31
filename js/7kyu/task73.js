function outed(meet, boss) {
  let scores = 0;
  const workers = Object.keys(meet).length;

  for (const person in meet) {
    if (person === boss) {
      scores += meet[person] * 2;
    } else {
      scores += meet[person];
    }
  }

  return scores / workers <= 5 ? "Get Out Now!" : "Nice Work Champ!";
}
