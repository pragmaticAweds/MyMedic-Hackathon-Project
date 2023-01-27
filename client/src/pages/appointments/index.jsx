import { useState } from "react";
import Modal from "../../components/molecules/Modal";
import Table from "../../components/organisms/Table";
import Input from "../../components/atoms/Input";
import Button from "../../components/atoms/button";
import ScreenLayout from "../../templates/screen-layout";
import TextArea from "../../components/atoms/text-area";

import "./AppointmentsPageStyles.scss";
import Select from "../../components/atoms/select";

const AppointmentsPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const [purpose, setPurpose] = useState("");
  const purposes =["consultation", "checkout", "orders"]

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  };
  const handleInputField = () => {};
  return (
    <ScreenLayout
      title="Appointment"
      btnLabel="Add Appointment"
      inputName="filterAppointment"
      onClick={() => handleAddModalType("add")}
    >
      <Table onClick={() => handleAddModalType("view")} />
      <Modal
        handleCloseModal={setShowModal}
        closeModal={showModal}
        modalTitle={
          modalType === "add"
            ? "Add New Appointment Information"
            : "View Appointment Information"
        }
      >
        {modalType === "add" ? (
          <form
            onClick={(e) => e.preventDefault()}
            className="appointment-form"
          >
            <div className="form-stage-container">
              
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
                    label="Phone Number"
                    
                    placeholder="Enter your phone number"
                    name="phone number"
                    onChange={handleInputField}
                    // value={patientPayload.phone number}
                  />
                </div>
                

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    // value={patientPayload.email address}
                  />
                  <Input
                    label="Date"
                    type="date"
                    placeholder="Enter the date"
                    name="date"
                    onChange={handleInputField}
                    // value={patientPayload.date}
                  />
                </div>
                

                <div className="form-stage mb-6">
                  <Input
                    label="Doctor"
                    placeholder="Enter doctor,s name"
                    name="doctor"
                    onChange={handleInputField}
                    // value={patientPayload.doctor name}
                  />
                  <Select
                    label="Purpose"
                    placeholder="Enter select your purpose"
                    name="purpose"
                    onChange={handleInputField}
                    onClick={setPurpose}
                    options={purposes}
                    title={purpose}
                    // value={patientPayload.purpose}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Extra Information"
                  placeholder="Enter your information"
                  name="complain"
                  onChange={handleInputField}
                  // value={patientPayload.extra information}
                />
              </div>

              <div className="flex  justify-end ">
                <Button
                  label="Make Appointment"
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

export default AppointmentsPage;
