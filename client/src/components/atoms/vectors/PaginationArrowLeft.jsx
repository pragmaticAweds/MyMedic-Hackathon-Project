import * as React from "react";

const PaginationArrowLeft = (props) => (
  <svg
    width={8}
    height={11}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m5.712.933-4.8 4.8 4.8 4.8 1.376-1.36-3.44-3.44 3.44-3.44L5.712.933Z"
      fill={props.color || "#E8E8E8"}
    />
  </svg>
);

export default PaginationArrowLeft;
