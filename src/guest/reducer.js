import {
  FETCH_GUEST_START,
  FETCH_GUEST_SUCCESS,
  FETCH_GUEST_FAIL
} from './actions';

export default (
  state = { data: null, isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case FETCH_GUEST_START:
      return { ...state, isLoading: true };
    case FETCH_GUEST_SUCCESS:
      return { ...state, data: action.payload, isLoading: false, error: null };
    case FETCH_GUEST_FAIL:
      return { ...state, isLoading: false, data: null, error: action.payload };
    default:
      return state;
  }
};
