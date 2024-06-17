export const LOADING_START = "LOADING_START";
export const LOADING_DONE = "LOADING_DONE";
export const CREATING_START = "CREATING_START";
export const CREATING_DONE = "CREATING_DONE";

const initialState = {
  isLoading: false,
  isCreating: false,
};

export function systemReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true };
    case LOADING_DONE:
      return { ...state, isLoading: false };
    case CREATING_START:
      return { ...state, isCreating: true };
    case CREATING_DONE:
      return { ...state, isCreating: false };
    default:
      return state;
  }
}
