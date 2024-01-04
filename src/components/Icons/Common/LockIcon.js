import React from "react";

const LockIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.72962 9.19093C2.55289 9.00513 3.54226 8.81732 4.6539 8.67371V6.83581C4.6539 4.69455 6.37926 2.95251 8.50002 2.95251C10.6208 2.95251 12.3461 4.69455 12.3461 6.83581V8.67371C13.4578 8.81732 14.4472 9.00513 15.2704 9.19093V6.83581C15.2704 3.06655 12.2332 0 8.50002 0C4.76681 0 1.72962 3.06655 1.72962 6.83586V9.19093Z"
      fill={color}
    />
    <path
      d="M8.50002 13.7212C8.0604 13.7212 7.70275 14.0823 7.70275 14.5262C7.70275 14.9701 8.0604 15.3312 8.50002 15.3312C8.93964 15.3312 9.29729 14.9701 9.29729 14.5262C9.29733 14.0823 8.93964 13.7212 8.50002 13.7212Z"
      fill={color}
    />
    <path
      d="M8.50002 9.71029C4.48763 9.71029 1.14518 10.6285 0 10.9847V20.7253C1.14692 21.0812 4.49661 22 8.50002 22C12.5124 22 15.8549 21.0818 17 20.7256V10.985C15.8531 10.6291 12.5035 9.71029 8.50002 9.71029ZM9.13838 16.5183V18.6336H7.86166V16.5183C7.02954 16.2458 6.42603 15.456 6.42603 14.5262C6.42603 13.3715 7.35642 12.4321 8.50002 12.4321C9.64362 12.4321 10.574 13.3715 10.574 14.5262C10.5741 15.456 9.97055 16.2458 9.13838 16.5183Z"
      fill={color}
    />
  </svg>
);

LockIcon.defaultProps = {
  width: "17",
  height: "22",
  color: "white",
};

export default LockIcon;