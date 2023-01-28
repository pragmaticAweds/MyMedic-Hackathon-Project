import React, { useState } from "react";
import ScreenLayout from "../../templates/screen-layout";
import DoctorsTable from "../../components/organisms/DoctorsTable";
import Modal from "../../components/molecules/Modal";

const DoctorsPage = () => {
  const [showModal, setShowModal] = useState(true);

  const [modalType, setModalType] = useState("view");

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  };
  return (
    <ScreenLayout title="Doctors" onClick={handleModal}>
      <DoctorsTable onClick={() => handleAddModalType("view")} />
      <Modal handleCloseModal={setShowModal} closeModal={showModal}></Modal>
    </ScreenLayout>
  );
};

export default DoctorsPage;
