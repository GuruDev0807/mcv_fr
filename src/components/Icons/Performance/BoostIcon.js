import React from "react";

const BoostIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.1345 8.36422L20.8464 7.17721C20.9807 6.95309 20.9075 6.66207 20.6833 6.52804L20.3083 6.30319L21.4656 4.37301L21.8406 4.59811C22.0647 4.73214 22.3557 4.66012 22.4895 4.43502L23.5027 2.74508C23.6375 2.5212 23.5647 2.23019 23.3406 2.09615L20.0876 0.147183C19.8635 0.0121727 19.5735 0.0851727 19.4382 0.309053L18.4255 2.00021C18.2913 2.22409 18.3635 2.5151 18.5886 2.64914L18.9626 2.87424L18.6277 3.4321L17.1316 2.53513L17.3943 2.09617C17.5286 1.87205 17.4553 1.58103 17.2317 1.44724L14.9294 0.0671127C14.7053 -0.0669173 14.4143 0.00607269 14.2805 0.230203L13.2673 1.92014C13.1335 2.14402 13.2053 2.43503 13.4304 2.56907L15.7317 3.9492C15.9563 4.08421 16.2463 4.01121 16.3816 3.78611L16.6443 3.34715L18.1414 4.24412L17.8064 4.8032L17.4314 4.57908C17.2073 4.44407 16.9163 4.51707 16.7825 4.74119L16.0706 5.92918C13.2595 5.39524 10.4304 6.65403 8.94458 9.13304L0.259525 23.623C-0.258545 24.4861 0.0236846 25.6101 0.886475 26.1272L9.47827 31.2771C10.3425 31.7952 11.4656 31.5132 11.9836 30.6501L20.6672 16.1601C22.1536 13.6811 21.9294 10.592 20.1345 8.36424V8.36422ZM15.8123 2.894L14.3225 2.00118L14.8494 1.12203L16.3396 2.0151L15.8123 2.894ZM20.0076 1.20211L22.4475 2.66402L21.9207 3.54317L19.4807 2.08004L20.0076 1.20211ZM19.7747 3.36007L20.6536 3.88717L19.4963 5.8171L18.6184 5.29024L19.7747 3.36007ZM11.1716 30.163C10.9216 30.5791 10.3806 30.7141 9.96558 30.465L1.37329 25.3151C0.957275 25.0661 0.822515 24.5251 1.07153 24.1091L9.75659 9.62008C11.0886 7.39718 13.6746 6.3132 16.1907 6.92306C16.3923 6.97213 16.6013 6.88424 16.7083 6.70602L17.3503 5.63424L19.7903 7.09713L19.1487 8.16915C19.0413 8.34615 19.0632 8.5732 19.2014 8.72701C20.9255 10.6591 21.1882 13.4502 19.8557 15.6731L11.1716 30.163Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.897 11.1633C10.6729 11.0293 10.3819 11.1013 10.2467 11.3264L5.18367 19.7744C5.0489 19.9983 5.12166 20.2893 5.34578 20.4233L12.4058 24.6555C12.63 24.7893 12.921 24.7163 13.0548 24.4924L18.1187 16.0444C18.254 15.8193 18.1807 15.5293 17.9566 15.3942L10.897 11.1633ZM12.4869 23.5993L6.23885 19.8554L10.816 12.2185L17.064 15.9633L12.4869 23.5993Z"
      fill={color}
    />
  </svg>
);

BoostIcon.defaultProps = {
  width: "24",
  height: "32",
  color: "white",
};

export default BoostIcon;
