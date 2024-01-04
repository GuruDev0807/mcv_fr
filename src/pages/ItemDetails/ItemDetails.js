import { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import iconAvaxBlack from "../../assets/image/Icon/avaxBlack.png";
import BackOpacity from "../../components/BackOpacity/BackOpacity";
import { BsThreeDots, BsHeart, BsHeartFill } from "react-icons/bs";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { dataProperties } from "../../Data/Property";
import CartProperty from "../../components/Cart/CartProperty";
import Collapse from "@mui/material/Collapse";
import iconOwner from "../../assets/image/Icon/userProfile01.png";
import iconCollection from "../../assets/image/Icon/logoSuperCars01.png";
import iconCreator from "../../assets/image/Icon/creator01.png";
import iconMcverse from "../../assets/image/Icon/logo-prov-v-mcv.png";
import iconAvax from "../../assets/image/Icon/iconAvax01.png";
import iconTokenMcverse from "../../assets/image/Icon/logo-prov-v-mcv.png";
import TabOffer from "./TabPages/TabOffer";
import TabHistory from "./TabPages/TabHistory";
import TabMoreInfo from "./TabPages/TabMoreInfo";
import ButtonDropDownDuration from "../../components/Button/ButtonDropDownDuration";
import { dataDropDownDuration } from "../../Data/Filter";
import ButtonSwitch from "../../components/Button/ButtonSwitch";

const ItemDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dataCart = location.state?.data;

  const [valLike, setValLike] = useState(68);
  const [flagLike, setFlagLike] = useState(false);
  const [flagPropertyDown, setFlagPropertyDown] = useState(true);
  const [flagClickedTab, setFlagClickedTab] = useState(0);
  const [flagBuyNow, setFlagBuyNow] = useState(false);
  const [flagPaywith, setFlagPaywith] = useState(false);
  const [flagSelectToken, setFlagSelectToken] = useState(false);
  const [flagClickFixedAuction, setFlagClickFixedAuction] = useState(0);
  const [floorPrice, setFloorPrice] = useState("");
  const [flagChangePrice, setFlagChangePrice] = useState(false);
  const [flagChangeDate, setFlagChangeDate] = useState(false);
  const [flagButtonActive, setFlagButtonActive] = useState(false);

  return (
    <div className="mx-4 lg:ml-[13vw] lg:mr-[13vw] 2xl:mb-4 text-white mt-8 ">
      <StyledComponent>
        <SectionHeadText>
          <TextEachHeadText
            color="#FFFFFF"
            borderRight={"1px solid #707070"}
            mr={"20px"}
            pr={"20px"}
            fontWeight={"500"}
          >
            GAMING
          </TextEachHeadText>
          <TextEachHeadText
            color="#23D0FF"
            borderRight={"1px solid #707070"}
            mr={"20px"}
            pr={"20px"}
            fontWeight={"500"}
          >
            MCVERSE
          </TextEachHeadText>
          <TextEachHeadText
            color="#FFAE00"
            borderRight={"1px solid #707070"}
            mr={"20px"}
            pr={"20px"}
            fontWeight={"500"}
            onClick={() => {
              navigate("/marketplace");
            }}
          >
            GRANTSVILLE SUPERCARS
          </TextEachHeadText>
          <TextEachHeadText color="#FFFFFF" fontWeight={"800"}>
            MINT #1234
          </TextEachHeadText>
        </SectionHeadText>
        <MobileSectionHeadText>
          <TextEachHeadText
            color="#FFFFFF"
            borderRight={"1px solid #707070"}
            mr={"20px"}
            pr={"20px"}
            fontWeight={"500"}
          >
            ...
          </TextEachHeadText>
          <TextEachHeadText
            color="#FFAE00"
            // borderRight={"1px solid #707070"}
            mr={"20px"}
            pr={"20px"}
            fontWeight={"500"}
            onClick={() => {
              navigate("/marketplace");
            }}
          >
            GRANTSVILLE SUPERCARS
          </TextEachHeadText>
        </MobileSectionHeadText>
        <SectionContent>
          <SectionLeftContent>
            <BackOpacity
              padding={window.innerWidth > 1400 ? "20px" : "12px"}
              borderRaidus={"14px"}
              border={"1px solid #80c9ff"}
            >
              <SectionImage>
                <img
                  src={dataCart.img}
                  width={"100%"}
                  style={{
                    borderRadius: "10px",
                  }}
                  alt=""
                />
              </SectionImage>
              <SectionHeadTitle>
                <SectionTextHeadTitle>
                  <TextBigNFTNumber>#1234</TextBigNFTNumber>
                  {/* <SlashDashed></SlashDashed>
                  <TextOwnItem>You own this item.</TextOwnItem> */}
                </SectionTextHeadTitle>
                <SectionOption>
                  <ButtonLike
                    onClick={() => {
                      setFlagLike(!flagLike);
                      let temp;
                      if (flagLike === false) {
                        temp = valLike;
                        temp += 1;
                      } else {
                        temp = valLike;
                        temp -= 1;
                      }
                      setValLike(temp);
                    }}
                  >
                    <IconLike>
                      {!flagLike ? (
                        <BsHeart />
                      ) : (
                        <BsHeartFill color="#FF4141" />
                      )}
                    </IconLike>
                    <TextLike display={"flex"}>{valLike}</TextLike>
                  </ButtonLike>
                  <ButtonMore>
                    <BsThreeDots />
                  </ButtonMore>
                </SectionOption>
              </SectionHeadTitle>
              <SectionProperty>
                <SectionHeadProperty>
                  <TextProperty>
                    Properties{"\u00a0"}
                    {"\u00a0"}(8)
                  </TextProperty>
                  <ButtonPropertyDown
                    onClick={() => {
                      setFlagPropertyDown(!flagPropertyDown);
                    }}
                  >
                    {flagPropertyDown ? (
                      <MdOutlineKeyboardArrowUp />
                    ) : (
                      <MdOutlineKeyboardArrowDown />
                    )}
                  </ButtonPropertyDown>
                </SectionHeadProperty>
                <Collapse in={flagPropertyDown}>
                  <SectionContentProperty>
                    {dataProperties.map((each, index) => {
                      return <CartProperty data={each} key={index} />;
                    })}
                  </SectionContentProperty>
                </Collapse>
              </SectionProperty>
            </BackOpacity>
          </SectionLeftContent>
          <SectionRightContent>
            <BackOpacity
              padding={window.innerWidth > 1400 ? "26px 34px" : "18px 18px"}
              borderRaidus={"14px"}
              border={"1px solid #80c9ff"}
            >
              <SectionProfile>
                <SectionProfileOwner>
                  <TextProfileTitle>OWNER</TextProfileTitle>
                  <SectionProfileIconContent>
                    <IconProfile>
                      <img
                        src={iconOwner}
                        width={"100%"}
                        height={"100%"}
                        alt=""
                      />
                    </IconProfile>
                    <TextProfileIcon>LittleShark</TextProfileIcon>
                  </SectionProfileIconContent>
                </SectionProfileOwner>
                <SectionProfileCollection>
                  <TextProfileTitle>COLLECTION</TextProfileTitle>
                  <SectionProfileIconContent>
                    <IconProfile>
                      <img
                        src={iconCollection}
                        width={"100%"}
                        height={"100%"}
                        alt=""
                      />
                    </IconProfile>
                    <TextProfileIcon>Grantsville SuperCars</TextProfileIcon>
                  </SectionProfileIconContent>
                  <SectionProfileIconContent01>
                    <IconProfile></IconProfile>
                    <SectionTextItemsFloor>
                      <TextProfileIcon>
                        Items:{"\u00a0"}
                        <span style={{ color: "#55C3FF" }}>10,000</span>
                      </TextProfileIcon>
                      <TextProfileIcon>
                        Floor:{"\u00a0"}
                        <img
                          src={iconMcverse}
                          width={window.innerWidth > 1400 ? "14px" : "10px"}
                          height={window.innerWidth > 1400 ? "14px" : "10px"}
                          alt=""
                        />
                        {"\u00a0"}
                        <span style={{ color: "#55C3FF" }}>490</span>
                        {"\u00a0"}
                        {"\u00a0"}
                        <span style={{ color: "#55C3FF" }}>/</span>
                        {"\u00a0"}
                        {"\u00a0"}
                        <img
                          src={iconAvax}
                          width={window.innerWidth > 1400 ? "14px" : "10px"}
                          height={window.innerWidth > 1400 ? "14px" : "10px"}
                          alt=""
                        />
                        {"\u00a0"}
                        <span style={{ color: "#55C3FF" }}>54</span>
                      </TextProfileIcon>
                    </SectionTextItemsFloor>
                  </SectionProfileIconContent01>
                </SectionProfileCollection>
                <SectionProfileCreator>
                  <TextProfileTitle>CREATOR</TextProfileTitle>
                  <SectionProfileIconContent>
                    <IconProfile>
                      <img
                        src={iconCreator}
                        width={"100%"}
                        height={"100%"}
                        alt=""
                      />
                    </IconProfile>
                    <TextProfileIcon>MCVerse</TextProfileIcon>
                  </SectionProfileIconContent>
                </SectionProfileCreator>
              </SectionProfile>

              <SectionBuyNow>
                {!dataCart.flagOwner && dataCart.listed === 0 ? (
                  <SectionPriceBuy>
                    {!flagBuyNow ? (
                      <SectionFlagBuyNow>
                        <SetionPriceBuyUp>
                          <SectionPrice>
                            <SectionPriceLeft>
                              <TextPrice>Price</TextPrice>
                              <SectionPriceIcon>
                                <IconTokenMCV>
                                  <img src={iconTokenMcverse} alt="" />
                                </IconTokenMCV>
                                <TextPriceToken>500 MCV</TextPriceToken>
                                <TextPriceDollar>($25 USD)</TextPriceDollar>
                              </SectionPriceIcon>
                            </SectionPriceLeft>
                            <SectionPriceRight>
                              Listing expires in 15h 59m 37s
                            </SectionPriceRight>
                          </SectionPrice>
                          <SectionSelectToken>
                            <IconSelectedToken>
                              <img src={iconTokenMcverse} alt="" />
                            </IconSelectedToken>
                            <ButtonSelectTokenDown
                              onClick={() =>
                                setFlagSelectToken(!flagSelectToken)
                              }
                            >
                              {!flagSelectToken ? (
                                <MdOutlineKeyboardArrowDown />
                              ) : (
                                <MdOutlineKeyboardArrowUp />
                              )}
                            </ButtonSelectTokenDown>
                          </SectionSelectToken>
                        </SetionPriceBuyUp>
                        <SectionGroupButtons>
                          <ButtonBuyNow onClick={() => setFlagBuyNow(true)}>
                            BUY NOW
                          </ButtonBuyNow>
                          <ButtonAddToCart>ADD TO CART</ButtonAddToCart>
                        </SectionGroupButtons>
                      </SectionFlagBuyNow>
                    ) : (
                      <SectionFlagBuyNow>
                        <SetionChoosePayWith>
                          <SectionPayWithLeft
                            onClick={() => {
                              setFlagPaywith(false);
                            }}
                            active={!flagPaywith ? 1 : 0}
                          >
                            <TextPrice>Pay with</TextPrice>
                            <SectionPriceIcon>
                              <IconTokenMCV>
                                <img src={iconTokenMcverse} alt="" />
                              </IconTokenMCV>
                              <TextPriceToken>MCV</TextPriceToken>
                              <TextPriceDollar>
                                (Balance: 12,432 MCV)
                              </TextPriceDollar>
                            </SectionPriceIcon>
                          </SectionPayWithLeft>
                          <SectionPayWithRight
                            onClick={() => {
                              setFlagPaywith(true);
                            }}
                            active={flagPaywith ? 1 : 0}
                          >
                            <TextPrice>Pay with</TextPrice>
                            <SectionPriceIcon>
                              <IconTokenAvax>
                                <img src={iconAvax} alt="" />
                              </IconTokenAvax>
                              <TextPriceToken>Avax</TextPriceToken>
                              <TextPriceDollar>
                                (Balance: 22.44 Avax)
                              </TextPriceDollar>
                            </SectionPriceIcon>
                          </SectionPayWithRight>
                        </SetionChoosePayWith>
                        <SectionGroupButtons>
                          <ButtonChooseMCV>CHOOSE MCV</ButtonChooseMCV>
                        </SectionGroupButtons>
                      </SectionFlagBuyNow>
                    )}
                    <TextMakeAnOffer>
                      You can also{" "}
                      <span style={{ color: "#23D0FF" }}>make an offer</span>{" "}
                      for this item.
                    </TextMakeAnOffer>
                    <SectionTopOffer>
                      <SectionTopOfferLeft>
                        <TextTopOffer>Top Offer:</TextTopOffer>
                        <IconTokenMCV>
                          <img
                            src={iconTokenMcverse}
                            width={"100%"}
                            height={"100%"}
                            alt=""
                          />
                        </IconTokenMCV>
                        <TextPriceToken>400 MCV</TextPriceToken>
                        <TextPriceDollar>($21 USD)</TextPriceDollar>
                      </SectionTopOfferLeft>
                      <SectionTopOfferRight>
                        Offer expires in 15h 59m 37s
                      </SectionTopOfferRight>
                    </SectionTopOffer>
                  </SectionPriceBuy>
                ) : dataCart.listed === 1 ? (
                  <SectionOwnerPriceBuy>
                    <TextTopOwner>
                      List this item for a{" "}
                      <span style={{ color: "#23D0FF" }}>fixed price</span> or
                      start an <span style={{ color: "#FFAE00" }}>auction</span>
                      .
                    </TextTopOwner>
                    <SectionGroupButtons>
                      <ButtonFixedPrice
                        onClick={() => setFlagClickFixedAuction(1)}
                        clicked={flagClickFixedAuction === 1 ? 1 : 0}
                      >
                        FIXED PRICE
                      </ButtonFixedPrice>
                      <ButtonAuction
                        onClick={() => setFlagClickFixedAuction(2)}
                        clicked={flagClickFixedAuction === 2 ? 1 : 0}
                      >
                        AUCTION
                      </ButtonAuction>
                    </SectionGroupButtons>
                    {flagClickFixedAuction === 2 ? (
                      <TextBidsBelowAuction>
                        Bids below the start price will not be accepted.{" "}
                        <span style={{ color: "#FFAE00" }}>
                          Learn more about how auctions work.
                        </span>
                      </TextBidsBelowAuction>
                    ) : (
                      <></>
                    )}
                    {flagClickFixedAuction === 0 ? (
                      <></>
                    ) : (
                      <SectionShowPrice>
                        <TextSalePrice
                          color={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                        >
                          {flagClickFixedAuction === 1
                            ? "Sale Price"
                            : "Starting Bid Price"}
                        </TextSalePrice>
                        <InputButtonSalePrice>
                          <SectionInputSalePrice
                            border={
                              flagClickFixedAuction === 1
                                ? "1px solid #00caff"
                                : "1px solid #FFAE00"
                            }
                          >
                            <InputSalePrice
                              component={"input"}
                              type={"number"}
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setFlagButtonActive(true);
                                } else {
                                  setFlagButtonActive(false);
                                }

                                setFloorPrice(e.target.value);
                              }}
                            ></InputSalePrice>
                          </SectionInputSalePrice>
                          <ButtonSalePriceAvax
                            bgcolor={
                              flagClickFixedAuction === 1
                                ? "#00caff"
                                : "#FFAE00"
                            }
                          >
                            <IconSalePriceAvax>
                              <img src={iconAvaxBlack} width={"100%"} alt="" />
                            </IconSalePriceAvax>
                            <TextSalePriceAvax>AVAX</TextSalePriceAvax>
                          </ButtonSalePriceAvax>
                        </InputButtonSalePrice>
                        <TextFloor>
                          Floor:{" "}
                          <span
                            style={{
                              color:
                                flagClickFixedAuction === 1
                                  ? "#00CAFF"
                                  : "#FFAE00",
                            }}
                          >
                            {floorPrice} AVAX
                          </span>{" "}
                          (${floorPrice * 16.61})
                        </TextFloor>
                        <TextSalePrice
                          color={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                        >
                          Listing Duration
                        </TextSalePrice>
                        <SectionDropDownDuration>
                          <ButtonDropDownDuration
                            data={dataDropDownDuration}
                            color={
                              flagClickFixedAuction === 1
                                ? "#00caff"
                                : "#FFAE00"
                            }
                          />
                        </SectionDropDownDuration>
                        <TextSubjectFees>Fees</TextSubjectFees>
                        <SectionEachFee>
                          <TextFees>Creator Royalties (5%)</TextFees>
                          <TextFees>.20 AVAX</TextFees>
                        </SectionEachFee>
                        <SectionEachFee>
                          <TextFees>Platform (2.5%)</TextFees>
                          <TextFees>.10 AVAX</TextFees>
                        </SectionEachFee>
                        <ButtonSetSalePrice
                          bgcolor={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                          active={flagButtonActive ? 1 : 0}
                        >
                          SET SALE PRICE
                        </ButtonSetSalePrice>
                      </SectionShowPrice>
                    )}
                  </SectionOwnerPriceBuy>
                ) : (
                  <SectionOwnerPriceBuy>
                    <TextTopOwner>
                      This item is listed as a{" "}
                      <span
                        style={{
                          color: !dataCart.fixed ? "#23D0FF" : "#FFAE00",
                        }}
                      >
                        {!dataCart.fixed ? "fixed price." : "auction."}
                      </span>{" "}
                      You may change the current price below.
                    </TextTopOwner>
                    <SectionGroupButtons>
                      <ButtonFixedPrice clicked={!dataCart.fixed ? 1 : 0}>
                        FIXED PRICE
                      </ButtonFixedPrice>
                      <ButtonAuction clicked={dataCart.fixed ? 1 : 0}>
                        AUCTION
                      </ButtonAuction>
                    </SectionGroupButtons>
                    <SectionListedDetails
                      borderBottom={
                        !dataCart.fixed
                          ? "1px dashed #00caff"
                          : "1px dashed #ffae00"
                      }
                    >
                      <SectionListedDetailsLeft>
                        <TextListedNumber
                          color={!dataCart.fixed ? "#00caff" : "#ffae00"}
                        >
                          {dataCart.number}
                        </TextListedNumber>
                        <TextExpires>Expires in 12 days</TextExpires>
                      </SectionListedDetailsLeft>
                      <SectionListedDetailsRight>
                        <TextListingPrice>Listing Price</TextListingPrice>
                        <TextListedAvaxPrice>5.4 AVAX</TextListedAvaxPrice>
                        <TextListedDollarPirce>$86.99</TextListedDollarPirce>
                      </SectionListedDetailsRight>
                    </SectionListedDetails>
                    <SectionChangePrice>
                      <SectionChangeUp>
                        <TextChangeSubject>Change Price</TextChangeSubject>
                        <ButtonSwitch
                          flagClicked={flagChangePrice}
                          setFlagClicked={setFlagChangePrice}
                          color={!dataCart.fixed ? "#00caff" : "#FFAE00"}
                        />
                      </SectionChangeUp>
                      <TextChangeDescription>
                        If you want to increase the price of your listing,
                        please cancel all of your existing listings first.
                      </TextChangeDescription>
                      <Collapse in={flagChangePrice}>
                        <InputButtonSalePrice>
                          <SectionInputSalePrice
                            border={
                              !dataCart.fixed
                                ? "1px solid #00caff"
                                : "1px solid #FFAE00"
                            }
                          >
                            <InputSalePrice
                              component={"input"}
                              type={"number"}
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setFlagButtonActive(true);
                                } else {
                                  setFlagButtonActive(false);
                                }

                                setFloorPrice(e.target.value);
                              }}
                            ></InputSalePrice>
                          </SectionInputSalePrice>
                          <ButtonSalePriceAvax
                            bgcolor={!dataCart.fixed ? "#00caff" : "#FFAE00"}
                          >
                            <IconSalePriceAvax>
                              <img src={iconAvaxBlack} width={"100%"} alt="" />
                            </IconSalePriceAvax>
                            <TextSalePriceAvax>AVAX</TextSalePriceAvax>
                          </ButtonSalePriceAvax>
                        </InputButtonSalePrice>
                        <TextFloor>
                          Floor:{" "}
                          <span
                            style={{
                              color: !dataCart.fixed ? "#00CAFF" : "#FFAE00",
                            }}
                          >
                            {floorPrice} AVAX
                          </span>{" "}
                          (${floorPrice * 16.61})
                        </TextFloor>
                      </Collapse>
                    </SectionChangePrice>
                    <SectionChangeDate>
                      <SectionChangeUp>
                        <TextChangeSubject>Change Date</TextChangeSubject>
                        <ButtonSwitch
                          flagClicked={flagChangeDate}
                          setFlagClicked={setFlagChangeDate}
                          color={!dataCart.fixed ? "#00caff" : "#FFAE00"}
                        />
                      </SectionChangeUp>
                      <TextChangeDescription>
                        If you would like to continue using the previous
                        expiration date, please skip this section.
                      </TextChangeDescription>
                      <Collapse in={flagChangeDate}>
                        <SectionDropDownDuration>
                          <ButtonDropDownDuration
                            data={dataDropDownDuration}
                            color={!dataCart.fixed ? "#00caff" : "#FFAE00"}
                          />
                        </SectionDropDownDuration>
                      </Collapse>
                    </SectionChangeDate>
                    {flagChangePrice || flagChangeDate ? (
                      <>
                        <TextSubjectFees>Fees</TextSubjectFees>
                        <SectionEachFee>
                          <TextFees>Creator Royalties (5%)</TextFees>
                          <TextFees>.20 AVAX</TextFees>
                        </SectionEachFee>
                        <SectionEachFee>
                          <TextFees>Platform (2.5%)</TextFees>
                          <TextFees>.10 AVAX</TextFees>
                        </SectionEachFee>
                        <ButtonSetSalePrice
                          bgcolor={!dataCart.fixed ? "#00caff" : "#FFAE00"}
                          active={flagButtonActive ? 1 : 0}
                        >
                          SET SALE PRICE
                        </ButtonSetSalePrice>
                      </>
                    ) : (
                      <></>
                    )}
                    {flagClickFixedAuction === 2 ? (
                      <TextBidsBelowAuction>
                        Bids below the start price will not be accepted.{" "}
                        <span style={{ color: "#FFAE00" }}>
                          Learn more about how auctions work.
                        </span>
                      </TextBidsBelowAuction>
                    ) : (
                      <></>
                    )}
                    {flagClickFixedAuction === 0 ? (
                      <></>
                    ) : (
                      <SectionShowPrice>
                        <TextSalePrice
                          color={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                        >
                          {flagClickFixedAuction === 1
                            ? "Sale Price"
                            : "Starting Bid Price"}
                        </TextSalePrice>
                        <InputButtonSalePrice>
                          <SectionInputSalePrice
                            border={
                              flagClickFixedAuction === 1
                                ? "1px solid #00caff"
                                : "1px solid #FFAE00"
                            }
                          >
                            <InputSalePrice
                              component={"input"}
                              type={"number"}
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setFlagButtonActive(true);
                                } else {
                                  setFlagButtonActive(false);
                                }

                                setFloorPrice(e.target.value);
                              }}
                            ></InputSalePrice>
                          </SectionInputSalePrice>
                          <ButtonSalePriceAvax
                            bgcolor={
                              flagClickFixedAuction === 1
                                ? "#00caff"
                                : "#FFAE00"
                            }
                          >
                            <IconSalePriceAvax>
                              <img src={iconAvaxBlack} width={"100%"} alt="" />
                            </IconSalePriceAvax>
                            <TextSalePriceAvax>AVAX</TextSalePriceAvax>
                          </ButtonSalePriceAvax>
                        </InputButtonSalePrice>
                        <TextFloor>
                          Floor:{" "}
                          <span
                            style={{
                              color:
                                flagClickFixedAuction === 1
                                  ? "#00CAFF"
                                  : "#FFAE00",
                            }}
                          >
                            {floorPrice} AVAX
                          </span>{" "}
                          (${floorPrice * 16.61})
                        </TextFloor>
                        <TextSalePrice
                          color={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                        >
                          Listing Duration
                        </TextSalePrice>
                        <SectionDropDownDuration>
                          <ButtonDropDownDuration
                            data={dataDropDownDuration}
                            color={
                              flagClickFixedAuction === 1
                                ? "#00caff"
                                : "#FFAE00"
                            }
                          />
                        </SectionDropDownDuration>
                        <TextSubjectFees>Fees</TextSubjectFees>
                        <SectionEachFee>
                          <TextFees>Creator Royalties (5%)</TextFees>
                          <TextFees>.20 AVAX</TextFees>
                        </SectionEachFee>
                        <SectionEachFee>
                          <TextFees>Platform (2.5%)</TextFees>
                          <TextFees>.10 AVAX</TextFees>
                        </SectionEachFee>
                        <ButtonSetSalePrice
                          bgcolor={
                            flagClickFixedAuction === 1 ? "#00caff" : "#FFAE00"
                          }
                          active={flagButtonActive ? 1 : 0}
                        >
                          SET SALE PRICE
                        </ButtonSetSalePrice>
                      </SectionShowPrice>
                    )}
                  </SectionOwnerPriceBuy>
                )}
              </SectionBuyNow>
            </BackOpacity>
            <SectionDescription>
              <TextDescriptionTitle>Description:</TextDescriptionTitle>
              <TextDescriptionContent>
                Grantsville Super Cars are 10,000 randomly-generated 3D NFTs
                with utility that allows you to play, race, win, and earn
                crypto.
              </TextDescriptionContent>
            </SectionDescription>
            <SectionTab>
              <SectionTabButtons>
                <TabEach
                  active={flagClickedTab === 0 ? 1 : 0}
                  onClick={() => {
                    setFlagClickedTab(0);
                  }}
                >
                  OFFERS
                </TabEach>
                <TabEach
                  active={flagClickedTab === 1 ? 1 : 0}
                  onClick={() => {
                    setFlagClickedTab(1);
                  }}
                >
                  HISTORY
                </TabEach>
                <TabEach
                  active={flagClickedTab === 2 ? 1 : 0}
                  onClick={() => {
                    setFlagClickedTab(2);
                  }}
                >
                  MORE INFO
                </TabEach>
              </SectionTabButtons>
              <SectionTabContent>
                <BackOpacity
                  padding={window.innerWidth > 1400 ? "32px" : "24px 12px"}
                  border={"1px solid #80c9ff"}
                  borderRaidus={"14px"}
                >
                  {flagClickedTab === 0 ? (
                    <TabOffer />
                  ) : flagClickedTab === 1 ? (
                    <TabHistory />
                  ) : (
                    <TabMoreInfo />
                  )}
                </BackOpacity>
              </SectionTabContent>
            </SectionTab>
          </SectionRightContent>
        </SectionContent>
      </StyledComponent>
    </div>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const SectionHeadText = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  padding-bottom: 26px;
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, transparent, #f0b62c, transparent) 1;
  transition: 0.5s;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MobileSectionHeadText = styled(Box)`
  display: none;
  width: 100%;
  align-items: center;
  padding-bottom: 26px;
  border-bottom: 1px solid;
  border-image: linear-gradient(90deg, transparent, #f0b62c, transparent) 1;

  transition: 0.5s;
  @media (max-width: 700px) {
    display: flex;
  }
`;

