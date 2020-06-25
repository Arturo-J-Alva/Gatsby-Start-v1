import { types } from "../actions/types";
const initialState = {
  isDarkMode: true,
};

export default (state = initialState, action) => {
  console.log('payLoad:',action.payload)
  switch (action.type) {
    case types.SAMPLE_TYPE:
      return { ...state, isDarkMode: action.payload};
    default:
      return state;
  }
};