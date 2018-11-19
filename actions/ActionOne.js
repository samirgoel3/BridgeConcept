import { ACTION_ONE } from "../actions/ActionConstants";

export const one = data => {
  return {
    type: ACTION_ONE,
    payload: data
  };
};