const TextEachHeadText = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 12px;
  line-height: 13px;
  /* identical to box height, or 108% */

  letter-spacing: 1px;
  cursor: pointer;
  user-select: none;
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 26px;
  align-items: flex-start;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const SectionLeftContent = styled(Box)`
  display: flex;
  flex: 550;
  width: 100%;
  margin-right: 44px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-right: 36px;
  }
  @media (max-width: 1400px) {
    margin-right: 24px;
  }
  @media (max-width: 1200px) {
    margin-right: 16px;
  }
  @media (max-width: 700px) {
    margin-right: 0px;
  }
`;

const SectionRightContent = styled(Box)`
  display: flex;
  flex: 700;
  width: 100%;
  flex-direction: column;
  margin-bottom: 50px;
  transition: 0.5s;
  @media (max-width: 700px) {
    margin-top: 14px;
  }
`;

const SectionImage = styled(Box)`
  display: flex;
  width: 100%;
`;

const SectionHeadTitle = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
  padding-bottom: 18px;
  border-bottom: 1px dashed #ffffff;
`;

const SectionTextHeadTitle = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionOption = styled(Box)`
  display: flex;
  align-items: center;
`;

const TextBigNFTNumber = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 21px;
  /* identical to box height, or 54% */

  letter-spacing: 1px;

  color: #ffae00;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 300;
    font-size: 24px;
    line-height: 14px;
    /* identical to box height, or 58% */

    letter-spacing: 0.653285px;
  }
`;

