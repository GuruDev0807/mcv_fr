import React from "react";

const FarmsIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.89538 5.87467C8.0459 5.93371 8.19356 5.78922 8.14367 5.63549C7.80122 4.58021 6.56134 4.18655 5.40873 5.12279C4.80244 5.61532 4.57461 5.71997 4.56886 5.72262C4.96856 6.12224 5.42518 7.46324 6.42171 7.61155C7.51946 7.81057 8.49103 6.73056 7.69614 6.23635C7.17338 5.91136 6.55788 5.72258 5.89812 5.72258C6.58979 5.56667 7.28028 5.63352 7.89538 5.87467Z"
      fill={color}
    />
    <path
      d="M12.8662 5.12272C10.8766 3.50659 9.6077 6.05524 10.3964 5.8026C10.9566 5.62317 11.569 5.58409 12.1833 5.72254C11.1425 5.72254 10.1831 6.19952 9.54342 6.97588C9.59596 5.75581 9.67541 4.99211 9.76754 4.42402C10.2992 4.40574 11.0078 3.97642 11.3969 3.22518C12.0678 2.0246 11.7567 0.793606 11.6565 0.0168457C11.1323 0.527297 8.84251 -0.0708174 7.93475 1.4847C7.53377 2.17184 7.65031 3.00799 8.07214 3.61988C8.20566 3.81359 8.52494 3.72064 8.53405 3.48557C8.57366 2.46295 9.08262 1.69033 10.0314 1.2624C9.60567 1.81404 9.32612 2.43165 9.1817 3.06999C8.95723 4.06437 8.72276 4.71667 8.63666 7.88606C8.62792 8.20748 8.8883 8.47354 9.20983 8.46951C9.44258 8.46658 9.64197 8.31888 9.73149 8.10401C9.86762 7.7772 10.0892 7.43897 10.4498 7.12908C10.7924 7.50782 11.3138 7.70935 11.8534 7.61151C12.8456 7.46385 13.3087 6.11992 13.7062 5.72251C13.7003 5.71994 13.4725 5.61529 12.8662 5.12272Z"
      fill={color}
    />
    <path
      d="M15.791 9.07176C15.169 8.64976 14.492 8.95048 14.1811 9.12998L10.2797 11.9855L7.99533 11.986L7.42423 11.4149H9.52215C10.1531 11.4149 10.8597 11.0039 10.8597 10.2724C10.8597 9.49584 10.1531 9.12998 9.52215 9.12998H8.73596C8.15195 9.12998 7.46945 9.18206 6.98824 8.92446C6.53104 8.69181 6.00456 8.55942 5.44257 8.55942C4.49887 8.55942 3.65426 8.93563 3.07549 9.52893L0 12.5565L3.42657 15.9831L4.56876 14.2698H9.96617C10.5418 14.2698 11.0974 14.0587 11.5278 13.6764L15.83 9.85452C16.0692 9.64207 16.0557 9.25141 15.791 9.07176Z"
      fill={color}
    />
  </svg>
);

FarmsIcon.defaultProps = {
  width: "16",
  height: "16",
  color: "white",
};

export default FarmsIcon;
