import styled from "styled-components";
import { Box } from "@mui/material";
import { dataOffersDetails } from "../../../Data/Property";
import iconMcverse from "../../../assets/image/Icon/iconMcverse.png";
import iconAvax from "../../../assets/image/Icon/icon-avax.png";
import { shortAddress } from "../../../functions/functions";

const TabOffer = () => {
  return (
    <StyledComponent>
      {dataOffersDetails.map((each, index) => {
        return (
          <SectionEachOffer
            key={index}
            marginTop={index === 0 ? "unset" : "20px"}
            borderBottom={
              index === dataOffersDetails.length - 1
                ? "unset"
                : "1px dashed #ffae00"
            }
            paddingBottom={
              index === dataOffersDetails.length - 1 ? "unset" : "20px"
            }
          >
            <SectionEachOfferColumn>
              <TextBidderAddress>
                {shortAddress(each.addressBidder)}
              </TextBidderAddress>
              <TextOfferDown>BIDDER</TextOfferDown>
            </SectionEachOfferColumn>
            <SectionEachOfferColumn>
              <SectionOfferPirce>
                <IconPriceType>
                  <img
                    src={each.priceType === "mcverse" ? iconMcverse : iconAvax}
                    width={"100%"}
                    alt=""
                  />
                </IconPriceType>
                <TextBidderAddress>{each.priceValue}</TextBidderAddress>
              </SectionOfferPirce>
              <TextOfferDown>{each.belowFloor}% BELOW FLOOR</TextOfferDown>
            </SectionEachOfferColumn>
            <SectionEachOfferColumn>
              <TextBidderAddress>{each.timeAgo} minutes ago</TextBidderAddress>
              <TextOfferDown>EXPIRES IN {each.timeExpires} HOURS</TextOfferDown>
            </SectionEachOfferColumn>
          </SectionEachOffer>
        );
      })}
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionEachOffer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const SectionEachOfferColumn = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextBidderAddress = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 153% */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TextOfferDown = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  /* or 130% */

  letter-spacing: 1px;

  color: #ffae00;

  text-shadow: 0px 0px 3px #0080ff;
  margin-top: 5px;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-size: 8px;
  }
  @media (max-width: 500px) {
    font-size: 7px;
  }
`;

const SectionOfferPirce = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconPriceType = styled(Box)`
  width: 16px;
  margin-right: 5px;
`;

export default TabOffer;
