import { RANK_ACTION_TYPES } from "./rank.types";

const initState = {
  rank: null,
  loading: false,
  error: null,
};

export const rankReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RANK_ACTION_TYPES.RANK_REQUEST:
      return { ...state, loading: true };

    case RANK_ACTION_TYPES.RANK_FAIL:
      return { ...state, loading: false, error: payload };

    case RANK_ACTION_TYPES.RANK_SUCCESS:
      return { ...state, loading: false, rank: payload };

    default:
      return state;
  }
};
