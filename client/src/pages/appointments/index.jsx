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
  const [modalType, setModalType] = useState("request");
  const [purpose, setPurpose] = useState("");
  const purposes = ["consultation", "checkout", "orders"];

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
            ? "New Appointment Information"
            : modalType === "request"
            ? "Request for a new Appointment"
            : modalType === "view"
            ? "View Appointment Information"
            : null
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
                  mxWt="max-w-[9.5rem]"
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
        ) : modalType === "request" ? (
          <div className="form-stage-container">
            <div className="grid grid-cols-[0.3fr_0.5fr_0.2fr] items-center">
              <img src="/img/Frame.webp" alt="frame" />
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Name</span>
                <span>Mudafe Arowosola</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Email Address</span>
                <span>khodijahlawal@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-between py-12">
              <div className="flex flex-col gap-x-4 gap-y-1">
                <span className="text-[#25282B] font-bold"> Doctor Name</span>
                <span> Dr Arowofela </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Purpose</span>
                <span>CheckUp</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Date</span>
                <span>26th January, 2023</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Visit Time</span>
                <span>2:00pm</span>
              </div>
            </div>
            <div className="flex flex-col mb-8 gap-y-1">
              <span className="text-[#25282B] font-bold">
                Others Information
              </span>
              <span>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make
              </span>
            </div>
            <div className="flex justify-end">
              <Button label="Close"></Button>
            </div>
          </div>
        ) : modalType === "view" ? (
          <div className="form-stage-container">
            <div className="grid grid-cols-[0.3fr_0.5fr_0.2fr] items-center">
              <img src="/img/Frame.webp" alt="frame" />
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Name</span>
                <span>Mudafe Arowosola</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Email Address</span>
                <span>khodijahlawal@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-between py-12">
              <div className="flex flex-col gap-x-4 gap-y-1">
                <span className="text-[#25282B] font-bold"> Doctor Name</span>
                <span> Dr Arowofela </span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Purpose</span>
                <span>CheckUp</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Date</span>
                <span>26th January, 2023</span>
              </div>
              <div className="flex flex-col gap-y-1">
                <span className="text-[#25282B] font-bold">Visit Time</span>
                <span>2:00pm</span>
              </div>
            </div>
            <div className="flex flex-col mb-8 gap-y-1">
              <span className="text-[#25282B] font-bold">
                Others Information
              </span>
              <span>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make
              </span>
            </div>
            <div className="flex  flex-col justify-center gap-5 ">
              <div className="flex flex-row justify-start w-2/3 gap-8">
                <Input type="date" label="Reschedule Date" />
                <Input type="time" label="Fix Appointment Time" />
              </div>
              <div className="flex flex-row justify-end gap-8 ">
                <Button label="Clear" type="danger-outline" />
                <Button label="Apply" />
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </ScreenLayout>
  );
};

export default AppointmentsPage;
