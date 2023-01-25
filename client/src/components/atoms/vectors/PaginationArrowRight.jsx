import * as React from "react";

const PaginationArrowRight = (props) => (
  <svg width={8} height={11} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2.28799 10.5333L7.08799 5.73335L2.28799 0.93335L0.927988 2.29335L4.35199 5.73335L0.911987 9.17335L2.28799 10.5333Z"
      fill={props.color || "#333333"}
    />
  </svg>
);

export default PaginationArrowRight;
