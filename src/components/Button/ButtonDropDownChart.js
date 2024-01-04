import styled from "styled-components";
import { Box } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useState, useRef } from "react";
import { useOutsideDetector } from "../../Hooks/useOutsideDetector";

const ButtonDropDownChart = ({ data }) => {
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
    >
      <TextDropHead>{textDropHead}</TextDropHead>
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
  width: fit-content;
  height: 40px;
  padding: 0px 16px;
  background: linear-gradient(
    146.5deg,
    rgba(0, 15, 68, 0.45) 14.94%,
    rgba(23, 90, 170, 0.1755) 46.56%,
    rgba(0, 15, 68, 0.45) 82.4%
  );
  /* Secondary */

  border: 1px solid #565660;
  border-radius: 100px;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  z-index: 100;
  cursor: pointer;
  white-space: nowrap;
`;

const TextDropHead = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  text-align: center;

  /* White */

  color: #ffffff;
  margin-right: 20px;
`;

const IconDown = styled(Box)`
  font-size: 1.5rem;
  color: white;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  flex-direction: column;
  width: max-content;
  height: fit-content;
  position: absolute;
  bottom: ${({ length }) => length * -30 - 40 - 10 + "px"};
  right: 0px;
  padding: 20px 50px 20px 20px;
  box-sizing: border-box;
  /* box-sizing: border-box; */
  background-color: #021223;

  border: 1px solid #565660;
  border-radius: 8px;
`;

const EachRowText = styled(Box)`
  height: 30px;
  width: fit-content;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 30px;
  /* identical to box height, or 157% */

  /* White */

  color: #ffffff;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px;
  }
`;

export default ButtonDropDownChart;
