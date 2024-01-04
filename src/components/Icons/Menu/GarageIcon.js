import React from "react";

const GarageIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6376 9.14668C13.571 9.14668 13.5026 9.15623 13.4345 9.17499L13.0489 9.28113L12.5555 8.07928C12.3284 7.52618 11.6573 7.0761 11.0594 7.0761H5.93261C5.33473 7.0761 4.66357 7.52618 4.43653 8.07928L3.94398 9.27916L3.56563 9.17499C3.49743 9.15623 3.42908 9.14668 3.3625 9.14668C2.99776 9.14668 2.733 9.42526 2.733 9.80917V9.82332C2.733 10.2195 3.01808 10.5499 3.39373 10.6213C3.18857 11.1387 3.02364 11.9841 3.02364 12.5283V15.0245C3.02364 15.4726 3.38831 15.8373 3.83643 15.8373H4.30473C4.75284 15.8373 5.11752 15.4726 5.11752 15.0245V14.5034H11.8746V15.0245C11.8746 15.4726 12.2393 15.8373 12.6874 15.8373H13.1557C13.6038 15.8373 13.9685 15.4726 13.9685 15.0245V12.5283C13.9685 11.9844 13.8038 11.1398 13.5988 10.6224C13.9782 10.5539 14.2671 10.222 14.2671 9.82325V9.8091C14.2671 9.42533 14.0023 9.14668 13.6376 9.14668ZM4.46654 10.1136L5.2502 8.20438C5.38601 7.87351 5.78976 7.60285 6.14732 7.60285H10.8447C11.2022 7.60285 11.606 7.87351 11.7418 8.20438L12.5256 10.1136C12.6614 10.4445 12.4799 10.7152 12.1223 10.7152H4.86982C4.51226 10.7152 4.33074 10.4444 4.46654 10.1136ZM6.43112 12.9801C6.43112 13.1589 6.28481 13.3052 6.106 13.3052H4.54477C4.36596 13.3052 4.21966 13.1589 4.21966 12.9801V12.3157C4.21966 12.1369 4.36596 11.9906 4.54477 11.9906H6.10607C6.28488 11.9906 6.43118 12.1369 6.43118 12.3157L6.43112 12.9801ZM12.7562 12.9801C12.7562 13.1589 12.6099 13.3052 12.431 13.3052H10.8698C10.6909 13.3052 10.5446 13.1589 10.5446 12.9801V12.3157C10.5446 12.1369 10.6909 11.9906 10.8698 11.9906H12.431C12.6099 11.9906 12.7562 12.1369 12.7562 12.3157V12.9801Z"
      fill={color}
    />
    <path
      d="M15.476 0.898438H1.52398C0.68369 0.898438 0 1.58206 0 2.42241V15.2549C0 15.7225 0.379098 16.1016 0.846654 16.1016C1.31421 16.1016 1.69331 15.7225 1.69331 15.2549V6.28695H15.3067V15.255C15.3067 15.7225 15.6858 16.1016 16.1533 16.1016C16.6209 16.1016 17 15.7225 17 15.255V2.42241C17 1.58213 16.3164 0.898438 15.476 0.898438ZM1.69331 4.34053H15.3067V4.63645H1.69331V4.34053ZM1.69331 3.6632V3.42567H15.3067V3.6632H1.69331ZM1.69331 5.60963V5.31377H15.3067V5.60963H1.69331Z"
      fill={color}
    />
  </svg>
);

GarageIcon.defaultProps = {
  width: "17",
  height: "17",
  color: "white",
};

export default GarageIcon;