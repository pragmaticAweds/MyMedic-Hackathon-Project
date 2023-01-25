import clsx from "clsx";
import { useState } from "react";
import Button from "../../atoms/button";
import PaginationArrowLeft from "../../atoms/vectors/PaginationArrowLeft";
import PaginationArrowRight from "../../atoms/vectors/PaginationArrowRight";
import "../table/TableStyles.scss";

const TableDonation = ({
  
  tableData,
   tableDataHeading = ["S/N", "Name", "Email", "Date", "Donation", "Method", ""],
}) => {
  const [currentPagination, setCurrentPagination] = useState(1);

  return (
    <div className={clsx("table-container")}>
      <div
        className={clsx(
          "table-head-container",
          "grid items-center",
          "donationGridStyle"
        )}
      >
        {tableDataHeading.map((th, i) => (
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
                "donationGridStyle",
                i === arr.length - 1 ? "border-y" : "border-t"
              )}
              key={"appointment-table-data" + i}
            >
              <span className="text-start">{i<9 ?`0${i + 1}`: i + 1}</span>

              <div className="flex items-center gap-x-5">
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
              <span className="table-date ">Money</span>
              <span className="table-date">25/01/2023</span>
              <span className="table-time">Bank transfer</span>
              <span className="">
                <Button type="primary-btn" label="view" />
              </span>
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

export default TableDonation;
