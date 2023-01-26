import React from "react";
import ScreenLayout from "../../templates/screen-layout";
import DoctorsTable from "../../components/organisms/DoctorsTable";

const DoctorsPage = () => {
  return (
    <ScreenLayout title="Doctors">
      <DoctorsTable />
    </ScreenLayout>
  );
};

export default DoctorsPage;
