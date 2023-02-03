import React, { useState } from "react";
import Button from "../../components/atoms/button";
import Input from "../../components/atoms/Input";
import TextArea from "../../components/atoms/text-area";
import Modal from "../../components/molecules/Modal";
import PatientTable from "../../components/organisms/PatientTable";
import Select from "../../components/atoms/select";
import ScreenLayout from "../../templates/screen-layout";

const PatientsPage = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const handleModal = () => {
    setShowModal((prev) => !prev);
  };
  const handleInputField = () => {};

  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  };
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
              {/* first name and last name*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage mt-6">
                  <Input
                    label="First Name"
                    placeholder="Enter your first name"
                    name="firstName"
                    onChange={handleInputField}
                    // value={patientPayload.firstName}
                  />
                  <Input
                    label="Last Name"
                    placeholder="Enter your last name"
                    name="lastName"
                    onChange={handleInputField}
                    // value={patientPayload.lastName}
                  />
                </div>
                {/* email address and phone number*/}

                <div className="form-stage">
                  <Input
                    label="Email Address"
                    placeholder="Enter your email address"
                    name="email"
                    onChange={handleInputField}
                    // value={patientPayload.email}
                  />
                  <Input
                    label="Phone Number"
                    placeholder="Enter your phone number"
                    name="phoneNo"
                    onChange={handleInputField}
                    // value={patientPayload.phoneNo}
                  />
                </div>
                {/* password and confirm password*/}

                <div className="form-stage mb-6">
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleInputField}
                    // value={patientPayload.password}
                  />
                  <Input
                    label="Confirm Password"
                    placeholder="Retype your password"
                    name="confirmPassword"
                    onChange={handleInputField}
                    // value={patientPayload.confirmPassword}
                  />
                </div>
              </div>
              <div className="mt-4 mb-4">
                <TextArea
                  label="Address"
                  placeholder="Enter your current address"
                  name="address"
                  onChange={handleInputField}
                  // value={patientPayload.address}
                />
              </div>

              <div className="flex  justify-end ">
                <Button label="Next" />
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
