function sumNoDuplicates(numList) {
  return numList
    .filter((item, _, array) => array.indexOf(item) === array.lastIndexOf(item))
    .reduce((sum, el) => sum + el, 0);
}


