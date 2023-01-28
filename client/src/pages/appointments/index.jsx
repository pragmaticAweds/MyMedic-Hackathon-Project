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
            : modalType === "view"
            ? "View Appointment Information"
            : "Book an Appointment"
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
        ) : modalType === "book" ? (
          <form className="flex  flex-col gap-8 py-4">
            <div className="form-stage mt-6 flex pb-4 gap-8">
              <Input
                label="Name"
                placeholder="Enter your full name"
                name="fullName"
                onChange={handleInputField}
                // value={patientPayload.fullName}
              />
              <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                name="Number"
                onChange={handleInputField}
                // value={patientPayload.email}
              />
            </div>
            {/* email address and phone number*/}

            <div className="form-stage flex pb-4 gap-8">
              <Input
                label="Email Address"
                placeholder="Enter your email address"
                name="email"
                onChange={handleInputField}
                // value={patientPayload.email}
              />
              <Input
                label="Date"
                type="date"
                name="Date"
                onChange={handleInputField}
                // value={patientPayload.phoneNo}
              />
            </div>
            <Select
              label="Purpose of Visit"
              placeholder="Select your purpose"
              type="options"
              name="email"
              onChange={handleInputField}
              // value={patientPayload.email}
            />
            <TextArea
              label="Extra Information"
              placeholder="If there is any other information, please state it here."
              name="extra"
              onChange={handleInputField}
              // value={patientPayload.extra information}
            />
            <div className="flex  gap-8  justify-end">
              <Button type="danger-outline" label="Close" />
              <Button
                type="primary-btn"
                mxWt="max-w-[9.5rem]"
                label="Make Appointment"
              />
            </div>
          </form>
        ) : null}
      </Modal>
    </ScreenLayout>
  );
};

export default AppointmentsPage;
