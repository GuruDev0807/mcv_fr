import styled from "styled-components";
import { Box } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState, useRef } from "react";
import { useOutsideDetector } from "../../Hooks/useOutsideDetector";

const ButtonDropDown = ({ data, width, fontSize, lineHeight }) => {
  const [flagClickDown, setFlagClickDown] = useState(false);
  const refDropDown = useRef(0);
  const [textDropHead, setTextDropHead] = useState(data[0].name);
  useOutsideDetector([refDropDown], () => setFlagClickDown(false));

  return (
    <StyledComponent
      onClick={() => {
        setFlagClickDown(!flagClickDown);
      }}
      ref={refDropDown}
      width={width}
    >
      <TextDropHead fontSize={fontSize} lineHeight={lineHeight}>
        {textDropHead}
      </TextDropHead>
      <IconDown>
        {!flagClickDown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </IconDown>
      {!flagClickDown ? (
        <></>
      ) : (
        <SectionDropDown length={data.length}>
          {data.map((each, index) => {
            return (
              <EachRowText
                key={index}
                onClick={() => {
                  setTextDropHead(each.name);
                }}
                fontSize={fontSize}
                lineHeight={lineHeight}
              >
                {each.name}
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
  height: 40px;
  padding: 0px 16px;
  box-sizing: border-box;

  border-radius: 19px;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  z-index: 100;
  cursor: pointer;
  white-space: nowrap;
  border: 1px solid #ffffff;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffae00;
    > div:nth-child(2) {
      color: #ffae00;
    }
  }
`;

const TextDropHead = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  /* identical to box height, or 120% */

  color: #ffffff;

  text-shadow: 0px 0px 3px #ffcc0d;
  margin-right: 30px;
`;

const IconDown = styled(Box)`
  font-size: 1.5rem;
  color: white;
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
  border-radius: 19px;
  border: 1px solid #565660;
  /* background: linear-gradient(
    90deg,
    rgba(0, 163, 255, 0.3) 0%,
    rgba(0, 163, 255, 0.06) 100%
  ); */
  background-color: #021223;
  mix-blend-mode: normal;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffae00;
  }
`;

const EachRowText = styled(Box)`
  display: flex;
  align-items: center;
  height: 30px;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  /* identical to box height, or 120% */

  color: #ffffff;
  transition: 0.3s;
  &:hover {
    color: #ffae00;
  }
`;

export default ButtonDropDown;
