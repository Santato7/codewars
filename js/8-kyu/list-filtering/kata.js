function filter_list(l) {
  return l.filter((x) => Number.isInteger(x));
}

module.exports = filter_list;
