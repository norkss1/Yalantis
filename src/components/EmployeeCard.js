import React from "react";

const EmployeeCard = (props) => {
  const { lastName } = props;

  return (
    <>
      <div className={"employee-card"}>{lastName}</div>
    </>
  );
};

export default EmployeeCard;
