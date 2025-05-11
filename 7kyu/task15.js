function createDict(keys, values) {
  let dictionary = {};

  for (let i = 0; i < keys.length; i++) {
    dictionary[keys[i]] = i < values.length ? values[i] : null;
  }

  return dictionary;
}


