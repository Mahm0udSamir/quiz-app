import { createSelector } from "reselect";

export const selectRankReducer = (state) => state.rank;

export const selectRank = createSelector(
  [selectRankReducer],
  (selectRankReducerSlice) => selectRankReducerSlice.rank
);
