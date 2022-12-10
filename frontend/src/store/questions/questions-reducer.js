import { QUESTIONS_ACTION_TYPES } from "./questions.types";

// helper fuction update questions list
const updateOneQuestionHandler = (questions, question) => {
  return questions.map((a) => {
    if (a.id === question.id) {
      return { ...question };
    } else {
      return a;
    }
  });
};

const initState = {
  questions: null,
  loading: false,
  error: null,
};

export const questinosReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_REQUEST:
      return { ...state, loading: true };

    case QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_FAIL:
      return { ...state, loading: false, error: payload };

    case QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_SUCCESS:
      return { ...state, loading: false, questions: payload };

    case QUESTIONS_ACTION_TYPES.QUESTIONS_LIST_UPDATE_ONE:
      return {
        ...state,
        loading: false,
        questions: updateOneQuestionHandler(state.questions, payload),
      };

    default:
      return state;
  }
};
