import React from "react";

const HandlingIcon = ({ width, height, color }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.5855 19.0081H22.0769C22.261 18.6488 22.3571 18.2508 22.3571 17.847C22.3571 17.4433 22.261 17.0453 22.0769 16.686H27.5855C27.6948 16.686 27.7996 16.6425 27.8769 16.5652C27.9542 16.4879 27.9976 16.3831 27.9976 16.2738C27.9976 16.1645 27.9542 16.0597 27.8769 15.9824C27.7996 15.9051 27.6948 15.8617 27.5855 15.8617H21.4151C21.3057 15.7736 21.1891 15.6948 21.0665 15.6262C21.2732 15.4451 21.4389 15.222 21.5527 14.9719C21.6664 14.7217 21.7254 14.4502 21.726 14.1754V10.4661H21.945C22.0543 10.4661 22.1591 10.4227 22.2364 10.3454C22.3137 10.2681 22.3571 10.1633 22.3571 10.0539V5.89245C22.3569 5.60022 22.276 5.31373 22.1236 5.06444C21.9711 4.81515 21.7528 4.61272 21.4928 4.47938C21.8831 4.13459 22.1592 3.67917 22.2843 3.17367C22.4095 2.66817 22.3778 2.13654 22.1935 1.64949C22.0091 1.16244 21.6809 0.743038 21.2524 0.447061C20.824 0.151083 20.3155 -0.00744629 19.7948 -0.00744629C19.274 -0.00744629 18.7656 0.151083 18.3371 0.447061C17.9086 0.743038 17.5804 1.16244 17.3961 1.64949C17.2117 2.13654 17.1801 2.66817 17.3052 3.17367C17.4304 3.67917 17.7064 4.13459 18.0967 4.47938C17.8361 4.61219 17.6172 4.81443 17.4643 5.06379C17.3113 5.31315 17.2303 5.59992 17.23 5.89245V10.0422C17.2285 10.0973 17.238 10.1521 17.258 10.2035C17.278 10.2549 17.3081 10.3017 17.3465 10.3412C17.3849 10.3808 17.4309 10.4122 17.4817 10.4336C17.5325 10.4551 17.5871 10.4661 17.6422 10.4661H17.8612V14.1872C17.8617 14.462 17.9208 14.7335 18.0345 14.9836C18.1482 15.2338 18.314 15.4569 18.5206 15.6379C18.3988 15.7066 18.283 15.7854 18.1744 15.8734H12.4138V15.2376C12.4139 15.1563 12.39 15.0767 12.3452 15.0089C12.3004 14.9411 12.2366 14.8879 12.1618 14.856L10.5132 14.1636V9.87495C10.5132 9.29718 10.2837 8.74308 9.87518 8.33453C9.46664 7.92599 8.91253 7.69647 8.33476 7.69647H2.17848C1.60091 7.69709 1.04716 7.92681 0.638752 8.33522C0.230342 8.74363 0.000623399 9.29737 0 9.87495V25.8191C0.000623399 26.3967 0.230342 26.9504 0.638752 27.3588C1.04716 27.7672 1.60091 27.997 2.17848 27.9976H8.33005C8.90782 27.9976 9.46193 27.7681 9.87047 27.3595C10.279 26.951 10.5085 26.3969 10.5085 25.8191V21.5351L12.1571 20.8427C12.2319 20.8109 12.2957 20.7577 12.3405 20.6899C12.3853 20.622 12.4092 20.5425 12.4091 20.4612V19.8324H18.1721C18.6293 20.2072 19.2023 20.4121 19.7936 20.4121C20.3848 20.4121 20.9578 20.2072 21.4151 19.8324H27.5855C27.6948 19.8324 27.7996 19.789 27.8769 19.7117C27.9542 19.6344 27.9976 19.5296 27.9976 19.4202C27.9976 19.3109 27.9542 19.2061 27.8769 19.1288C27.7996 19.0515 27.6948 19.0081 27.5855 19.0081V19.0081ZM19.7948 0.824234C20.1391 0.824234 20.4757 0.926368 20.7619 1.11771C21.0482 1.30906 21.2713 1.58102 21.4029 1.89918C21.5346 2.21734 21.5689 2.5674 21.5016 2.90507C21.4342 3.24275 21.2682 3.55286 21.0246 3.79617C20.781 4.03948 20.4706 4.20505 20.1329 4.27194C19.7951 4.33883 19.4451 4.30403 19.1271 4.17194C18.8091 4.03985 18.5375 3.81641 18.3465 3.52988C18.1556 3.24336 18.0539 2.90664 18.0543 2.56231C18.055 2.10113 18.2386 1.65905 18.5649 1.33316C18.8913 1.00728 19.3336 0.824233 19.7948 0.824234V0.824234ZM18.0543 5.89245C18.055 5.68964 18.1358 5.49531 18.2792 5.35191C18.4226 5.2085 18.6169 5.12766 18.8198 5.12703H20.7674C20.9707 5.12703 21.1656 5.2076 21.3095 5.35108C21.4534 5.49455 21.5346 5.68923 21.5352 5.89245V9.63002H18.0543V5.89245ZM18.6855 14.1754V10.4661H20.9017V14.1872C20.8885 14.4722 20.766 14.7412 20.5597 14.9383C20.3533 15.1354 20.0789 15.2453 19.7936 15.2453C19.5082 15.2453 19.2339 15.1354 19.0275 14.9383C18.8211 14.7412 18.6987 14.4722 18.6855 14.1872V14.1754ZM3.06165 12.5857V15.9771L0.824291 13.7397V10.3507L3.06165 12.5857ZM3.06165 17.1428V20.5342L0.824291 18.2969V14.9078L3.06165 17.1428ZM0.824291 19.4626L3.06165 21.7V25.0937L0.824291 22.8564V19.4626ZM3.88595 8.5184H6.62259V27.1709H3.88595V8.5184ZM9.68425 18.2992L7.44688 20.5366V17.1452L9.68425 14.9078V18.2992ZM9.68425 13.7421L7.44688 15.9794V12.5857L9.68425 10.3483V13.7421ZM7.44688 21.7024L9.68425 19.465V21.2549V22.8587L7.44688 25.0961V21.7024ZM9.56649 9.30972L7.44688 11.4293V8.52076H8.33005C8.58901 8.5207 8.84254 8.59503 9.06048 8.7349C9.27842 8.87476 9.4516 9.07428 9.55942 9.30972H9.56649ZM2.17848 8.52076H3.06165V11.4223L0.942047 9.30266C1.0514 9.06744 1.22612 8.86865 1.44536 8.73001C1.6646 8.59136 1.9191 8.51873 2.17848 8.52076V8.52076ZM0.824291 25.8191V24.0245L3.06165 26.2619V27.1733H2.17848C1.81952 27.1727 1.47544 27.0298 1.22161 26.776C0.967787 26.5222 0.824914 26.1781 0.824291 25.8191V25.8191ZM8.33005 27.1733H7.44688V26.2619L9.68425 24.0245V25.8191C9.68425 26.1783 9.54157 26.5227 9.28761 26.7767C9.03365 27.0306 8.68921 27.1733 8.33005 27.1733V27.1733ZM11.5895 20.1833L10.5085 20.6355V15.0586L11.5895 15.5108V20.1833ZM12.4138 16.686H17.5103C17.3262 17.0453 17.2301 17.4433 17.2301 17.847C17.2301 18.2508 17.3262 18.6488 17.5103 19.0081H12.4138V16.686ZM18.0543 17.847C18.0543 17.5028 18.1564 17.1663 18.3477 16.8801C18.5389 16.5939 18.8107 16.3708 19.1287 16.2391C19.4468 16.1073 19.7967 16.0729 20.1343 16.14C20.4719 16.2072 20.782 16.373 21.0254 16.6164C21.2688 16.8598 21.4346 17.1699 21.5018 17.5075C21.5689 17.8451 21.5344 18.195 21.4027 18.5131C21.271 18.8311 21.0479 19.1029 20.7617 19.2941C20.4755 19.4854 20.139 19.5875 19.7948 19.5875C19.3334 19.5868 18.891 19.4033 18.5648 19.077C18.2385 18.7508 18.055 18.3084 18.0543 17.847V17.847Z"
        fill={color}
      />
      <path
        d="M19.7947 16.6719C19.5618 16.6719 19.3342 16.7409 19.1405 16.8703C18.9469 16.9997 18.796 17.1836 18.7068 17.3988C18.6177 17.614 18.5944 17.8507 18.6398 18.0792C18.6853 18.3076 18.7974 18.5174 18.9621 18.6821C19.1268 18.8468 19.3366 18.9589 19.565 19.0044C19.7934 19.0498 20.0302 19.0265 20.2454 18.9374C20.4605 18.8482 20.6445 18.6973 20.7739 18.5037C20.9032 18.31 20.9723 18.0823 20.9723 17.8494C20.9723 17.5371 20.8482 17.2376 20.6274 17.0168C20.4066 16.7959 20.1071 16.6719 19.7947 16.6719V16.6719ZM19.7947 18.198C19.7253 18.198 19.6575 18.1774 19.5998 18.1389C19.5421 18.1003 19.4971 18.0455 19.4705 17.9814C19.444 17.9172 19.437 17.8467 19.4506 17.7786C19.4641 17.7106 19.4975 17.648 19.5466 17.5989C19.5957 17.5499 19.6582 17.5165 19.7263 17.5029C19.7944 17.4894 19.8649 17.4963 19.929 17.5229C19.9932 17.5494 20.048 17.5944 20.0865 17.6521C20.1251 17.7098 20.1457 17.7777 20.1457 17.8471C20.145 17.94 20.1079 18.0289 20.0422 18.0945C19.9765 18.1602 19.8876 18.1974 19.7947 18.198Z"
        fill={color}
      />
      <path
        d="M19.7947 3.73988C20.0276 3.73988 20.2553 3.67082 20.449 3.54143C20.6426 3.41204 20.7935 3.22813 20.8827 3.01296C20.9718 2.79779 20.9951 2.56102 20.9497 2.33259C20.9042 2.10417 20.7921 1.89435 20.6274 1.72967C20.4627 1.56498 20.2529 1.45283 20.0245 1.40739C19.7961 1.36196 19.5593 1.38528 19.3441 1.4744C19.1289 1.56353 18.945 1.71446 18.8156 1.90811C18.6862 2.10176 18.6172 2.32943 18.6172 2.56232C18.6172 2.87463 18.7413 3.17415 18.9621 3.39498C19.1829 3.61582 19.4824 3.73988 19.7947 3.73988V3.73988ZM19.7947 2.21141C19.8647 2.21141 19.9331 2.23219 19.9913 2.27112C20.0494 2.31004 20.0947 2.36535 20.1213 2.43004C20.148 2.49473 20.1549 2.56588 20.141 2.63447C20.1272 2.70306 20.0933 2.766 20.0437 2.81531C19.9941 2.86462 19.9309 2.89808 19.8622 2.91144C19.7935 2.92481 19.7224 2.91748 19.6579 2.89038C19.5934 2.86328 19.5384 2.81763 19.4999 2.75923C19.4613 2.70082 19.441 2.63229 19.4415 2.56232C19.4445 2.4709 19.4832 2.38429 19.5492 2.32095C19.6152 2.2576 19.7033 2.22252 19.7947 2.22319V2.21141Z"
        fill={color}
      />
    </svg>
  );
};

HandlingIcon.defaultProps = {
  width: "28",
  height: "28",
  color: "white",
};

export default HandlingIcon;