// const TextOwnItem = styled(Box)`
//   font-family: "Montserrat";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 21px;
//   /* identical to box height, or 178% */

//   color: #ffae00;
// `;

// const SlashDashed = styled(Box)`
//   display: flex;
//   width: 1px;
//   height: 10px;
//   padding: 0px 15px 0px 20px;
//   border-top: 1px dashed #ffae00;
//   transform: rotate(-75deg);
// `;

const ButtonLike = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(0, 163, 255, 0.3) 0%,
    rgba(0, 163, 255, 0.06) 100%
  );
  mix-blend-mode: normal;
  /* Light blue */

  border: 1px solid #33d4ff;
  border-radius: 23px;
  margin-right: 6px;
  cursor: pointer;
  user-select: none;
  transition: 0.5s;
  @media (max-width: 1200px) {
    width: 60px;
    height: 28px;
  }
`;

const ButtonMore = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(0, 163, 255, 0.3) 0%,
    rgba(0, 163, 255, 0.06) 100%
  );
  mix-blend-mode: normal;
  /* Light blue */

  border: 1px solid #33d4ff;
  font-family: "Material Icons Outlined";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  /* identical to box height */

  text-align: center;
  border-radius: 100%;

  /* White */

  color: #ffffff;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  transition: 0.5s;
  @media (max-width: 1200px) {
    width: 28px;
    height: 28px;
    font-size: 0.8rem;
  }
`;

