import styled from "styled-components";
import { Box } from "@mui/material";
import iconMcverse from "../assets/image/Icon/iconMcverse.png";
import iconCollectionAhill from "../assets/image/Icon/iconCollectionAhillwithBack.png";

const BannerImage = () => {
  const formatNumber = (number) => {
    return number.toLocaleString("en-US");
  };

  return (
    <StyledComponent>
      <SectionText>
        <SectionCollectionName>
          <TextCollectionName>
            Avalanche hills Muscle Car Club
          </TextCollectionName>
          <MarkP2E>P2E</MarkP2E>
        </SectionCollectionName>
        <SectionPrice>
          <IconAvax>
            <img src={iconMcverse} width={"100%"} height={"100%"} alt="" />
          </IconAvax>
          <TextPrice>422 MCV Floor Price</TextPrice>
        </SectionPrice>
        <TextDetails>
          Avalanche Hills is a Gamefi Metaverse featuring the Avax Muscle Cars
          NFT - 10,000 randomly-generated 3D NFTs you can customize, earn, play,
          and win with.
        </TextDetails>
      </SectionText>
      <SectionValue>
        <SectionUpValue>
          <ValueEach>
            <TextUpValue>Items</TextUpValue>
            <TextDownValue>{formatNumber(3491)}</TextDownValue>
          </ValueEach>
          <ValueEach>
            <TextUpValue>Owners</TextUpValue>
            <TextDownValue>{formatNumber(219)}</TextDownValue>
          </ValueEach>
        </SectionUpValue>
        <SectionDownValue>
          <ValueEach>
            <TextUpValue>Listings</TextUpValue>
            <TextDownValue>{formatNumber(10000)}</TextDownValue>
          </ValueEach>
          <ValueEach>
            <TextUpValue>Volume</TextUpValue>
            <TextDownValue mt={"3px"}>
              <IconAvax>
                <img src={iconMcverse} width={"100%"} height={"100%"} alt="" />
              </IconAvax>
              <Box display={"flex"} ml={"8px"}>
                {formatNumber(1232349)}
              </Box>
            </TextDownValue>
          </ValueEach>
        </SectionDownValue>
      </SectionValue>
      <IconCollection>
        <img src={iconCollectionAhill} alt="" />
      </IconCollection>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  align-items: flex-start;
  background: linear-gradient(
    180deg,
    rgba(255, 174, 0, 0.28) 0%,
    rgba(0, 15, 68, 0) 100%
  );
  padding: 38px 33px;
  box-sizing: border-box;

  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(90deg, transparent, #f0b62c, transparent) 1;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 100px;
    padding: 120px 20px 50px 20px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 500px) {
    margin-top: 80px;
    flex-direction: column;
    padding: 120px 10px 30px 10px;
  }
`;

const SectionText = styled(Box)`
  display: flex;
  flex: 3;
  flex-direction: column;
  transition: 0.5s;
  @media (max-width: 1400px) {
    flex: 0.8;
  }
`;

const SectionValue = styled(Box)`
  display: flex;
  flex: 2;
  box-sizing: border-box;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: row;
    align-items: flex-start;
    padding-left: 30px;
    margin-top: 18px;
  }
  @media (max-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    padding-left: unset;
    margin-top: 18px;
  }
  /* @media (max-width: 1024px) {
    padding-left: 0px;
    align-items: flex-start;
    margin-top: 30px;
  } */
`;

const ValueEach = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-right: 50px;

  transition: 0.5s;
  @media (max-width: 600px) {
    margin-right: 30px;
  }
  @media (max-width: 400px) {
    margin-right: 15px;
  }
  @media (max-width: 350px) {
    margin-right: 10px;
  }
`;

const TextUpValue = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* or 171% */

  color: #23d0ff;
  text-transform: uppercase;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

const SectionUpValue = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionDownValue = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 44px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 0px;
  }
  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const TextDownValue = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  /* or 117% */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 16px;
  }
  @media (max-width: 350px) {
    font-size: 14px;
  }
`;

const SectionCollectionName = styled.span`
  transition: 0.5s;
  @media (max-width: 1600px) {
    text-align: center;
  }
`;

const TextCollectionName = styled.span`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  /* identical to box height, or 0% */

  text-transform: capitalize;

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1024px) {
    text-align: center;
    font-size: 32px;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 21.3219px;
    line-height: 37px;
    /* or 175% */

    text-align: center;
    text-transform: capitalize;
  }
`;

const MarkP2E = styled.span`
  vertical-align: super;
  padding: 6px 12px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  margin-left: 12px;
  /* Caption 1 bold */

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  /* identical to box height, or 129% */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1024px) {
    padding: 5px 10px;
    font-size: 12px;
  }
  @media (max-width: 500px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

const IconCollection = styled(Box)`
  display: flex;
  position: absolute;
  width: 186px;
  height: 186px;
  right: 12px;
  top: 12px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
    height: 100%;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 220px;
    height: 220px;
    left: 50%;
    transform: translateX(-50%);
    top: -100px;
    > img {
      width: 170px;
      height: 166px;
    }
  }

  @media (max-width: 500px) {
    transform: translateX(-50%);
    top: -70px;
    width: 170px;
    height: 170px;
    > img {
      width: 135px;
      height: 131px;
    }
  }
`;

const SectionPrice = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 9px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    justify-content: center;
  }
`;

const IconAvax = styled(Box)`
  width: 28px;
  height: 28px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    width: 24px;
    height: 24px;
  }
  @media (max-width: 500px) {
    width: 18px;
    height: 18px;
  }
`;

const TextPrice = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  /* White */

  color: #ffffff;
  margin-left: 12px;

  transition: 0.5s;
  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

const TextDetails = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: flex-end;

  /* Surface */

  color: #f7f7f7;
  margin-top: 9px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    text-align: center;
  }
  @media (max-width: 1024px) {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;

    /* Surface */

    color: #f7f7f7;
  }
  @media (max-width: 500px) {
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    text-align: center;

    /* Surface */

    color: #f7f7f7;
  }
`;

export default BannerImage;
