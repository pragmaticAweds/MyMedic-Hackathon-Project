import clsx from "clsx";
import { useState } from "react";
import PaginationArrowLeft from "../../atoms/vectors/PaginationArrowLeft";
import PaginationArrowRight from "../../atoms/vectors/PaginationArrowRight";
import "../Table/TableStyles.scss";
import "./DoctorsTableStyles.scss";

const DoctorsTable = ({ tableData, tableDataHeading, onClick }) => {
  const [currentPagination, setCurrentPagination] = useState(1);
  const tableHeading = [
    "S/N",
    "Doctor's Name",
    "Specialty",
    "Status",
    "Working Hour",
    "Shift",
    "Date",
  ];

  const handleViewDoctorsDetails = () => {
    onClick("view");
  };

  return (
    <div className={clsx("table-container")}>
      <div
        className={clsx(
          "table-head-container",
          "grid items-center",
          "doctors-table-grid-style"
        )}
      >
        {tableHeading.map((th, i) => (
          <div key={`${th}-1 + ${i}`} className={clsx("table-head")}>
            {th}
          </div>
        ))}
      </div>
      <div
        className={clsx("table-data-container", "scrollbar-hide")}
        onClick={handleViewDoctorsDetails}
      >
        {Array(16)
          .fill("1")
          .map((data, i, arr) => (
            <div
              className={clsx(
                "table-data-row",
                "grid items-center",
                "doctors-table-grid-style",
                i === arr.length - 1 ? "border-y" : "border-t"
              )}
              key={"appointment-table-data" + i}
            >
              <span className="">01</span>
              <div className="flex items-center gap-x-5 justify-center">
                <div className="w-10 h-10 flex rounded-full">
                  <img
                    src="/img/man-avatar.webp"
                    alt="user-logo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span>Yusuf Ajino</span>
              </div>

              <span className="">Surgeon</span>
              <span className=" ">unavailable</span>
              <span className="">9am-5pm</span>
              <span className="">morning</span>
              <span className="">10/10/2020</span>
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

export default DoctorsTable;