const SectionProperty = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionHeadProperty = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

const TextProperty = styled(Box)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* or 119% */

  color: #21d0ff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
  }
`;

const ButtonPropertyDown = styled(Box)`
  display: flex;
  color: #23d0ff;
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
`;

const SectionContentProperty = styled(Box)`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
  margin-top: 18px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SectionProfile = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  transition: 0.5s;
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

const SectionProfileOwner = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const SectionProfileCollection = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 370px) {
    margin-top: 15px;
  }
`;

const SectionProfileCreator = styled(Box)`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-right: 30px;

  transition: 0.5s;
  @media (max-width: 370px) {
    margin-top: 15px;
  }
`;

const TextProfileTitle = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 13px;
  /* or 130% */

  letter-spacing: 1px;

  color: #00caff;

  text-shadow: 0px 0px 3px #0080ff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 500;
    font-size: 8px;
    line-height: 7px;
    /* identical to box height, or 83% */

    letter-spacing: 0.511429px;
  }
`;

const SectionProfileIconContent = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SectionProfileIconContent01 = styled(Box)`
  display: flex;
`;

const IconProfile = styled(Box)`
  display: flex;
  width: 31px;
  height: 31px;
  min-width: 31px;
  min-height: 31px;
  margin-right: 10px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
  }
  @media (max-width: 1200px) {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    margin-right: 5px;
  }
`;

