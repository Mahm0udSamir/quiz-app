const asyncHandler = require("express-async-handler");
const TEST_DATA = require("../data/TestData.json");

const calculateRank = asyncHandler(async (req, res) => {
  const { score } = req.body;
  const { scoresList } = TEST_DATA;

  if (!score || typeof score !== "number") {
    res.status(400);
    throw new Error("Invalid Score");
  }

  const numberOfLowerScores = scoresList.filter((i) => i < score).length;
  const rank = addDecimals((numberOfLowerScores / scoresList.length) * 100);

  res.json({ rank: rank });
});

// Rounded to the nearest hundredth.
const addDecimals = (num) => Number((Math.round(num * 100) / 100).toFixed(2));

module.exports = calculateRank;
