import clsx from "clsx";
import { useState } from "react";
import PaginationArrowLeft from "../../atoms/vectors/PaginationArrowLeft";
import PaginationArrowRight from "../../atoms/vectors/PaginationArrowRight";
import "../Table/TableStyles.scss";
import "./PatientTableStyles.scss";

const PatientTable = ({ tableData, tableDataHeading, onClick }) => {
  const [currentPagination, setCurrentPagination] = useState(1);
  const patientTableHeading = [
    "S/N",
    "Name",
    "PS Id",
    "Gender",
    "Diagnoses",
    "Health State",
    "Entry Date",
    "Discharged Date",
  ];
  const handleViewPatientsDetails = () => {
    onClick("view");
  };

  return (
    <div className={clsx("table-container")}>
      <div
        className={clsx(
          "table-head-container",
          "grid items-center",
          "patient-table-grid-style"
        )}
      >
        {patientTableHeading.map((th, i) => (
          <div key={`${th}-1 + ${i}`} className={clsx("table-head")}>
            {th}
          </div>
        ))}
      </div>
      <div className={clsx("table-data-container", "scrollbar-hide")}>
        {Array(16)
          .fill("1")
          .map((data, i, arr) => (
            <div
              className={clsx(
                "table-data-row",
                "grid items-center",
                "patient-table-grid-style",
                i === arr.length - 1 ? "border-y" : "border-t"
              )}
              key={"appointment-table-data" + i}
              onClick={handleViewPatientsDetails}
            >
              <span className="tb-number">01</span>
              <div className="flex items-center gap-x-5">
                <div className="w-10 h-10 flex rounded-full">
                  <img
                    src="/img/man-avatar.webp"
                    alt="user-logo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span>Yusuf Ajino</span>
              </div>
              <span className="tb-id">000001</span>
              <span className="">Female</span>
              <span className="">Lorem ipsum dolor</span>
              <span className="">Discharged</span>
              <span className="table-date">10/10/2020</span>
              <span className="table-date">10/10/2020</span>
            </div>
          ))}
      </div>
      <div className="table-footer">
        <span className="border rounded-sm">
          <PaginationArrowLeft />
        </span>
        <span
          className={clsx(
            currentPagination === 1
              ? "bg-[#336CFB] text-white"
              : "border rounded-sm"
          )}
        >
          1
        </span>
        <span
          className={clsx(
            currentPagination === 2
              ? "bg-[#336CFB] text-white"
              : "border rounded-sm"
          )}
        >
          2
        </span>
        <span
          className={clsx(
            currentPagination === 3
              ? "bg-[#336CFB] text-white"
              : "border rounded-sm"
          )}
        >
          3
        </span>
        <span className="border rounded-sm">
          <PaginationArrowRight />
        </span>
      </div>
    </div>
  );
};

export default PatientTable;
