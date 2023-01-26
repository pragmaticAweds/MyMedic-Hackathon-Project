import Table from "../../components/organisms/Table";
import ScreenLayout from "../../templates/screen-layout";

const AppointmentsPage = () => {
  return (
    <ScreenLayout
      title="Appointment"
      btnLabel="Add Appointment"
      inputName="filterAppointment"
    >
      <Table />
    </ScreenLayout>
  );
};

export default AppointmentsPage;
