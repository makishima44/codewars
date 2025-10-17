// Task: Simple string reversal II
// Link: https://www.codewars.com/kata/5a8d1c82373c2e099d0000ac/train/javascript

function solve(st, a, b) {
  return (
    st.slice(0, a) +
    st
      .slice(a, b + 1)
      .split("")
      .reverse()
      .join("") +
    st.slice(b + 1)
  );
}
