function points(games) {
  let x,
    y,
    z = 0;
  for (let i = 0; i < games.length; i++) {
    x = games[i][0];
    y = games[i][2];
    if (x < y) continue;
    x > y ? (z += 3) : z++;
  }
  return z;
}

module.exports = points;
