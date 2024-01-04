import styled from "styled-components";
import { Box } from "@mui/material";

const ButtonSwitch = ({ flagClicked, setFlagClicked, color }) => {
  return (
    <StyledComponent
      clicked={flagClicked ? 1 : 0}
      bgcolor={flagClicked ? color : "#e5e5e5"}
    >
      <ButtonCircle
        onClick={() => setFlagClicked(!flagClicked)}
        bgcolor={flagClicked ? "#e5e5e5" : color}
      ></ButtonCircle>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 40px;
  justify-content: ${({ clicked }) => (clicked ? "flex-end" : "flex-start")};
  align-items: center;
  border-radius: 16px;
  padding: 3px;
  box-sizing: border-box;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 36px;
  }
  @media (max-width: 1023px) {
    width: 32px;
  }
  @media (max-width: 500px) {
    width: 28px;
  }
`;

const ButtonCircle = styled(Box)`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 14px;
    height: 14px;
  }
  @media (max-width: 1023px) {
    width: 13px;
    height: 13px;
  }
  @media (max-width: 500px) {
    width: 12px;
    height: 12px;
  }
`;

export default ButtonSwitch;
