import React from "react";

const GamesIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3907 2.10853C14.0132 -1.79752 10.4317 0.91997 10.4317 0.91997C10.1995 1.09552 9.77115 1.23985 9.48014 1.24052L8.52083 1.24119C8.22981 1.24153 7.80151 1.0972 7.56957 0.921648C7.56957 0.921648 3.98776 -1.79651 1.60996 2.10954C-0.767168 6.01425 0.1908 10.2667 0.1908 10.2667C0.358629 11.3079 0.911793 12.0027 1.95569 11.9155C2.99657 11.8285 5.25588 9.11137 5.25588 9.11137C5.44251 8.88749 5.83355 8.70455 6.12389 8.70455L11.8751 8.70354C12.1657 8.70354 12.5564 8.88648 12.7427 9.11036C12.7427 9.11036 15.0024 11.8275 16.0449 11.9144C17.0875 12.0017 17.642 11.3062 17.8088 10.2657C17.8088 10.2657 18.7681 6.01392 16.3907 2.10853ZM6.83884 5.28789H5.60564V6.47645C5.60564 6.47645 5.34449 6.67583 4.94036 6.6708C4.5369 6.66476 4.3543 6.45329 4.3543 6.45329V5.28822H3.18957C3.18957 5.28822 3.04423 5.13919 3.00529 4.74681C2.96703 4.35442 3.16607 4.03723 3.16607 4.03723H4.39962V2.80402C4.39962 2.80402 4.65337 2.66808 5.01823 2.67848C5.38343 2.68989 5.65095 2.82718 5.65095 2.82718L5.64591 4.03689H6.81065C6.81065 4.03689 7.01406 4.29803 7.03084 4.61355C7.04762 4.92941 6.83884 5.28789 6.83884 5.28789ZM12.4954 6.6426C11.9553 6.6426 11.5199 6.20591 11.5199 5.66651C11.5199 5.1261 11.9553 4.69042 12.4954 4.69042C13.0331 4.69042 13.4718 5.1261 13.4718 5.66651C13.4718 6.20625 13.0331 6.6426 12.4954 6.6426ZM12.4954 3.957C11.9553 3.957 11.5199 3.52065 11.5199 2.98125C11.5199 2.44084 11.9553 2.00515 12.4954 2.00515C13.0331 2.00515 13.4718 2.44084 13.4718 2.98125C13.4718 3.52098 13.0331 3.957 12.4954 3.957ZM14.9262 5.39866C14.3861 5.39866 13.9508 4.9623 13.9508 4.42256C13.9508 3.88249 14.3861 3.44647 14.9262 3.44647C15.4639 3.44647 15.9026 3.88249 15.9026 4.42256C15.9026 4.9623 15.4639 5.39866 14.9262 5.39866Z"
      fill={color}
    />
  </svg>
);

GamesIcon.defaultProps = {
  width: "18",
  height: "12",
  color: "white",
};

export default GamesIcon;
