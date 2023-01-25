import React from "react";
import ScreenLayout from "../../templates/screen-layout";

const PatientsPage = () => {
  return (
    <ScreenLayout
      title="Patient"
      btnLabel="Add Patient"
      inputName="filterPatient"
    ></ScreenLayout>
  );
};

export default PatientsPage;
