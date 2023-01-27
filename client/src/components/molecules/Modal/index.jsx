import clsx from "clsx";
import { useRef } from "react";
import { useClickAway } from "react-use";
import "./ModalStyles.scss";

const Modal = ({
  children,
  closeModal = false,
  mxWt,
  mxHt,
  modalTitle,
  handleCloseModal = () => {},
}) => {
  const modalRef = useRef(null);
  useClickAway(modalRef, () => {
    handleCloseModal((prev) => !false);
  });

  const handleCloseModal2 = () => {
    handleCloseModal(false);
  };
  return (
    <div className={clsx("modal-container", closeModal ? "hidden" : "flex")}>
      <div
        className={clsx(
          "modal-container bg-[#00000050]",
          closeModal ? "hidden" : "flex"
        )}
        onClick={handleCloseModal2}
      ></div>
      <div
        className={clsx(
          "modal scrollbar-hide",
          mxWt || "max-w-[38.125rem]",
          mxHt || "max-h-[32.06rem]"
        )}
        ref={modalRef}
      >
        {modalTitle ? <h2>{modalTitle}</h2> : null}
        <div className="flex-1 overflow-auto scrollbar-hide mt-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
