const asyncHandler = require("express-async-handler");
const TEST_DATA = require("../data/TestData.json");

// get 10 words at least 1 adjective, 1 adverb, 1 noun, and 1 verb.
const getWordList = asyncHandler(async (req, res) => {
  const { wordList } = TEST_DATA;

  let result = [];
  while (
    !result.find((i) => i.pos === "noun") ||
    !result.find((i) => i.pos === "verb") ||
    !result.find((i) => i.pos === "adverb") ||
    !result.find((i) => i.pos === "adjective")
  ) {
    result = shuffleArray(wordList).slice(0, 10); // get 10 elements
  }

  res.json(result);
});

// shuffle array
const shuffleArray = (array) => array.sort(() => 0.5 - Math.random());

module.exports = getWordList;
