import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import employeesLoading from "./redux/employeesLoading";
import EmployeeCard from "./components/EmployeeCard";

import "./styles/App.css";

import { setAlphabetList1 } from "./redux/actions";

const App = () => {
  const { employees, isLoading, error, alphabetList } = useSelector(
    (state) => ({
      employees: state.employees,
      isLoading: state.isLoading,
      error: state.error,
      alphabetList: state.alphabetList,
    })
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(employeesLoading());
  }, []);

  const mapAlphabet = () => {
    for (let letter = 65; letter < 91; letter++) {
      let char = String.fromCharCode(letter);

      alphabetList[char] = employees.map((emp) =>
        emp.lastName.charAt(0).toUpperCase() === char
          ? Object.assign(emp)
          : null
      );
    }
  };

  const setAlphabetList = (char) => {
    // return employees.map((emp) =>
    //   emp.lastName.charAt(0).toUpperCase() === char ? Object.assign(emp) :
    // );

    return employees.map((emp) => {
      emp.lastName.charAt(0).toUpperCase() === char ? Object.assign(emp) : null;
    });
  };

  if (employees.length !== 0) {
    mapAlphabet();
  }

  return (
    <>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}

      <div className={"employee-wrapper"}>
        <h1>Employees</h1>
        <div className={"employee-list"}>
          {employees && !employees.length && (
            <div>There are no employees at the moment</div>
          )}

          {/*{Object.entries(alphabetList).map((letter) => {*/}
          {/*  return (*/}
          {/*    <div className={"employee-card"}>*/}
          {/*      <h2 key={letter[0]}>{letter[0]}</h2>*/}

          {/*      <div>*/}
          {/*        {employees.map((emp) => {*/}
          {/*          if (emp.lastName.charAt(0).toUpperCase() === letter[0]) {*/}
          {/*            return (*/}
          {/*              <div*/}
          {/*                className={"employee-character"}*/}
          {/*                id={emp.id}*/}
          {/*                key={emp.id}*/}
          {/*              >*/}
          {/*                <EmployeeCard lastName={emp.lastName} />*/}
          {/*              </div>*/}
          {/*            );*/}
          {/*          }*/}
          {/*        })}*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  );*/}
          {/*})}*/}
        </div>
      </div>
    </>
  );
};

export default App;
