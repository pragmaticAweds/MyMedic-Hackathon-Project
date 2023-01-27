import React, {useState} from "react";
import ScreenLayout from "../../templates/screen-layout";
import DoctorsTable from "../../components/organisms/DoctorsTable";
import Modal from "../../components/molecules/Modal";


const DoctorsPage = () => {
  const [showModal, setShowModal] = useState(true);

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <ScreenLayout title="Doctors" onClick={handleModal}>
      <DoctorsTable />
      <Modal handleCloseModal={setShowModal} closeModal={showModal} />
    </ScreenLayout>
  );
};

export default DoctorsPage;
