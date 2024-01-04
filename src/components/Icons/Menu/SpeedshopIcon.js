import React from "react";

const SpeedshopIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.11377 12.8541V15.7935H5.04984C3.8308 15.091 2.81489 14.074 2.11377 12.8541Z"
      fill={color}
    />
    <path
      d="M1.05469 9.79271C1.05469 9.50147 0.818578 9.26536 0.527344 9.26536C0.236109 9.26536 0 9.50147 0 9.79271V16.5032C0 16.7944 0.236109 17.0305 0.527344 17.0305C0.818578 17.0305 1.05469 16.7944 1.05469 16.5032V9.79271Z"
      fill={color}
    />
    <path
      d="M10.3652 10.3087C10.1129 10.1631 10.0265 9.84062 10.1722 9.58838C10.3178 9.33617 10.6403 9.24968 10.8925 9.39537L11.5122 9.75312C11.601 9.48853 11.6499 9.20577 11.6499 8.91166C11.6499 8.61754 11.601 8.33478 11.5122 8.07019L10.8925 8.42794C10.8095 8.47589 10.7188 8.49871 10.6294 8.49871C10.4471 8.49871 10.2698 8.40414 10.1722 8.23493C10.0265 7.98269 10.1129 7.66016 10.3652 7.51458L10.9837 7.15746C10.6091 6.73429 10.1018 6.4311 9.52734 6.31463V7.03083C9.52734 7.32207 9.29123 7.55818 9 7.55818C8.70877 7.55818 8.47266 7.32207 8.47266 7.03083V6.31463C7.89817 6.4311 7.39097 6.73425 7.01627 7.15746L7.63481 7.51458C7.88706 7.6602 7.97347 7.98269 7.82782 8.23493C7.73016 8.40411 7.5529 8.49871 7.37065 8.49871C7.28118 8.49871 7.19051 8.47593 7.10747 8.42794L6.48787 8.07019C6.399 8.33478 6.3501 8.61754 6.3501 8.91166C6.3501 9.20577 6.399 9.48853 6.48787 9.75312L7.10747 9.39537C7.35968 9.24972 7.6822 9.3361 7.82782 9.58838C7.97347 9.84062 7.88706 10.1631 7.63481 10.3087L7.01627 10.6658C7.39093 11.089 7.89817 11.3922 8.47266 11.5087V10.7925C8.47266 10.5012 8.70877 10.2651 9 10.2651C9.29123 10.2651 9.52734 10.5012 9.52734 10.7925V11.5087C10.1018 11.3922 10.609 11.0891 10.9837 10.6658L10.3652 10.3087ZM9 9.43896C8.70437 9.43896 8.48545 9.19734 8.47266 8.91162C8.45989 8.62682 8.72416 8.38428 9 8.38428C9.29563 8.38428 9.51455 8.62591 9.52734 8.91162C9.54011 9.19639 9.27584 9.43896 9 9.43896Z"
      fill={color}
    />
    <path
      d="M15.8906 7.3208V2.02979H9C5.20534 2.02979 2.11816 5.11696 2.11816 8.91162C2.11816 12.7063 5.20534 15.7935 9 15.7935C12.7947 15.7935 15.8818 12.7063 15.8818 8.91162C15.8818 8.37239 15.8197 7.83985 15.6966 7.3208H15.8906ZM12.2083 10.7639C12.2022 10.7744 12.1958 10.7846 12.1892 10.7945C11.5434 11.884 10.3557 12.6162 9 12.6162C7.64434 12.6162 6.45666 11.8841 5.81091 10.7946C5.80423 10.7846 5.79783 10.7744 5.79175 10.7639C5.78914 10.7594 5.78718 10.7547 5.78471 10.7502C5.47351 10.208 5.29541 9.58022 5.29541 8.91159C5.29541 8.24295 5.47351 7.61513 5.78471 7.07302C5.78718 7.06848 5.78914 7.06381 5.79175 7.05931C5.7953 7.05316 5.79945 7.04757 5.80317 7.04162C6.44713 5.94496 7.63893 5.20703 8.99996 5.20703C10.361 5.20703 11.5528 5.94496 12.1968 7.04162C12.2005 7.04757 12.2046 7.05316 12.2082 7.05931C12.2108 7.06381 12.2128 7.06848 12.2152 7.07302C12.5264 7.61513 12.7045 8.24295 12.7045 8.91159C12.7045 9.58022 12.5264 10.208 12.2152 10.7502C12.2128 10.7547 12.2109 10.7594 12.2083 10.7639Z"
      fill={color}
    />
    <path
      d="M18 1.49805C18 1.20681 17.7639 0.970703 17.4727 0.970703C17.1814 0.970703 16.9453 1.20681 16.9453 1.49805V7.85254C16.9453 8.14377 17.1814 8.37988 17.4727 8.37988C17.7639 8.37988 18 8.14377 18 7.85254V1.49805Z"
      fill={color}
    />
  </svg>
);

SpeedshopIcon.defaultProps = {
  width: "18",
  height: "18",
  color: "white",
};

export default SpeedshopIcon;
