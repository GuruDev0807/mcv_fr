import styled from "styled-components";
import { Box } from "@mui/material";

const CartProperty = ({ data }) => {
  return (
    <StyledComponent>
      <BackGradient />
      <SectionContent>
        <TextTitle>{data.title}</TextTitle>
        <TextName>{data.name}</TextName>
        <TextValue>{data.value}</TextValue>
      </SectionContent>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  padding: 17px 12px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 174, 0, 0.52);
  border-radius: 4px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 12px;
  }
`;

const BackGradient = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(
    146.5deg,
    rgba(0, 15, 68, 0.5) 14.94%,
    rgba(23, 90, 170, 0.195) 46.56%,
    rgba(0, 15, 68, 0.5) 82.4%
  );
  mix-blend-mode: normal;
  opacity: 0.58;
  z-index: 30;
`;

const SectionContent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  flex-direction: column;
  z-index: 31;
`;

const TextTitle = styled(Box)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  /* or 130% */

  letter-spacing: 1px;

  color: #00caff;

  text-shadow: 0px 0px 3px #0080ff;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-size: 8px;
  }
`;
const TextName = styled(Box)`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 72% */

  color: #ffffff;

  text-shadow: 0px 0px 3px #0080ff;
  margin-top: 15px;
  transition: 0.5s;
  @media (max-width: 900px) {
    margin-top: 5px;
    font-size: 14px;
  }
`;

const TextValue = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  /* or 130% */

  letter-spacing: 1px;

  color: #ffae00;

  text-shadow: 0px 0px 3px #0080ff;
  margin-top: 10px;

  transition: 0.5s;
  @media (max-width: 900px) {
    margin-top: 0px;
    font-size: 8px;
  }
`;

export default CartProperty;
