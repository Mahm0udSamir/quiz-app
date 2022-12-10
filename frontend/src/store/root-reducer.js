import { questinosReducer } from "./questions/questions-reducer";
import { rankReducer } from "./rank/rank.reducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  questions: questinosReducer,
  rank: rankReducer,
});

export default rootReducer;
