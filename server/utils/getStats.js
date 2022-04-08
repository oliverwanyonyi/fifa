export const getUserStats = (stats) => {
  const lost = stats.filter((stat) => stat === "lose").length;
  const won = stats.filter((stat) => stat === "win").length;
  const drawn = stats.filter((stat) => stat === "draw").length;
  const pointsArr = stats.map((stat) =>
    stat === "win" ? 3 : stat === "lose" ? 0 : 1
  );
  const totalPoints = pointsArr.reduce((acc, point) => point + acc, 0);

  return { lost, won, drawn, totalPoints };
};
