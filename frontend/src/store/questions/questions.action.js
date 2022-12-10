import axios from "axios";
import { createAction } from "../../utils/reducer/reducer.utils";
import { QUESTIONS_ACTION_TYPES } from "./questions.types";

export const getListQuestion = () => async (dispatch) => {
  try {
    dispatch(createAction(QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_REQUEST));
    const { data } = await axios.get(`/api/questions`);
    dispatch(createAction(QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_SUCCESS, data));
  } catch (error) {
    const err = error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch(createAction(QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_FAIL, err));
  }
};

export const updateOneQuestionWithAnswer = (question) => (dispatch) => {
  dispatch(
    createAction(QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_UPDATE_ONE, question)
  );
};
