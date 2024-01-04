import styled from "styled-components";
import { Box } from "@mui/material";

const ButtonFilterShow = ({
  data,
  flagButtonShow,
  index,
  setFlagButtonShow,
}) => {
  return (
    <StyledComponent
      active={flagButtonShow === index ? 1 : 0}
      onClick={() => {
        setFlagButtonShow(index);
      }}
    >
      {data}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 85px;
  height: 30px;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  /* or 120% */

  text-align: center;
  border-radius: 25px;
  border: ${({ active }) =>
    active ? "1px solid #ffffff" : "1px solid #ffffff"};
  background-color: ${({ active }) => (active ? "#FFFFFF" : "unset")};
  color: ${({ active }) => (active ? "#000f44" : "#ffffff")};

  margin-left: 18px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    border: ${({ active }) =>
      active ? "1px solid #FFFFFF" : "1px solid #ffae00"};
  }
`;

export default ButtonFilterShow;
