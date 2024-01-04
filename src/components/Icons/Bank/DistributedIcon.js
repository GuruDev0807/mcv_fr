import React from "react";

const DistributedIcon = ({ width, height, color }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.0486 26.3427L24.7861 24.0802C26.4888 22.2102 27.3959 19.8701 27.5075 17.4994H29.3204C29.5501 18.5652 30.4997 19.3667 31.6333 19.3667C32.9382 19.3667 34 18.3049 34 17C34 15.6951 32.9382 14.6333 31.6333 14.6333C30.4997 14.6333 29.5501 15.4348 29.3204 16.5006H27.5075C27.3959 14.1299 26.4888 11.7898 24.7861 9.91977L27.0486 7.6573C27.7452 8.1952 28.5839 8.46547 29.4226 8.46547C30.4187 8.46547 31.4148 8.08629 32.1732 7.32793C32.9076 6.59281 33.3127 5.61664 33.3127 4.57738C33.3127 3.53813 32.9083 2.56129 32.1732 1.82684C31.4387 1.09238 30.4619 0.687305 29.4226 0.687305C28.3834 0.687305 27.4065 1.09172 26.6721 1.82684C25.2749 3.22402 25.166 5.42738 26.3427 6.95141L24.0802 9.21387C22.2102 7.51121 19.8701 6.6041 17.4994 6.49254V4.67965C18.5652 4.44988 19.3667 3.50027 19.3667 2.36672C19.3667 1.06184 18.3055 0 17 0C15.6945 0 14.6333 1.06184 14.6333 2.36672C14.6333 3.50027 15.4348 4.44988 16.5006 4.67965V6.49254C14.1299 6.6041 11.7898 7.51121 9.91977 9.21387L7.6573 6.95141C8.83402 5.42672 8.72512 3.22336 7.32793 1.82684C6.59348 1.09238 5.61664 0.687305 4.57738 0.687305C3.53813 0.687305 2.56129 1.09172 1.82684 1.82684C1.09238 2.56129 0.687305 3.53813 0.687305 4.57738C0.687305 5.61664 1.09172 6.59348 1.82684 7.32793C2.5852 8.08629 3.58129 8.46547 4.57738 8.46547C5.41609 8.46547 6.2548 8.1952 6.95141 7.6573L9.21387 9.91977C7.51121 11.7898 6.6041 14.1299 6.49254 16.5006H4.67965C4.44988 15.4348 3.50027 14.6333 2.36672 14.6333C1.06184 14.6333 0 15.6951 0 17C0 18.3049 1.06184 19.3667 2.36672 19.3667C3.50027 19.3667 4.44988 18.5652 4.67965 17.4994H6.49254C6.6041 19.8701 7.51121 22.2102 9.21387 24.0802L6.95141 26.3427C6.18109 25.7484 5.21422 25.4608 4.23074 25.5485C4.10523 25.5598 3.97973 25.577 3.85621 25.6003C3.58527 25.6514 3.4073 25.9124 3.45777 26.1827C3.50891 26.4536 3.76988 26.6322 4.04016 26.5811C4.1318 26.5638 4.22543 26.5512 4.31906 26.5426C5.17438 26.4655 6.01441 26.771 6.62203 27.378C7.74961 28.5055 7.74961 30.3404 6.62203 31.4673C6.07617 32.0138 5.34969 32.3146 4.57738 32.3146C3.80508 32.3146 3.07859 32.0138 2.53273 31.4673C1.98621 30.9214 1.68605 30.1949 1.68605 29.4226C1.68605 28.6503 1.98687 27.9238 2.53273 27.378C2.72797 27.1834 2.72797 26.8673 2.53273 26.6721C2.3375 26.4775 2.02207 26.4775 1.82684 26.6721C1.09238 27.4072 0.687305 28.3834 0.687305 29.4226C0.687305 30.4619 1.09172 31.4387 1.82684 32.1732C2.56129 32.9083 3.53813 33.3127 4.57738 33.3127C5.61664 33.3127 6.59348 32.9083 7.32793 32.1732C8.72512 30.776 8.83402 28.5726 7.6573 27.0486L9.91977 24.7861C11.7605 26.4629 14.0887 27.4059 16.5006 27.5174V29.3204C15.4348 29.5501 14.6333 30.4997 14.6333 31.6333C14.6333 32.9382 15.6951 34 17 34C18.3049 34 19.3667 32.9382 19.3667 31.6333C19.3667 30.4997 18.5652 29.5501 17.4994 29.3204V27.5161C18.4078 27.4716 19.3209 27.3096 20.2161 27.0234C20.4784 26.939 20.6231 26.6588 20.5395 26.3958C20.4551 26.1335 20.1749 25.9888 19.9119 26.0724C16.4953 27.1655 12.7991 26.2703 10.2644 23.7362C6.55031 20.0221 6.55031 13.9792 10.2644 10.2644C13.9785 6.55031 20.0221 6.55031 23.7362 10.2644C27.4504 13.9785 27.4504 20.0215 23.7362 23.7362C23.1134 24.3591 22.4114 24.8911 21.6504 25.3167C21.41 25.4515 21.3244 25.7557 21.4585 25.9961C21.5933 26.2364 21.8975 26.3228 22.1379 26.188C22.8345 25.7982 23.4852 25.3267 24.0796 24.7855L26.3427 27.0486C25.166 28.5726 25.2749 30.7766 26.6721 32.1732C27.4072 32.9076 28.3834 33.3127 29.4226 33.3127C30.4619 33.3127 31.4387 32.9083 32.1732 32.1732C32.9083 31.4387 33.3127 30.4619 33.3127 29.4226C33.3127 28.3834 32.9083 27.4065 32.1732 26.6721C30.776 25.2755 28.5726 25.166 27.0479 26.3427H27.0486ZM18.3686 31.6339C18.3686 32.3883 17.755 33.0026 17 33.0026C16.245 33.0026 15.6314 32.389 15.6314 31.6339C15.6314 30.8789 16.245 30.2653 17 30.2653C17.755 30.2653 18.3686 30.8789 18.3686 31.6339ZM2.36672 18.3686C1.61234 18.3686 0.998086 17.755 0.998086 17C0.998086 16.245 1.61234 15.6314 2.36672 15.6314C3.12109 15.6314 3.73535 16.245 3.73535 17C3.73535 17.755 3.12176 18.3686 2.36672 18.3686ZM27.378 2.53273C27.9245 1.98621 28.6503 1.68539 29.4226 1.68539C30.1949 1.68539 30.9214 1.98621 31.4673 2.53273C32.0138 3.07859 32.3139 3.80508 32.3139 4.57738C32.3139 5.34969 32.0131 6.07617 31.4666 6.62203C30.9028 7.18582 30.1624 7.46805 29.422 7.46805C28.6815 7.46805 27.9411 7.18582 27.3773 6.6227C26.2497 5.49512 26.2497 3.66031 27.3773 2.53273H27.378ZM15.632 2.36672C15.632 1.61234 16.2456 0.998086 17.0007 0.998086C17.7557 0.998086 18.3693 1.61234 18.3693 2.36672C18.3693 3.12109 17.7557 3.73535 17.0007 3.73535C16.2456 3.73535 15.632 3.12109 15.632 2.36672ZM2.53273 6.62203C1.98621 6.07617 1.68539 5.34969 1.68539 4.57738C1.68539 3.80508 1.98621 3.07859 2.53273 2.53273C3.07859 1.98621 3.80508 1.68605 4.57738 1.68605C5.34969 1.68605 6.07617 1.98687 6.62203 2.53273C7.74961 3.66031 7.74961 5.49512 6.62203 6.62203C6.05824 7.18582 5.31781 7.46805 4.57738 7.46738C3.83695 7.46738 3.09586 7.18516 2.53273 6.62203ZM31.6333 15.6314C32.3877 15.6314 33.0019 16.245 33.0019 17C33.0019 17.755 32.3883 18.3686 31.6333 18.3686C30.8782 18.3686 30.2646 17.755 30.2646 17C30.2646 16.245 30.8782 15.6314 31.6333 15.6314ZM31.4673 31.4673C30.9214 32.0138 30.1949 32.3139 29.4226 32.3139C28.6503 32.3139 27.9238 32.0131 27.378 31.4666C26.2504 30.339 26.2504 28.5042 27.378 27.3773C27.9418 26.8135 28.6822 26.532 29.4226 26.532C30.163 26.532 30.9035 26.8142 31.4673 27.3773C32.0138 27.9238 32.3146 28.6496 32.3146 29.422C32.3146 30.1943 32.0138 30.9207 31.4673 31.4666V31.4673Z"
      fill={color}
    />
    <path
      d="M13.2766 11.1257C13.509 10.9776 13.5781 10.6695 13.43 10.4371C13.2819 10.2047 12.9738 10.1356 12.7414 10.2837C10.4284 11.7526 9.04785 14.2634 9.04785 17C9.04785 21.3848 12.6152 24.9515 16.9993 24.9515C21.3835 24.9515 24.9508 21.3841 24.9508 17C24.9508 12.6159 21.3835 9.04852 16.9993 9.04852C16.1932 9.04852 15.3976 9.16872 14.6346 9.40645C14.3716 9.48813 14.2242 9.7677 14.3066 10.0313C14.3882 10.2943 14.6678 10.4417 14.9314 10.3594C15.5982 10.1522 16.2934 10.0466 16.9993 10.0466C20.8336 10.0466 23.9527 13.1657 23.9527 17C23.9527 20.8343 20.8336 23.9534 16.9993 23.9534C13.165 23.9534 10.0459 20.8343 10.0459 17C10.0459 14.6067 11.2539 12.4107 13.2766 11.1257Z"
      fill={color}
    />
    <path
      d="M17.0748 21.7633L12.6694 13.6804H17.0456C17.3491 13.6804 17.5948 13.9261 17.5948 14.2295C17.5948 14.533 17.3491 14.7787 17.0456 14.7787H14.5188L17.0164 19.3607L19.6102 13.9905C19.7424 13.7175 20.0704 13.6027 20.3433 13.7348C20.6163 13.867 20.7305 14.195 20.599 14.4679L17.0748 21.7633Z"
      fill={color}
    />
  </svg>
);

DistributedIcon.defaultProps = {
  width: "34",
  height: "34",
  color: "white",
};

export default DistributedIcon;
