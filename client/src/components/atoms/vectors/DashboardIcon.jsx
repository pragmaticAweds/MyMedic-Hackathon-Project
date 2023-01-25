import * as React from "react";

const DashboardIcon = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.829 3.31c-5.15 0-9.329 4.176-9.329 9.329 0 5.152 4.176 9.33 9.329 9.33a9.328 9.328 0 0 0 9.329-9.33h-9.33v-9.33ZM22.5 11.57a9.3 9.3 0 0 0-2.731-6.595L13.17 11.57H22.5ZM12.01 2.026v9.326l6.595-6.595a9.299 9.299 0 0 0-6.595-2.731Z"
      fill={props.color || "#52575c"}
      fillOpacity={props.color ? 1 : 0.7}
    />
  </svg>
);

export default DashboardIcon;
