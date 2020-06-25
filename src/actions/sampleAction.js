import { types } from "./types";

export const sampleFunction = (data) => (dispatch) => {
  console.log('actions data:',data)
      dispatch({
        type: types.SAMPLE_TYPE,
        payload: data,
      });
};