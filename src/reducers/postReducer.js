import { FETCH_POST } from "../actions/types";

const initialState = {
  list: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST: {
      return {
        ...state,
        list: action.payload.results
      };
      break;
    }

    default:
      return state;
  }
}
