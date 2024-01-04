import styled from "styled-components";
import { Box } from "@mui/material";
import { useState } from "react";

const ButtonGraphTab = ({ data }) => {
  const [flagActive, setFlagActive] = useState(0);

  return (
    <StyledComponent>
      {data?.map((each, index) => {
        return (
          <ButtonEach
            key={index}
            active={flagActive === index + 1 ? 1 : 0}
            onClick={() => {
              setFlagActive(index + 1);
            }}
          >
            {each}
          </ButtonEach>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 55px;
  border: 0.5px solid #565660;
  border-radius: 100px;
  align-items: center;
  padding: 0px 10px;
  box-sizing: border-box;
  transition: 0.5s;
  @media (max-width: 900px) {
    height: 30px;
    padding: 0px 8px;
  }
`;

const ButtonEach = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 0px 16px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ active }) => (active ? "#00CAFF" : "white")};
  border: ${({ active }) =>
    active ? "1px solid #00CAFF" : "1px solid rgba(0,0,0,0)"};
  border-radius: 40px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  @media (max-width: 900px) {
    height: 20px;
    padding: 0px 8px;
  }
  @media (max-width: 600px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
  }
`;

export default ButtonGraphTab;
