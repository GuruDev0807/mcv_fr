import styled from "styled-components";
import { Box } from "@mui/material";
import iconCoin from "../../assets/image/Icon/iconMcverse.png";
import { useNavigate } from "react-router-dom";


const CartCollectionDetailView = ({ data }) => {
  const navigate = useNavigate();

  return (
    <StyledComponent>
      <BackGradient></BackGradient>
      <SectionImage>
        <img src={data.img} width={"100%"} height={"100%"} alt="" />

        <SectionImageHover>
          <ButtonBuyNow>BUY NOW</ButtonBuyNow>
          <ButtonAddToCart>ADD TO CART</ButtonAddToCart>
          <ButtonDetails
            onClick={() => {
              navigate("/itemdetails", {
                state: {
                  data: data,
                },
              });
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            DETAILS
          </ButtonDetails>
        </SectionImageHover>
      </SectionImage>
      <SectionDetails>
        <SectionPrice>
          <TextNumber>{data.number}</TextNumber>
          <SectionIconPrice>
            <IconCoin>
              <img src={iconCoin} width={"100%"} height={"100%"} alt="" />
            </IconCoin>
            <TextPrice>{data.price} MCV</TextPrice>
          </SectionIconPrice>
        </SectionPrice>
        <SectionOffer>
          <TextOffer>Top offer:{"\u00a0"}</TextOffer>
          <TextOfferPrice>{data.offer} MCV</TextOfferPrice>
        </SectionOffer>
      </SectionDetails>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  /* width: 240px; */
  /* height: 288px; */

  padding: 19px;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 14px;
  margin-bottom: 14px;

  cursor: pointer;

  &:hover {
    > div:nth-child(1) {
      border: 1px solid #ffae00;
      opacity: 1;
    }
    > div:nth-child(2) > div:nth-child(2) {
      opacity: 1;
    }
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    padding: 17px;
  }
  @media (max-width: 900px) {
    padding: 15px;
  }
  @media (max-width: 500px) {
    padding: 12px;
  }
  @media (max-width: 350px) {
    padding: 10px;
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
    rgba(0, 15, 68, 0.75) 14.94%,
    rgba(23, 90, 170, 0.2925) 46.56%,
    rgba(0, 50, 108, 1) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.58;
  border: 1px solid #80c9ff;
  border-radius: 4px;
  z-index: 30;
  transition: 0.3s;
`;

const SectionImage = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  z-index: 31;
  > img {
    /* border: 1px solid white; */
    border-radius: 4px;
    transition: 0.3s;
  }
`;

const SectionDetails = styled(Box)`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  width: 100%;
  z-index: 32;
`;

const SectionPrice = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionOffer = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const TextNumber = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* or 119% */

  color: #ffae00;
`;

const SectionIconPrice = styled(Box)`
  display: flex;
  align-items: center;
`;

const IconCoin = styled(Box)`
  width: 28px;
  margin-right: 5px;
`;

const TextPrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* or 119% */

  color: #23d0ff;
`;

const TextOffer = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 21px;
  /* or 214% */

  color: #ffffff;
`;

const TextOfferPrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 21px;
  /* or 214% */

  color: #55c3ff;
`;

const SectionImageHover = styled(Box)`
  display: flex;
  position: absolute;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  border-radius: 4px;
  border: 1px solid #80c9ff;

  opacity: 0;
  background: linear-gradient(
      0deg,
      rgba(0, 15, 68, 0.78),
      rgba(0, 15, 68, 0.78)
    ),
    url(lamboColosseum);
  transition: 0.5s;
`;

const ButtonBuyNow = styled(Box)`
  display: flex;
  width: 100%;
  height: 46px;
  background: #23d0ff;
  border-radius: 10px 0px;
  justify-content: center;
  align-items: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  /* Black */

  color: #000000;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #23d0ff;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    font-size: 15px;
    height: 38px;
  }
  @media (max-width: 1500px) {
    font-size: 13px;
    height: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 9px;
    height: 26px;
  }
  @media (max-width: 1300px) {
    font-size: 13px;
    height: 36px;
  }
  @media (max-width: 1200px) {
    font-size: 10px;
    height: 28px;
  }
  @media (max-width: 1100px) {
    font-size: 8px;
    height: 23px;
  }
  @media (max-width: 950px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    height: 36px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    height: 46px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 389px) {
    font-size: 21px;
    height: 52px;
  }
`;

const ButtonAddToCart = styled(Box)`
  display: flex;
  width: 100%;
  height: 46px;
  background: #23d0ff;
  border-radius: 10px 0px;
  justify-content: center;
  align-items: center;
  background: #ffae00;
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  /* Black */

  color: #000000;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #23d0ff;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    font-size: 15px;
    height: 38px;
  }
  @media (max-width: 1500px) {
    font-size: 13px;
    height: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 9px;
    height: 26px;
  }
  @media (max-width: 1300px) {
    font-size: 13px;
    height: 36px;
  }
  @media (max-width: 1200px) {
    font-size: 10px;
    height: 28px;
  }
  @media (max-width: 1100px) {
    font-size: 8px;
    height: 23px;
  }
  @media (max-width: 950px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    height: 36px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    height: 46px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 389px) {
    font-size: 21px;
    height: 52px;
  }
`;

const ButtonDetails = styled(Box)`
  display: flex;
  width: 100%;
  height: 42px;
  /* background: #23d0ff; */
  border-radius: 10px 0px;
  justify-content: center;
  align-items: center;
  border: 2px solid #23d0ff;
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  color: #23d0ff;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #23d0ff;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    font-size: 15px;
    height: 38px;
  }
  @media (max-width: 1500px) {
    font-size: 13px;
    height: 32px;
  }
  @media (max-width: 1400px) {
    font-size: 9px;
    height: 26px;
  }
  @media (max-width: 1300px) {
    font-size: 13px;
    height: 36px;
  }
  @media (max-width: 1200px) {
    font-size: 10px;
    height: 28px;
  }
  @media (max-width: 1100px) {
    font-size: 8px;
    height: 23px;
  }
  @media (max-width: 950px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
    height: 36px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
    height: 46px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    height: 30px;
  }
  @media (max-width: 389px) {
    font-size: 21px;
    height: 52px;
  }
`;

export default CartCollectionDetailView;
