import styled from "styled-components";
import { Box } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState, useRef } from "react";
import { useOutsideDetector } from "../../Hooks/useOutsideDetector";

const ButtonDropDownDuration = ({ data, color }) => {
  const [flagClickDown, setFlagClickDown] = useState(false);
  const refDropDown = useRef(0);
  const [textDropHead, setTextDropHead] = useState(data[0]);
  useOutsideDetector([refDropDown], () => setFlagClickDown(false));

  return (
    <StyledComponent
      onClick={() => {
        setFlagClickDown(!flagClickDown);
      }}
      ref={refDropDown}
      border={`1px solid ${color}`}
    >
      <TextDropHead>{textDropHead} Days</TextDropHead>
      <IconDown color={color}>
        {!flagClickDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </IconDown>
      {!flagClickDown ? (
        <></>
      ) : (
        <SectionDropDown length={data.length} border={`1px solid ${color}`}>
          {data.map((each, index) => {
            return (
              <EachRowText
                key={index}
                onClick={() => {
                  setTextDropHead(each);
                }}
                sx={{ "&:hover": { color: color } }}
              >
                {each} days
              </EachRowText>
            );
          })}
        </SectionDropDown>
      )}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  min-height: 58px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 0px 14px;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  z-index: 100;
  transition: 0.3s;
  cursor: pointer;
  transition: 0.5s;
  @media (max-width: 1200px) {
    min-height: 43px;
  }
`;

const TextDropHead = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* White */

  color: #ffffff;
  margin-right: 30px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const IconDown = styled(Box)`
  font-size: 1.5rem;
  transition: 0.3s;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: ${({ length }) => length * -30 - 30 + "px"};
  right: 0px;
  padding: 10px 16px;
  box-sizing: border-box;
  border-radius: 14px;
  background-color: #021223;
  transition: 0.3s;
  cursor: pointer;
`;

const EachRowText = styled(Box)`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* White */

  color: #ffffff;

  transition: 0.3s;
`;

export default ButtonDropDownDuration;