const TextProfileIcon = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 153% */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;
  }
`;

const SectionTextItemsFloor = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SectionPriceBuy = styled(Box)`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  margin-top: 16px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    #010101 0%,
    rgba(1, 1, 1, 0.817708) 46.88%,
    rgba(1, 1, 1, 0) 100%
  );
  border: 1px solid #33d4ff;
  border-radius: 14px;
  /* border: 1px solid;
  border-image: linear-gradient(to right, #00b4db, #0083b0) 1 1 / 1px 1px 0px
    1px stretch !important; */

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 18px;
  }
  @media (max-width: 1200px) {
    padding: 12px;
  }
`;

const SectionOwnerPriceBuy = styled(Box)`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  margin-top: 16px;
  box-sizing: border-box;
  background: linear-gradient(
    180deg,
    #010101 0%,
    rgba(1, 1, 1, 0.817708) 46.88%,
    rgba(1, 1, 1, 0) 100%
  );
  border: 1px solid #33d4ff;
  border-radius: 14px;
  /* border: 1px solid;
  border-image: linear-gradient(to right, #00b4db, #0083b0) 1 1 / 1px 1px 0px
    1px stretch !important; */
  transition: 0.5s;
  @media (max-width: 1600px) {
    padding: 20px;
  }
  @media (max-width: 1400px) {
    padding: 18px;
  }
  @media (max-width: 1200px) {
    padding: 12px;
  }
