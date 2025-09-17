function uniqueSum(lst) {
  return lst.length === 0 ? null : [...new Set([...lst])].reduce((sum, el) => sum + el, 0);
}


