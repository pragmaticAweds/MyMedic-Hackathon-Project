import {useState} from "react";
import PatientTable from "../../components/organisms/PatientTable";
import Input from "../../components/atoms/Input";
import Modal from "../../components/molecules/Modal";
import Button from "../../components/atoms/button";
import ScreenLayout from "../../templates/screen-layout";
import TextArea from "../../components/atoms/text-area";
import "./PatientsPageStyle.scss"


const PatientsPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const [signupStage, setSignupStage] = useState(0);
  const stages = ["Add New Patient Information", "Health State", "Medic Info"];

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  }
  const handleInputField = () => {};
  return (
    <ScreenLayout
      title="Patient"
      btnLabel="Add Patient"
      inputName="filterPatient"
      onClick={() => handleAddModalType("add")}
    >
      <PatientTable onClick={() => handleAddModalType("view")} />

      <Modal
        handleCloseModal={setShowModal}
        closeModal={showModal}
        modalTitle={
          modalType === "add"
            ? "Add New Patient Information"
            : "View Patient Information"
        }
      >
        {modalType === "add" ? (
          <form
            onClick={(e) => e.preventDefault()}
            className="patient-form"
          >
            <div className="form-stage-container">
              {/*  name and email*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage mt-6">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleInputField}
                    // value={patientPayload.name}
                  />
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    // value={patientPayload.email}
                  />
                </div>
                {/* date and visit time*/}

                <div className="form-stage">
                  <Input
                    label="Date"
                    placeholder="Enter the date"
                    name="date"
                    onChange={handleInputField}
                    // value={patientPayload.date}
                  />
                  <Input
                    label="Visit Time"
                    placeholder="Enter the time"
                    name="visit time"
                    onChange={handleInputField}
                    // value={patientPayload.visittime}
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input
                    label="Doctor Name"
                    placeholder="Enter the doctor's name"
                    name="doctor"
                    onChange={handleInputField}
                    // value={patientPayload.doctor name}
                  />
                  <Input
                    label="Purpose"
                    placeholder="Enter your purpose"
                    name="purpose"
                    onChange={handleInputField}
                    // value={patientPayload.purpose}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Complain"
                  placeholder="Enter your complain"
                  name="complain"
                  onChange={handleInputField}
                  // value={patientPayload.complain}
                />
              </div>

              <div className="flex  justify-end ">
                <Button
                  label="Next"
                  // isDisabled={
                  //   !patientPayload.firstName |
                  //   !patientPayload.lastName |
                  //   !patientPayload.email |
                  //   !patientPayload.phoneNo |
                  //   !patientPayload.password |
                  //   !patientPayload.confirmPassword |
                  //   !patientPayload.address
                  // }
                  // onClick={handleNextStage}
                />
              </div>
            </div>
          </form>
        ) : modalType === "view" ? (
          <div>View field</div>
        ) : null}
      </Modal>
    </ScreenLayout>
  );
};

export default PatientsPage;
