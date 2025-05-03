function mostFrequentItemCount(collection) {
  if (collection.length === 0) return 0;
  let countItems = {};

  for (const item of collection) {
    countItems[item] = (countItems[item] || 0) + 1;
  }

  return Math.max(...Object.values(countItems));
}
