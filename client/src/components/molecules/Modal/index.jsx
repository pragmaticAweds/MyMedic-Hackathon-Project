import clsx from "clsx";
import { useRef } from "react";
import { useClickAway } from "react-use";

const Modal = ({
  children,
  closeModal = false,
  mxWt,
  mxHt,
  handleCloseModal = () => {},
}) => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    closeModal(false);
  });
  return (
    <div
      className={clsx(
        "fixed inset-0 bg-[#00000050]",
        "flex justify-center items-center"
      )}
      onClick={handleCloseModal}
    >
      <div
        className={clsx(
          " bg-white rounded-lg p-8 h-full w-full",
          mxWt || "max-w-[38.125rem]",
          mxHt || "max-h-[32.06rem]"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
