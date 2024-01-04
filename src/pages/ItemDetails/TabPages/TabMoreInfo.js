import styled from "styled-components";
import { Box } from "@mui/material";
import { dataMoreInfo } from "../../../Data/Property";
import BackOpacity from "../../../components/BackOpacity/BackOpacity";

const TabMoreInfo = () => {
  return (
    <StyledComponent>
      {dataMoreInfo.map((each, index) => {
        return (
          <SectionEachInfo key={index}>
            <BackOpacity
              padding={"17px 15px"}
              borderRaidus={"4px"}
              border={"1px solid rgba(255, 174, 0, 0.52)"}
            >
              <SectionContent>
                <TextTitle>{each.title}</TextTitle>
                <TextName>{each.name}</TextName>
                <TextValue>{each.detail}</TextValue>
              </SectionContent>
            </BackOpacity>
          </SectionEachInfo>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 35px;
  grid-column-gap: 30px;

  transition: 0.5s;
  @media (max-width: 12400px) {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 370px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SectionEachInfo = styled(Box)`
  display: flex;
  flex: 1;
  /* width: 100%; */
  box-sizing: border-box;
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
`;
const TextName = styled(Box)`
  font-family: "Josefin Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 13px;
  /* identical to box height, or 72% */

  color: #ffffff;

  text-shadow: 0px 0px 3px #0080ff;
  margin-top: 15px;
`;

const TextValue = styled(Box)`
  display: flex;
  height: 15px;
  align-items: center;
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
`;

export default TabMoreInfo;
