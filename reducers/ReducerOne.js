import { ACTION_ONE } from "../actions/ActionConstants";

const initialState = {
  key_one: "some initial data",
  key_two: 423,
  key_three: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_ONE:
      return {
        ...state,
        key_one: action.payload.key_one,
        key_two: action.payload.key_two,
        key_three: action.payload.key_three
      };
    default:
      return state;
  }
};
