import React from "react";

const DepositIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.9355 3.19355H24.4839V1.59677C24.4839 0.716552 23.7673 0 22.8871 0H1.59677C0.716552 0 0 0.716552 0 1.59677V29.2742C0 30.0041 0.495 30.6142 1.16431 30.8038L1.51161 32.193C1.63004 32.668 2.05452 33 2.54419 33H21.939C22.4287 33 22.8532 32.6687 22.9716 32.193L23.3189 30.8038C23.9882 30.6142 24.4832 30.0041 24.4832 29.2742V27.6774H31.9348C32.5216 27.6774 32.9993 27.1997 32.9993 26.6129V4.25806C32.9993 3.67125 32.5216 3.19355 31.9348 3.19355H31.9355ZM11.727 3.20486C13.5912 3.2847 14.544 3.75974 14.8959 3.98462C14.8493 4.83157 14.5792 5.64659 14.1068 6.35583L14.0862 6.3871H12.5753C12.0902 5.39577 11.7995 4.3073 11.7276 3.20486H11.727ZM16.5 8.51613H10.6452V9.58065H16.5C16.7941 9.58065 17.0323 9.81883 17.0323 10.1129C17.0323 10.407 16.7941 10.6452 16.5 10.6452H10.6452V11.7097H16.5C16.7941 11.7097 17.0323 11.9479 17.0323 12.2419C17.0323 12.536 16.7941 12.7742 16.5 12.7742H10.6452V13.8387H15.4355C15.7296 13.8387 15.9677 14.0769 15.9677 14.371C15.9677 14.665 15.7296 14.9032 15.4355 14.9032H9.29988C7.93331 14.9032 6.56607 14.6005 5.32258 14.0317V7.15222C6.27798 6.25603 7.48355 5.65391 8.77228 5.42837L9.78423 7.45161H16.5C16.7941 7.45161 17.0323 7.6898 17.0323 7.98387C17.0323 8.27794 16.7941 8.51613 16.5 8.51613ZM4.25806 13.8387H3.19355V7.45161H4.25806V13.8387ZM10.4416 6.3871L9.65516 4.8156C9.9153 4.46698 10.3238 4.25806 10.7702 4.25806H10.7816C10.906 4.98859 11.1142 5.70448 11.403 6.3871H10.4416ZM8.68313 4.36452C7.14889 4.61401 5.70647 5.31859 4.57476 6.3871H4.25806V4.25806H8.74633C8.72305 4.29133 8.70508 4.32925 8.68379 4.36452H8.68313ZM2.12903 13.8387H1.06452V7.45161H2.12903V13.8387ZM4.25806 14.9032H4.66657C5.77367 15.4395 6.97724 15.7795 8.2021 15.9079L6.64857 17.8499C5.79429 18.9184 5.32325 20.2597 5.32325 21.629C5.32325 23.6955 6.36647 25.5218 7.95194 26.6129H4.25806V14.9032ZM6.3871 21.629C6.3871 20.5019 6.77498 19.3955 7.47956 18.5153L9.51744 15.9677H14.9664L17.0043 18.5153C17.7082 19.3948 18.0968 20.5019 18.0968 21.629C18.0968 24.3768 15.8606 26.6129 13.1128 26.6129H11.3717C8.62325 26.6129 6.3871 24.3768 6.3871 21.629ZM19.1613 21.629C19.1613 20.2604 18.6902 18.9184 17.836 17.8499L16.1773 15.7768C16.683 15.5087 17.0323 14.9824 17.0323 14.371C17.0323 14.1607 16.989 13.9611 16.9152 13.7768C17.5938 13.5925 18.0968 12.9778 18.0968 12.2419C18.0968 11.8314 17.9364 11.4608 17.6816 11.1774C17.9371 10.894 18.0968 10.5234 18.0968 10.1129C18.0968 9.7024 17.9364 9.33181 17.6816 9.04839C17.9371 8.76496 18.0968 8.39438 18.0968 7.98387C18.0968 7.10365 17.3802 6.3871 16.5 6.3871H15.3177C15.661 5.7231 15.8726 5.00323 15.9405 4.25806H20.2258V26.6129H16.5326C18.1181 25.5211 19.1613 23.6955 19.1613 21.629ZM21.2903 4.25806H29.8065V26.6129H21.2903V4.25806ZM1.59677 1.06452H22.8871C23.1812 1.06452 23.4194 1.3027 23.4194 1.59677V3.19355H15.6258C15.1733 2.8569 13.882 2.12903 11.1774 2.12903H10.6452V2.66129C10.6452 2.83827 10.6511 3.01657 10.6605 3.19355H3.19355V6.3871H1.06452V1.59677C1.06452 1.3027 1.3027 1.06452 1.59677 1.06452ZM2.54419 31.9355L2.27806 30.871H22.2051L21.9383 31.9355H2.54419ZM23.4194 29.2742C23.4194 29.5683 23.1812 29.8065 22.8871 29.8065H1.59677C1.3027 29.8065 1.06452 29.5683 1.06452 29.2742V14.9032H3.19355V27.6774H23.4194V29.2742ZM31.9355 26.6129H30.871V4.25806H31.9355V26.6129Z"
      fill={color}
    />
    <path
      d="M12.4054 25.6096L8.33496 18.1407H12.3781C12.6582 18.1407 12.8858 18.3676 12.8858 18.6483C12.8858 18.9291 12.6589 19.156 12.3781 19.156H10.0435L12.3508 23.3901L14.748 18.4281C14.8698 18.1759 15.1731 18.0702 15.4253 18.1919C15.6775 18.3137 15.7832 18.6171 15.6615 18.8692L12.4054 25.6103V25.6096Z"
      fill={color}
    />
  </svg>
);

DepositIcon.defaultProps = {
  width: "33",
  height: "33",
  color: "white",
};

export default DepositIcon;