`;

const SetionPriceBuyUp = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  /* transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
  } */
`;

const SectionPrice = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  background: rgba(21, 31, 53, 0.6);
  border: 1px solid #80c9ff;
  border-radius: 8px;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
  }
  @media (max-width: 1200px) {
    padding: 10px;
  }
`;

const SectionPayWithLeft = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  background: rgba(21, 31, 53, 0.6);
  border: 1px solid #80c9ff;
  border-radius: 8px;
  margin-right: 20px;

  cursor: pointer;
  user-select: none;
  transition: 0.5s;
  opacity: ${({ active }) => (active ? "1" : "0.3")};

  @media (max-width: 1600px) {
    margin-right: unset;
  }
`;

const SectionPayWithRight = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  background: rgba(21, 31, 53, 0.6);
  border: 1px solid #80c9ff;
  border-radius: 8px;

  cursor: pointer;
  user-select: none;
  transition: 0.5s;
  opacity: ${({ active }) => (active ? "1" : "0.3")};
`;

const SectionPriceLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SectionPriceRight = styled(Box)`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #ffae00;
  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 10px;
  }
  @media (max-width: 1200px) {
    font-size: 12px;
    margin-top: 5px;
  }
  @media (max-width: 370px) {
    font-size: 10px;
  }
`;

const TextPrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const SectionPriceIcon = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const IconTokenMCV = styled(Box)`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  background: #ffffff10;
  mix-blend-mode: normal;
  border-radius: 100%;
  > img {
    width: 28px;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 28px;
    height: 28px;
    > img {
      width: 20px;
    }
  }
