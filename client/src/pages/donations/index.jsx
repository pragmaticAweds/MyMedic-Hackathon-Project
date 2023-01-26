import React from "react";
// import Table from "../../components/organisms/table";
import DonationTable from "../../components/organisms/donation-table";
import ScreenLayout from "../../templates/screen-layout";

const DonationsPage = () => {
  return (
    <ScreenLayout title="Donations" inputName="filterAppointment">
      <DonationTable />
    </ScreenLayout>
  );
};

export default DonationsPage;
