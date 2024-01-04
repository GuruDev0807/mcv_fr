import styled from "styled-components";
import { Box } from "@mui/material";

const InputSellerProfile = ({ placeHolder }) => {
  return (
    <StyledComponent>
      <SectionInput component="input" placeholder={placeHolder}></SectionInput>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 64px;
  border: 1.1px solid #00caff;
  border-radius: 0px 15.4px;
  padding: 0px 16px;
  box-sizing: border-box;
  align-items: center;
  input::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 131% */

    /* Text blue */

    color: #00caff;

    opacity: 0.5;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 56px;
  }
  @media (max-width: 1023px) {
    height: 48px;
    input::placeholder {
      font-size: 12px;
    }
  }
  @media (max-width: 700px) {
    height: 40px;
  }
  @media (max-width: 500px) {
    height: 36px;
    input::placeholder {
      font-size: 8px;
    }
  }
`;

const SectionInput = styled(Box)`
  display: flex;
  width: 100%;
  outline: none;
  background-color: unset;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 1023px) {
    font-size: 14px;
  }
  @media (max-width: 700px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 8px;
  }
`;

export default InputSellerProfile;
