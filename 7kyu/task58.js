function inviteMoreWomen(L) {
  let men = [];
  let women = [];

  for (let i = 0; i < L.length; i++) {
    if (L[i] === 1) men.push(L[i]);
    if (L[i] === -1) women.push(L[i]);
  }

  return men.length - women.length > 0 ? true : false;
}
