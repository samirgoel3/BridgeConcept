import { ACTION_CURRENT_LOCATION } from "../actions/ActionConstants";

export const currentLocation = data => {
  return {
    type: ACTION_CURRENT_LOCATION,
    payload: data
  };
};
