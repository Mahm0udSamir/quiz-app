const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middleware/error.middleware");
const getWordList = require("./controller/words");
const calculateRank = require("./controller/rank");
dotenv.config();

const app = express();

app.use(express.json());

app.get("/api/questions", getWordList);
app.post("/api/rank", calculateRank);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server Running in ${process.env.NODE_DEV} mode on port ${PORT}`)
);
