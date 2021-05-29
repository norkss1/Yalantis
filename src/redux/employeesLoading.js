import { load, loadSuccess, loadError } from "./actions";

const EMPLOYEES_LINK =
  "https://yalantis-react-school-api.yalantis.com/api/task0/users";

const employeesLoading = () => {
  return (dispatch) => {
    dispatch(load(true));
    fetch(EMPLOYEES_LINK)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to load");
      })
      .then((employees) => {
        dispatch(load(false));
        dispatch(loadSuccess(employees));
      })
      .catch((e) => {
        dispatch(loadError(e.message));
      });
  };
};
export default employeesLoading;
