import { useState } from "react";
import Modal from "../../components/molecules/Modal";
import Table from "../../components/organisms/Table";
import ScreenLayout from "../../templates/screen-layout";

const AppointmentsPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <ScreenLayout
      title="Appointment"
      btnLabel="Add Appointment"
      inputName="filterAppointment"
      onClick={handleModal}
    >
      <Table />
      <Modal handleCloseModal={handleModal} closeModal={showModal} />
    </ScreenLayout>
  );
};

export default AppointmentsPage;
