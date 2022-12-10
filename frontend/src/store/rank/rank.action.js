import axios from "axios";
import { createAction } from "../../utils/reducer/reducer.utils";
import { RANK_ACTION_TYPES } from "./rank.types";

export const getRank = (score) => async (dispatch) => {
  try {
    dispatch(createAction(RANK_ACTION_TYPES.RANK_REQUEST));
    const { data } = await axios.post(
      `/api/rank`,
      { score },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    dispatch(createAction(RANK_ACTION_TYPES.RANK_SUCCESS, data.rank));
  } catch (error) {
    const err = error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch(createAction(RANK_ACTION_TYPES.RANK_FAIL, err));
  }
};
