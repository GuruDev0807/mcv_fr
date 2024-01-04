import styled from "styled-components";
import { Box } from "@mui/material";

const BackOpacity = ({ children, padding, border, borderRaidus }) => {
  return (
    <StyledComponent padding={padding}>
      <BackGradient border={border} borderRadius={borderRaidus}></BackGradient>
      <SectionMain>{children}</SectionMain>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
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
    rgba(0, 15, 68, 0.75) 14.94%,
    rgba(23, 90, 170, 0.2925) 46.56%,
    rgba(0, 15, 68, 0.75) 82.4%
  );
  mix-blend-mode: normal;
  opacity: 0.58;
  /* border: 1px solid #80c9ff; */
  z-index: 30;
`;

const SectionMain = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 31;
`;

export default BackOpacity;