`;

const IconTokenAvax = styled(Box)`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  background: #ffffff10;
  mix-blend-mode: normal;
  border-radius: 100%;
  > img {
    width: 22px;
  }
`;

const TextPriceToken = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;
  margin-right: 5px;
  margin-left: 10px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const TextPriceDollar = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;

const SectionSelectToken = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 24px;

  transition: 0.5s;
  @media (max-width: 370px) {
    margin-left: 5px;
  }
`;

const IconSelectedToken = styled(Box)`
  display: flex;
  width: 44px;
  height: 44px;
  background: linear-gradient(
    90deg,
    rgba(0, 163, 255, 0.3) 0%,
    rgba(0, 163, 255, 0.06) 100%
  );
  mix-blend-mode: normal;
  /* Light blue */

  border: 1px solid #33d4ff;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  > img {
    width: 34px;
    height: 34px;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 32px;
    height: 32px;
    > img {
      width: 24px;
      height: 24px;
    }
  }

  @media (max-width: 370px) {
    width: 28px;
    height: 28px;
    > img {
      width: 20px;
      height: 20px;
    }
  }
`;

const ButtonSelectTokenDown = styled(Box)`
  color: white;
  font-size: 2rem;
  margin-left: 5px;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    margin-left: 0px;
    font-size: 1.2rem;
  }
`;

const SectionGroupButtons = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 28px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 14px;
  }
`;

const ButtonBuyNow = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 58px;
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
  margin-right: 20px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #23d0ff;
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 43px;
  }
`;

const ButtonAddToCart = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 58px;
  border-radius: 10px 0px;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffae00;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  color: #ffae00;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #ffae00;
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 43px;
    margin-top: 18px;
  }
`;

const TextMakeAnOffer = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;
  margin-top: 28px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;

const SectionTopOffer = styled(Box)`
  display: flex;
  margin-top: 28px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: unset;
  }

  @media (max-width: 1200px) {
    margin-top: 16px;
  }
`;

const SectionTopOfferLeft = styled(Box)`
  display: flex;
  align-items: center;
`;

const SectionTopOfferRight = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #23d0ff;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const TextTopOffer = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #23d0ff;
  margin-right: 10px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
  }
`;

const SectionDescription = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 40px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    margin-top: 24px;
  }
`;

const TextDescriptionTitle = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* or 119% */

  color: #21d0ff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 500;
    font-size: 12px;
    line-height: 11px;
  }
`;

const TextDescriptionContent = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 153% */

  color: #ffffff;
  margin-top: 10px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
`;

const SectionTab = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;
`;

const SectionTabButtons = styled(Box)`
  display: flex;
  width: 100%;

  transition: 0.5s;
  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

const TabEach = styled(Box)`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 8px 16px;
  box-sizing: border-box;
  border-radius: 25px;
  background-color: ${({ active }) =>
    active ? "rgba(0, 163, 255, 0.2)" : "unset"};

  font-family: "Montserrat";
  font-style: normal;
  font-weight: ${({ active }) => (active ? "700" : "500")};
  font-size: ${({ active }) => (active ? "14px" : "12px")};
  line-height: 14px;
  /* or 103% */

  text-align: center;
  letter-spacing: 2.73px;

  color: ${({ active }) => (active ? "#23d0ff" : "#FFFFFF")};
  margin-right: 30px;
  cursor: pointer;
  user-select: none;

  /* transition: 0.3s; */
  &:hover {
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    padding: 6px 12px;
  }

  @media (max-width: 900px) {
    margin-right: 15px;
  }

  @media (max-width: 500px) {
    margin-right: unset;
    font-weight: ${({ active }) => (active ? "700" : "500")};
    font-size: ${({ active }) => (active ? "12px" : "10px")};
    letter-spacing: unset;
  }
