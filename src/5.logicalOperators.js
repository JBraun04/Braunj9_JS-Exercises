// use the logical operator not if statements

// or: should return true if either a or b are truthy. False, if both are false
function or(a, b) {
  return Boolean(a || b);
}

//and: should return true only if both a and b are truthy
function and(a, b) {
  return Boolean(a && b);
}

module.exports = {
  or,
  and
};