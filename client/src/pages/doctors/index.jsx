import React from "react";
import ScreenLayout from "../../templates/screen-layout";
import DoctorsTable from "../../components/organisms/DoctorsTable";


const DoctorsPage = () => {
  return <ScreenLayout title="Doctors"
  btnLabel="Add Doctors"
  inputName="filterDoctor">
    <DoctorsTable/>
  </ScreenLayout>;
};

export default DoctorsPage;
