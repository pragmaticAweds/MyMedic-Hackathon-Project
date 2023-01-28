import clsx from "clsx";
import { useState } from "react";
import PaginationArrowLeft from "../../atoms/vectors/PaginationArrowLeft";
import PaginationArrowRight from "../../atoms/vectors/PaginationArrowRight";
import "./TableStyles.scss";

const Table = ({
  gridStyle = "grid-cols-[0.05fr_0.25fr_0.2fr_0.1fr_0.1fr_0.1fr_0.1fr_0.1fr]",
  tableData,
  tableDataHeading = [
    "Name",
    "Email",
    "Date",
    "Visit Time",
    "Doctor",
    "Purpose",
    "Status",
  ],
  onClick,
}) => {
  const [currentPagination, setCurrentPagination] = useState(1);
  const tableHeading = [
    "S/N",
    "Name",
    "Email",
    "Date",
    "Visit Time",
    "Doctor",
    "Purpose",
    "Status",
  ];
  const handleViewAppointmentDetails = () => {
    onClick("view");
  };

  return (
    <div className={clsx("table-container")}>
      <div className={clsx("table-head-container", "grid", gridStyle)}>
        {tableHeading.map((th, i) => (
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
                gridStyle,
                i === arr.length - 1 ? "border-y" : "border-t"
              )}
              key={"appointment-table-data" + i}
              onClick={handleViewAppointmentDetails}
            >
              <span className="">01</span>
              <div className="flex items-center justify-center gap-x-5">
                <div className="w-10 h-10 flex rounded-full">
                  <img
                    src="/img/man-avatar.webp"
                    alt="user-logo"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span>Yusuf Ajibola</span>
              </div>
              <span className="tb-email">Anonymous@gmail.com</span>
              <span className="table-date ">10/10/20</span>
              <span className="table-time">01:15</span>
              <span className="table-time">Dr Ajisafe</span>
              <span className="">Treatment</span>
              <span className="">Waiting</span>
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

export default Table;
