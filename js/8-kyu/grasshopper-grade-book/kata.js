function getGrade(s1, s2, s3) {
  const m = (s1 + s2 + s3) / 3;
  if (m < 60) return "F";
  if (m < 70) return "D";
  if (m < 80) return "C";
  if (m < 90) return "B";
  return "A";
}

module.exports = getGrade;
