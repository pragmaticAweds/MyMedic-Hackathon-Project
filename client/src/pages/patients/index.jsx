import React from "react";
import PatientTable from "../../components/organisms/PatientTable";
import ScreenLayout from "../../templates/screen-layout";


const PatientsPage = () => {
  return (
    <ScreenLayout
      title="Patient"
      btnLabel="Add Patient"
      inputName="filterPatient"
    >
      <PatientTable/>
    </ScreenLayout>
  );
};

export default PatientsPage;
