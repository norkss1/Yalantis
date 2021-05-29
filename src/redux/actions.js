export const LOAD = "LOAD";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_ERROR = "LOAD_ERROR";
export const SET_ALPHABET_LIST = "SET_ALPHABET_LIST";

export const load = (load) => ({
  type: LOAD,
  payload: load,
});

export const loadSuccess = (payload) => ({
  type: LOAD_SUCCESS,
  payload: payload,
});

export const loadError = (error) => ({
  type: LOAD_ERROR,
  payload: error,
});

export const setAlphabetList1 = (key) => ({
  type: SET_ALPHABET_LIST,
  payload: key,
});
