import { useState } from "react";
import PatientTable from "../../components/organisms/PatientTable";
import Input from "../../components/atoms/Input";
import Modal from "../../components/molecules/Modal";
import Button from "../../components/atoms/button";
import Select from "../../components/atoms/select";
import ScreenLayout from "../../templates/screen-layout";
import TextArea from "../../components/atoms/text-area";
import "./PatientsPageStyle.scss";

const PatientsPage = () => {
  const [newPatientPayload, setPatientPayload] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    address: "",
  });

  const [gender, setGender] = useState("");

  const genders = ["male", "female"];

  const [showModal, setShowModal] = useState(true);
  const [modalType, setModalType] = useState("view");
  const [patientStage, setPatientStage] = useState(0);
  const stages = ["Add New Patient Information", "Health State", "Medic Info"];

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleAddModalType = (type) => {
    setModalType(type);
    setShowModal((prev) => !prev);
  };
  const handleNextStage = () => {
    setPatientStage((prev) => prev + 1);
  };
  const handlePrevStage = () => {
    setPatientStage((prev) => prev - 1);
  };
  const handleInputField = () => {};
  return (
    <ScreenLayout
      title="Patient"
      btnLabel="Add Patient"
      inputName="filterPatient"
      onClick={() => handleAddModalType("add")}
    >
      <div className="new-patient-container">
        <PatientTable onClick={() => handleAddModalType("view")} />

        <Modal
          handleCloseModal={setShowModal}
          closeModal={showModal}
          modalTitle={
            patientStage === 0
              ? "Add New Patient Information"
              : patientStage === 1
              ? "Health Info"
              : "Medical Info"
          }
        >
          {patientStage === 0 ? (
            <form onClick={(e) => e.preventDefault()} className="patient-form">
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
                    onClick={handleNextStage}
                  />
                </div>
              </div>
            </form>
          ) : patientStage === 1 ? (
            <div className="form-stage-container">
              {/* gender and age*/}
              <div className="flex flex-col gap-y-12">
                <div className="form-stage">
                  <Select
                    label="Gender"
                    placeholder="Please select your gender"
                    options={genders}
                    title={gender}
                    onClick={setGender}
                  />
                  <Input label="Age" placeholder="Enter your age" />
                </div>
                {/* blood type and occupation*/}
                <div className="form-stage">
                  <Input
                    label="Blood Type"
                    placeholder="Enter your blood type"
                  />
                  <Input
                    label="Occupation"
                    placeholder="Enter your occupation"
                  />
                </div>
                {/* next of kin full name and next of kin phone number*/}
                <div className="form-stage mb-6">
                  <Input
                    label="Next Of Kin Full Name"
                    placeholder="Enter the next of kin full name"
                  />
                  <Input
                    label="Next of Kin Phone Number"
                    placeholder="Enter the next of kin phone number"
                  />
                </div>
              </div>
              <div className="mt-4">
                <TextArea
                  label="Allergies"
                  placeholder="Enter your allergies"
                  suffix='Please enter your allergies seperated by " , " '
                />
              </div>
              <div className="flex justify-between mt-8">
                <Button label="prev" onClick={handlePrevStage} />{" "}
                <Button label="Next" onClick={handleNextStage} />
              </div>
            </div>
          ) : patientStage === 2 ? (
            <div className="w-full">
              <div className="flex flex-col gap-y-16">
                <TextArea
                  label="Current Illness"
                  placeholder="Enter your current illness"
                  suffix='Please enter your current illness seperated by " , "'
                />

                <TextArea
                  label="Current Medication"
                  placeholder="Enter your current medication"
                  suffix='Please enter your current medication seperated by " , "'
                />

                <TextArea
                  label="Health History"
                  placeholder="Enter your health history"
                  suffix='Please enter your health history seperated by " , "'
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button label="prev" onClick={handlePrevStage}/>
                <Button label="Sign Up" />
              </div>
            </div>
          ) : null}
        </Modal>
      </div>
    </ScreenLayout>
  );
};

export default PatientsPage;
