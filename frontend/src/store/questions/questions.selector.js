import { createSelector } from "reselect";

export const selectQuestionsReducer = (state) => state.questions;

export const selectQuestions = createSelector(
  [selectQuestionsReducer],
  (selectQuestionsReducerSlice) => selectQuestionsReducerSlice.questions
);

export const selectProgress = createSelector(
  [selectQuestions],
  (questionsSlice) => {
    const questionsIsChecked =
      questionsSlice && questionsSlice.filter((q) => q.checked);

    return (
      questionsSlice &&
      (questionsIsChecked?.length / questionsSlice.length) * 100
    );
  }
);

export const selectScore = createSelector(
  [selectQuestions],
  (questionsSlice) => {
    const corectedAnswers =
      questionsSlice &&
      questionsSlice.filter((q) => q.pos === q.answerForCheck);

    return (
      questionsSlice && (corectedAnswers?.length / questionsSlice.length) * 100
    );
  }
);