`;

const SectionTabContent = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 26px;
`;

const SectionBuyNow = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const ButtonChooseMCV = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 58px;
  align-items: center;
  justify-content: center;
  border: 2px solid #ffffff;
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  color: #ffffff;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px;
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 43px;
  }
`;

const SectionFlagBuyNow = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TextTopOwner = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;

  transition: 0.5s;

  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
  @media (max-width: 370px) {
    font-size: 9px;
  }
`;

const ButtonFixedPrice = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 58px;
  min-height: 58px;
  border: 2px solid #23d0ff;
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
  opacity: ${({ clicked }) => (clicked ? "1" : "0.5")};
  background-color: ${({ clicked }) => (clicked ? "#23d0ff" : "unset")};
  color: ${({ clicked }) => (clicked ? "#000F44" : "#23d0ff")};
  margin-right: 20px;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #23d0ff;
  }

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 43px;
  }
`;

const ButtonAuction = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 58px;
  border-radius: 10px 0px;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffae00;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  opacity: ${({ clicked }) => (clicked ? "1" : "0.5")};
  background-color: ${({ clicked }) => (clicked ? "#ffae00" : "unset")};
  color: ${({ clicked }) => (clicked ? "#000F44" : "#ffae00")};

  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #ffae00;
  }
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 43px;
    margin-top: 18px;
  }
`;

const TextSalePrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Blus shd */

  text-shadow: 0px 0px 3px #0080ff;

  margin-top: 24px;

  transition: 0.5s;

  @media (max-width: 1200px) {
    font-size: 12px;
  }
  @media (max-width: 900px) {
    font-size: 11px;
  }
  @media (max-width: 400px) {
    font-size: 10px;
  }
  @media (max-width: 370px) {
    font-size: 9px;
  }
`;

const InputButtonSalePrice = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 10px;
`;
const SectionInputSalePrice = styled(Box)`
  display: flex;
  flex: 1;
  align-items: center;
  width: 100%;
  min-height: 58px;
  border-radius: 0px 0px 0px 14px;
  padding: 10px;
  box-sizing: border-box;

  transition: 0.5s;
  @media (max-width: 1200px) {
    min-height: 43px;
  }
`;

const InputSalePrice = styled(Box)`
  display: flex;
  background-color: unset;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  border: none;
  outline: none;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 21px;
  color: white;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 16px;
    line-height: 13px;
  }
`;

const ButtonSalePriceAvax = styled(Box)`
  display: flex;
  width: 80px;
  min-height: 58px;
  border-radius: 0px 14px 0px 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  transition: 0.5s;
  @media (max-width: 1200px) {
    width: 60px;
    min-height: 43px;
  }
`;

const IconSalePriceAvax = styled(Box)`
  display: flex;
  width: 16px;
  margin-right: 5px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    width: 12px;
    margin-right: 3px;
  }
`;

const TextSalePriceAvax = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Dark text */

  color: #00242e;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const TextFloor = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Secondary */

  color: #808080;
  margin-top: 10px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const SectionDropDownDuration = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 10px;
`;

const TextSubjectFees = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* White */

  color: #ffffff;
  margin-top: 24px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const SectionEachFee = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`;

const TextFees = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* White */

  color: #ffffff;

  /* Blus shd */

  text-shadow: 0px 0px 3px #0080ff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 12px;
  }
`;

const ButtonSetSalePrice = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 60px;
  margin-top: 18px;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => (active ? "1" : "0.4")};
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  color: #000f44;

  cursor: ${({ active }) => (active ? "pointer" : "unset")};

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 13px;
    min-height: 45px;
  }
`;

const SectionShowPrice = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TextBidsBelowAuction = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 21px;
  /* or 178% */

  color: #ffffff;
  margin-top: 14px;
`;

const SectionListedDetails = styled(Box)`
  display: flex;
  margin-top: 46px;
  justify-content: space-between;
  padding-bottom: 18px;
  box-sizing: border-box;
  transition: 0.5s;
  @media (max-width: 1200px) {
    margin-top: 24px;
  }
`;

const SectionListedDetailsLeft = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const SectionListedDetailsRight = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const TextListedNumber = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 21px;
  /* identical to box height, or 89% */

  letter-spacing: 1px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 20px;
  }
`;

const TextExpires = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Secondary */

  color: #808080;
  margin-top: 8px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const TextListingPrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Secondary */

  color: #808080;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const TextListedAvaxPrice = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height, or 119% */

  /* Text blue */

  color: #00caff;
  margin-top: 2px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 16px;
  }
`;

const TextListedDollarPirce = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 153% */

  /* Secondary */

  color: #808080;
  margin-top: 2px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const SectionChangePrice = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.3);
`;

const SectionChangeDate = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;
  padding-bottom: 16px;
  box-sizing: border-box;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.3);
`;

const SectionChangeUp = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const TextChangeSubject = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 134% */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 14px;
    line-height: 13px;
  }
`;

const TextChangeDescription = styled(Box)`
  width: 80%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 153% */

  /* White */

  color: #ffffff;
  margin-top: 4px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 12px;
    line-height: 13px;
  }
`;

const IconLike = styled(Box)`
  display: flex;
  margin-right: 5px;
  font-size: 1rem;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

const TextLike = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 9.14599px;
    line-height: 14px;
  }
`;

const SetionChoosePayWith = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
    > div:nth-child(2) {
      margin-top: 12px;
    }
  }
`;

export default ItemDetails;
