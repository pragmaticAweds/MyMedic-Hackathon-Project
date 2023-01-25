import React from "react";
import Table from "../../components/organisms/table";
import TableDonation from "../../components/organisms/table_donation";
import ScreenLayout from "../../templates/screen-layout";

const DonationsPage = () => {
  const tableHeading = [ "S/N","Name", "Email", "Donation", "Date", "Method", "" ]
  return <ScreenLayout title="Donations" inputName="filterAppointment"
 >
  <TableDonation tableDataHeading={tableHeading}/>
    {/* <Table tableDataHeading={tableHeading}/> */}
  </ScreenLayout>;
};

export default DonationsPage;
