import { ACTION_CURRENT_LOCATION } from "../actions/ActionConstants";

const initialState = {
  location: { latitude: 28.45639, longitude: 77.036343 }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CURRENT_LOCATION:
      return {
        ...state,
        location: action.payload.location
      };
    default:
      return state;
  }
};
