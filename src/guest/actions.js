import axios from 'axios';

export const FETCH_GUEST_START = 'FETCH_GUEST_START';
export const FETCH_GUEST_SUCCESS = 'FETCH_GUEST_SUCCESS';
export const FETCH_GUEST_FAIL = 'FETCH_GUEST_FAIL';

export const fetchGuestStart = () => ({
  type: FETCH_GUEST_START
});

export const fetchGuestSuccess = user => ({
  type: FETCH_GUEST_SUCCESS,
  payload: user
});

export const fetchGuestFail = error => ({
  type: FETCH_GUEST_FAIL,
  payload: error
});

const endpoint =
  'https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=4735ce9132924caf8a5b17789b40f79c&platform=pc';

export const fetchGuests = () => dispatch => {
  dispatch(fetchGuestStart());

  return axios
    .get(endpoint)
    .then(res => dispatch(fetchGuestSuccess(res)))
    .catch(res => dispatch(fetchGuestFail(res)));
};
