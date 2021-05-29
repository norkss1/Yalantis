import { LOAD, LOAD_SUCCESS, LOAD_ERROR, SET_ALPHABET_LIST } from "./actions";

const INITIAL_STATE = {
  employees: [],
  isLoading: false,
  error: null,
  alphabetList: {},
};

console.log(INITIAL_STATE.alphabetList);

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        isLoading: action.payload,
      };

    case LOAD_SUCCESS:
      return {
        ...state,
        employees: action.payload,
      };

    case LOAD_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    // case SET_ALPHABET_LIST:
    //   return {
    //     ...state,
    //     alphabetList: state.Object.keys(state.alphabetList).map((letter) => {
    //       state.employees.map((emp) => {
    //         if (emp.lastName.charAt(0).toUpperCase() === letter[0]) {
    //         }
    //       });
    //     }),
    //   };

    default:
      return state;
  }
};
