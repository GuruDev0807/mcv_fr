import { useState, useRef } from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import InputSellerProfile from "../../components/Input/InputSellerProfile";
import { dataTypeDigitalArt } from "../../Data/DigitalArt";
import ButtonSelectedDigitalArts from "../../components/Button/ButtonSelectedDigitalArts";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ButtonSwitch from "../../components/Button/ButtonSwitch";
import { dataPaymentMode } from "../../Data/Payment";
import Collapse from "@mui/material/Collapse";
import imgUpload from "../../assets/image/Icon/upload.png";
import { dataSelectBannerColor } from "../../Data/Color";
import BannerImage from "../../components/BannerImage";

const CreateCollectionDetails = () => {
  const dataSingleItems = ["1 per wallet", "WL Only"];
  const dataRequirementMint = [
    "Must be on discord",
    "Must have NFT from another project.",
  ];
  const [step, setStep] = useState(0);
  const [textSelectedDigitalArts, setTextSelectedDigitalArts] = useState([]);
  const [flagPremium, setFlagPremium] = useState(true);
  const [flagSelectPayment, setFlagSelectPayment] = useState(0);
  const [valueRoyalty, setValueRoyalty] = useState(1);
  const [valueMint, setValueMint] = useState(1);
  const [flagDropdownSingle, setFlagDropdownSingle] = useState(false);
  const [flagDropdownMint, setFlagDropdownMint] = useState(false);
  const [textSelectMint, setTextSelectedMint] = useState([]);

  const chooseFileRef = useRef();
  const [chooseFileURL, setChooseFileURL] = useState();
  const [selectedBannerColor, setSelectedBannerColor] = useState();
  const handleSelectFileClick = () => {
    chooseFileRef.current.click();
  };
  const handleSelectFileChange = async (e) => {
    setChooseFileURL(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="mx-4 mt-8 md:ml-[13vw] md:mr-0 2xl:mb-4 text-white">
      <div className="relative pb-4 mb-10 md:pb-20 md:mb-24 2xl:pb-12 2xl:mb-12 callout-bg">
        <StyledComponent>
          <TextSubject>COLECTION DETAILS</TextSubject>
          {step === 0 ? (
            <SectionContent01>
              <TextDescription>
                Please define your collection name, price, royalties, mints,
                parameters
              </TextDescription>
              <SectionPremium>
                <TextPremium>
                  Placement on mainpage{" "}
                  <span style={{ color: "#00CAFF" }}>(Premium)</span>
                </TextPremium>
                <ButtonSwitch
                  flagClicked={flagPremium}
                  setFlagClicked={setFlagPremium}
                  color={"#00caff"}
                />
              </SectionPremium>
              <SectionPremiumDown>
                <SectionModePayment>
                  <TextSelectModePayment>
                    Select mode of payment
                  </TextSelectModePayment>
                  {dataPaymentMode.map((each, index) => {
                    return (
                      <SectionEachPayment
                        key={index}
                        onClick={() => {
                          setFlagSelectPayment(index + 1);
                        }}
                        active={flagSelectPayment === index + 1 ? 1 : 0}
                      >
                        <TextPaymentName>{each.name}</TextPaymentName>
                        <ImgPaymentIcon>
                          <img
                            src={each.icon}
                            width={"100%"}
                            height={"100%"}
                            alt=""
                          />
                        </ImgPaymentIcon>
                      </SectionEachPayment>
                    );
                  })}
                </SectionModePayment>
                <SectionSelectDigitalArt>
                  <TextHeader>
                    What kind of digital art do you create and what tools or
                    platforms do you use?
                  </TextHeader>
                  <InputSelectedArt
                    flagheight={textSelectedDigitalArts?.length !== 0 ? 1 : 0}
                  >
                    {textSelectedDigitalArts?.map((each, index) => {
                      return (
                        <ButtonSelectedDigitalArts
                          key={index}
                          data={each}
                          index={index}
                          textSelectedDigitalArts={textSelectedDigitalArts}
                          setTextSelectedDigitalArts={
                            setTextSelectedDigitalArts
                          }
                        ></ButtonSelectedDigitalArts>
                      );
                    })}
                  </InputSelectedArt>
                  <SectionDigitalArtType>
                    {dataTypeDigitalArt.map((each, index) => {
                      return (
                        <TextEachDigialArt
                          key={index}
                          onClick={() => {
                            let tempText = [...textSelectedDigitalArts];
                            //   if (!tempText.includes(each)) {
                            //     tempText.push(each);
                            //   } else {
                            //     return;
                            //   }
                            tempText.push(each);
                            setTextSelectedDigitalArts(tempText);
                          }}
                        >
                          {each}
                        </TextEachDigialArt>
                      );
                    })}
                  </SectionDigitalArtType>
                </SectionSelectDigitalArt>
              </SectionPremiumDown>
            </SectionContent01>
          ) : step === 1 ? (
            <SectionContent01>
              <TextDescription>
                Please define your collection network, name and symbol.
              </TextDescription>
              <TextStartingBidDescription>
                Set item price or starting bid
              </TextStartingBidDescription>
              <InputSellerProfile placeHolder={"e.g. 0,01 Eth"} />
              <SectionSetRoyalty>
                <TextSubject02>Select royalties amount, %</TextSubject02>
                <SectionMinusPlus>
                  <SectionMinus
                    onClick={() => {
                      let temp = valueRoyalty;
                      temp--;
                      if (temp < 0) {
                        temp = 0;
                      }
                      setValueRoyalty(temp);
                    }}
                  >
                    -
                  </SectionMinus>
                  <SectionInputNumber>{valueRoyalty}</SectionInputNumber>
                  <SectionPlus
                    onClick={() => {
                      let temp = valueRoyalty;
                      temp++;
                      setValueRoyalty(temp);
                    }}
                  >
                    +
                  </SectionPlus>
                </SectionMinusPlus>
              </SectionSetRoyalty>
              <SectionSetRoyalty>
                <TextSubject02>Total Mints</TextSubject02>
                <SectionMinusPlus>
                  <SectionMinus
                    onClick={() => {
                      let temp = valueMint;
                      temp--;
                      if (temp < 0) {
                        temp = 0;
                      }
                      setValueMint(temp);
                    }}
                  >
                    -
                  </SectionMinus>
                  <SectionInputNumber>{valueMint}</SectionInputNumber>
                  <SectionPlus
                    onClick={() => {
                      let temp = valueMint;
                      temp++;
                      setValueMint(temp);
                    }}
                  >
                    +
                  </SectionPlus>
                </SectionMinusPlus>
              </SectionSetRoyalty>
              <TextDescription>Parameters</TextDescription>
              <SectionDropDownParameters
                onClick={() => {
                  setFlagDropdownSingle(!flagDropdownSingle);
                }}
              >
                <TextSingleItems>Single Items</TextSingleItems>
                <ButtonDown>
                  <MdKeyboardArrowDown />
                </ButtonDown>
              </SectionDropDownParameters>
              <Collapse in={flagDropdownSingle}>
                <SectionDropDownContent>
                  {dataSingleItems.map((each, index) => {
                    return (
                      <SectionRowDropItems
                        key={index}
                        borderBottom={
                          index === 0 ? "1px solid #00CAFF" : "unset"
                        }
                        onClick={() => {
                          setFlagDropdownSingle(false);
                        }}
                      >
                        {each}
                      </SectionRowDropItems>
                    );
                  })}
                </SectionDropDownContent>
              </Collapse>
            </SectionContent01>
          ) : step === 2 ? (
            <SectionContent02>
              <SectionLeft>
                <TextStartingBidDescription>
                  Set item price or starting bid
                </TextStartingBidDescription>
                <InputSellerProfile placeHolder={"e.g. 0,01 Eth"} />
                <SectionPresaleTimeline>
                  <TextSubject02>Presale timeline</TextSubject02>
                  <TextSet>Set</TextSet>
                </SectionPresaleTimeline>
                <SectionPresaleTimeline>
                  <TextSubject02>When does mint start ?</TextSubject02>
                  <TextSet>Set</TextSet>
                </SectionPresaleTimeline>
                <TextStartingBidDescription>
                  Requirement for the mint
                </TextStartingBidDescription>
                <SectionDropDownMint>
                  {textSelectMint?.map((each, index) => {
                    return (
                      <ButtonSelectedDigitalArts
                        key={index}
                        data={each}
                        index={index}
                        textSelectedDigitalArts={textSelectMint}
                        setTextSelectedDigitalArts={setTextSelectedMint}
                      ></ButtonSelectedDigitalArts>
                    );
                  })}
                  <ButtonDownMint
                    onClick={() => {
                      setFlagDropdownMint(!flagDropdownMint);
                    }}
                  >
                    <MdKeyboardArrowDown />
                  </ButtonDownMint>
                </SectionDropDownMint>
                <Collapse in={flagDropdownMint}>
                  <SectionDropDownContent>
                    {dataRequirementMint.map((each, index) => {
                      return (
                        <SectionRowDropMint
                          key={index}
                          borderBottom={
                            index === 0 ? "1px solid #00CAFF" : "unset"
                          }
                          onClick={() => {
                            let tempText = [...textSelectMint];
                            if (!tempText.includes(each)) {
                              tempText.push(each);
                            } else {
                              return;
                            }
                            setTextSelectedMint(tempText);
                          }}
                        >
                          {each}
                        </SectionRowDropMint>
                      );
                    })}
                  </SectionDropDownContent>
                </Collapse>
              </SectionLeft>
              <SectionRight>
                <SectionRightUp>
                  <SectionImageSelect>
                    <TextImageDescription>Image</TextImageDescription>
                    <SelectImageBox01
                      choosefile={chooseFileURL}
                      onClick={handleSelectFileClick}
                    >
                      <input
                        type="file"
                        ref={chooseFileRef}
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={(e) => {
                          handleSelectFileChange(e);
                        }}
                      />
                      <SectionChooseImg>
                        <img src={imgUpload} width={"100%"} alt="" />
                      </SectionChooseImg>
                      <TextUpload01>Click or Drag your Image</TextUpload01>
                      <TextUpload02>
                        PNG, GIF, WebP, MP4 or MP3. Maximum file size 100 Mb.
                      </TextUpload02>
                    </SelectImageBox01>
                  </SectionImageSelect>
                  <SectionColorSelect>
                    <TextImageDescription>Banner Color</TextImageDescription>
                    <TextPickColor>Pick a color for the banner</TextPickColor>
                    <SectionBannerColors>
                      {dataSelectBannerColor.map((each, index) => {
                        return (
                          <SectionEachColor
                            key={index}
                            bgcolor={each}
                            active={selectedBannerColor === index ? 1 : 0}
                            onClick={() => {
                              setSelectedBannerColor(index);
                            }}
                          ></SectionEachColor>
                        );
                      })}
                    </SectionBannerColors>
                  </SectionColorSelect>
                </SectionRightUp>
                <SectionRightDown>
                  <TextImageDescription>Description</TextImageDescription>
                  <SectionInputDescription
                    component={"textarea"}
                    placeholder="Tell us about your collection"
                    multiple
                    rows="5"
                  ></SectionInputDescription>
                </SectionRightDown>
              </SectionRight>
            </SectionContent02>
          ) : (
            <SectionContent01>
              <TextDescription02>
                Please review the below information to endure it's correct. As a
                reminder, your collection network, name, symbol and royalty
                percentage cannot be changed after your contract has been
                created. Once your contract has been created, you can start
                adding NFT's.
              </TextDescription02>
              <TextPreview>Preview</TextPreview>
              <BannerImage></BannerImage>
              <SectionButtonEdit>
                <ButtonEdit>Edit</ButtonEdit>
              </SectionButtonEdit>
              <SectionButtonGroupFinal>
                <ButtonPreviousLast>Save as draft</ButtonPreviousLast>
                <ButtonCompleteProfile>Create Now</ButtonCompleteProfile>
              </SectionButtonGroupFinal>
            </SectionContent01>
          )}
        </StyledComponent>
        {step === 3 ? (
          <></>
        ) : (
          <SectionButtonGroup>
            <ButtonPrevious
              onClick={() => {
                let temp = step;
                temp--;
                if (temp < 0) {
                  temp = 0;
                  return setStep(temp);
                } else {
                  return setStep(temp);
                }
              }}
            >
              Previous
            </ButtonPrevious>
            <ButtonNext
              onClick={() => {
                let temp = step;
                temp++;
                if (temp > 3) {
                  temp = 3;
                }
                return setStep(temp);
              }}
            >
              Next
            </ButtonNext>
          </SectionButtonGroup>
        )}
        <SectionPageStep>
          <CircularProgressbar
            value={(step + 1) * 25}
            text={step + 1}
            styles={{
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `#FFAE00`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Customize transition animation
                transition: "stroke-dashoffset 0.5s ease 0s",
                // Rotate the path

                transformOrigin: "center center",
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: "rgba(0,0,0,0)",
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
                // Rotate the trail
                transformOrigin: "center center",
              },
              // Customize the text
              text: {
                // Text color
                fontFamily: "Montserrat",
                fill: "white",
                // Text size
                fontSize: "50px",
                fontWeight: "600",
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: "red",
              },
            }}
          />
        </SectionPageStep>
      </div>
    </div>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 65px 60px;
  box-sizing: border-box;
  flex-direction: column;

  @media (max-width: 767px) {
    padding: 65px 0px;
  }
`;

const TextSubject = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  /* identical to box height, or 45% */

  text-align: center;
  letter-spacing: 2.73px;

  color: #ffae00;

  text-shadow: 0px 0px 5px rgba(0, 163, 255, 0.980392);

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 28px;
  }
  @media (max-width: 1023px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const TextHeader = styled(Box)`
  display: flex;
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  /* identical to box height, or 107% */

  /* White */

  color: #ffffff;
  margin-top: 36px;
  margin-bottom: 24px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    margin-top: 16px;
    margin-bottom: 1px;
  }
`;

const SectionContent01 = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionButtonGroup = styled(Box)`
  display: flex;
  width: 100%;
  padding-right: 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 50px;

  transition: 0.5s;
  @media (max-width: 767px) {
    padding-right: 0px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SectionButtonGroupFinal = styled(Box)`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  margin-top: 50px;
  transition: 0.5s;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ButtonPrevious = styled(Box)`
  display: flex;
  width: 300px;
  height: 57px;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffae00;
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  /* identical to box height, or 108% */

  text-align: center;

  color: #ffae00;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #ffae00;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 250px;
    height: 50px;
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    flex: 1;
    width: 100%;
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 35px;
    font-size: 16px;
  }
`;

const ButtonPreviousLast = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 57px;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffae00;
  border-radius: 10px 0px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  /* identical to box height, or 108% */

  text-align: center;

  color: #ffae00;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #ffae00;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 1023px) {
    height: 40px;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 35px;
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const ButtonNext = styled(Box)`
  display: flex;
  width: 300px;
  height: 57px;
  justify-content: center;
  align-items: center;
  background: #23d0ff;
  border-radius: 10px 0px;
  border: 2px solid #23d0ff;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  /* identical to box height, or 108% */

  text-align: center;

  /* Blue text */

  color: #000f44;
  cursor: pointer;
  user-select: none;

  margin-left: 20px;

  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #23d0ff;
  }
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 250px;
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 1023px) {
    width: 200px;
    height: 40px;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    flex: 1;
    width: 100%;
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 35px;
    margin-left: 0px;
    margin-top: 15px;
    font-size: 16px;
  }
`;

const ButtonCompleteProfile = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;
  height: 57px;
  justify-content: center;
  align-items: center;
  background: #23d0ff;
  border-radius: 10px 0px;
  border: 2px solid #23d0ff;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  /* identical to box height, or 108% */

  text-align: center;

  /* Blue text */

  color: #000f44;
  cursor: pointer;
  user-select: none;

  margin-left: 20px;

  transition: 0.3s;
  &:hover {
    opacity: 1;
    box-shadow: 0px 0px 10px #23d0ff;
  }
  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 50px;
    font-size: 20px;
  }

  @media (max-width: 1023px) {
    height: 40px;
    font-size: 18px;
  }
  @media (max-width: 767px) {
    height: 50px;
    margin-left: 0px;
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    height: 35px;
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
  }
`;

const InputSelectedArt = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: ${({ flagheight }) => (flagheight ? "unset" : "46px")};
  align-items: center;
  border: 1px solid #00caff;
  border-radius: 24px;
  margin-bottom: 8px;
  padding: 6px;
  box-sizing: border-box;
`;

const SectionDigitalArtType = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 15px;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid #00caff;
  /* Shadown popup */

  box-shadow: 0px 8px 29px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  margin-bottom: 22px;
  transition: 0.5s;
  @media (max-width: 500px) {
    grid-row-gap: 10px;
    padding: 10px;
  }
`;

const TextEachDigialArt = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px white;
  }

  transition: 0.5s;
  @media (max-width: 1023px) {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const SectionPageStep = styled(Box)`
  display: flex;
  position: absolute;
  left: 10px;
  top: 10px;
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #000f44;
`;

const TextDescription = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
  margin-top: 34px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    margin-top: 16px;
  }
`;

const SectionPremium = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 34px;
  padding-bottom: 8px;
  box-sizing: border-box;
  border-bottom: 1px dashed #ffae00;

  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    margin-top: 16px;
  }
`;

const TextPremium = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 1023px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const SectionPremiumDown = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const SectionModePayment = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 30px;

  transition: 0.5s;
  @media (max-width: 1023px) {
    margin-right: 0px;
  }
`;

const SectionSelectDigitalArt = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 1023px) {
    margin-top: 30px;
  }
  @media (max-width: 500px) {
    margin-top: 15px;
  }
`;

const TextSelectModePayment = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  /* Secondary 2 */

  color: #b9b8bb;
  margin-top: 36px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    margin-top: 16px;
  }
`;

const SectionEachPayment = styled(Box)`
  display: flex;
  width: 100%;
  height: 73px;
  justify-content: space-between;
  padding: 0px 16px;
  box-sizing: border-box;
  align-items: center;
  border: 1px solid #00caff;
  border-radius: 15px 0px;
  margin-top: 40px;
  background-color: ${({ active }) => (active ? "white" : "unset")};

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px #00caff;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 65px;
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    height: 50px;
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    height: 35px;
    margin-top: 20px;
  }
`;

const TextPaymentName = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  /* Text blue */

  color: #00caff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const ImgPaymentIcon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 1023px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 500px) {
    width: 22px;
    height: 22px;
  }
`;

const TextStartingBidDescription = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height, or 138% */

  /* White */

  color: #ffffff;
  margin-top: 34px;
  margin-bottom: 16px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 1023px) {
    font-size: 13px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const SectionSetRoyalty = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 34px;
  padding-bottom: 24px;
  box-sizing: border-box;
  border-bottom: 1px dashed #ffae00;
`;

const TextSubject02 = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  /* text-align: center; */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const SectionMinusPlus = styled(Box)`
  display: flex;
  height: 64px;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 58px;
  }
  @media (max-width: 1023px) {
    height: 50px;
  }
  @media (max-width: 500px) {
    height: 35px;
  }
`;

const SectionMinus = styled(Box)`
  display: flex;
  width: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #00caff;
  border: 0.5px solid #00caff;
  border-radius: 14px 0px 0px 0px;
  color: #000f44;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 70px;
  }
  @media (max-width: 1023px) {
    width: 60px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
`;

const SectionInputNumber = styled(Box)`
  display: flex;
  width: 100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 0.5px solid #00caff;
  border-top: 0.5px solid #00caff;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 26px;
  /* identical to box height, or 87% */

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 90px;
    font-size: 26px;
  }
  @media (max-width: 1023px) {
    width: 80px;
    font-size: 22px;
  }
  @media (max-width: 500px) {
    width: 60px;
    font-size: 18px;
  }
`;

const SectionPlus = styled(Box)`
  display: flex;
  width: 80px;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: #00caff;
  border: 0.5px solid #00caff;
  border-radius: 0px 0px 14px 0px;
  color: #000f44;
  font-size: 1.5rem;
  user-select: none;
  cursor: pointer;
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 70px;
  }
  @media (max-width: 1023px) {
    width: 60px;
  }
  @media (max-width: 500px) {
    width: 50px;
  }
`;

const SectionDropDownParameters = styled(Box)`
  display: flex;
  width: 100%;
  height: 66px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 32px;
  box-sizing: border-box;
  border: 1px solid #00caff;
  border-radius: 100px;
  margin-top: 10px;
  cursor: pointer;
  user-select: none;

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 0px 30px;
    height: 60px;
  }
  @media (max-width: 1023px) {
    padding: 0px 25px;
    height: 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 18px;
    height: 40px;
  }
`;

const SectionDropDownMint = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  height: 66px;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0px 32px;
  box-sizing: border-box;
  border: 1px solid #00caff;
  border-radius: 100px;
  margin-top: 10px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 0px 30px;
    height: 60px;
  }
  @media (max-width: 1023px) {
    padding: 0px 25px;
    height: 50px;
  }
  @media (max-width: 500px) {
    padding: 0px 18px;
    height: 40px;
  }
`;

const TextSingleItems = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  /* White */

  color: #ffffff;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
  @media (max-width: 1023px) {
    font-size: 15px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
  }
`;

const ButtonDown = styled(Box)`
  display: flex;

  font-size: 1.5rem;
`;

const ButtonDownMint = styled(Box)`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
  font-size: 1.5rem;
  cursor: pointer;
  user-select: none;
`;

const SectionDropDownContent = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;
  border: 1px solid #00caff;
  box-shadow: 0px 8px 29px 1px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  margin-top: 8px;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 0px 18px;
  }
  @media (max-width: 1023px) {
    padding: 0px 16px;
  }
  @media (max-width: 500px) {
    padding: 0px 12px;
  }
`;

const SectionRowDropItems = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  text-align: center;

  /* Secondary 2 */

  color: #b9b8bb;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: white;
    text-shadow: 0px 0px 10px white;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 18px 0px;
    font-size: 16px;
  }
  @media (max-width: 1023px) {
    padding: 16px 0px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    padding: 12px 0px;
    font-size: 14px;
  }
`;

const SectionRowDropMint = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0px;
  box-sizing: border-box;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  /* Secondary 2 */

  color: #b9b8bb;

  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: white;
    text-shadow: 0px 0px 10px white;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    padding: 18px 0px;
    font-size: 16px;
  }
  @media (max-width: 1023px) {
    padding: 16px 0px;
    font-size: 15px;
  }
  @media (max-width: 500px) {
    padding: 12px 0px;
    font-size: 14px;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  margin-right: 70px;
  flex-direction: column;
  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-right: 50px;
  }
  @media (max-width: 1200px) {
    margin-right: 30px;
    margin-bottom: 30px;
  }
  @media (max-width: 1023px) {
    margin-right: 0px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const SectionContent02 = styled(Box)`
  display: flex;
  width: 100%;

  transition: 0.5s;
  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

const SectionPresaleTimeline = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding: 24px 0px;
  box-sizing: border-box;
  border-bottom: 1px solid #00caff;
`;

const TextSet = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  /* identical to box height, or 108% */

  text-align: center;
  text-transform: capitalize;
  color: #ffae00;
  margin-right: 16px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const SectionRightUp = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const SectionRightDown = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 32px;
`;

const TextImageDescription = styled(Box)`
  display: flex;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 14px;
  /* identical to box height, or 59% */

  text-align: center;

  /* Text blue */

  color: #00caff;
  margin-bottom: 12px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 22px;
  }
  @media (max-width: 1023px) {
    font-size: 20px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

const SectionInputDescription = styled(Box)`
  display: flex;
  width: 100%;
  border: 1.68987px solid #00caff;
  border-radius: 15px;
  padding: 16px;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  /* identical to box height, or 183% */

  /* Text blue */

  color: white;
  outline: none;
  ::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 44px;
    /* identical to box height, or 183% */

    /* Text blue */

    color: #00caff;

    opacity: 0.5;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    ::placeholder {
      font-size: 22px;
    }
  }
  @media (max-width: 1023px) {
    ::placeholder {
      font-size: 20px;
    }
  }
  @media (max-width: 500px) {
    ::placeholder {
      font-size: 16px;
    }
  }
`;

const SectionImageSelect = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 30px;

  transition: 0.5s;
  @media (max-width: 1023px) {
    margin-right: 0px;
  }
`;

const SelectImageBox01 = styled(Box)`
  display: flex;
  width: 100%;
  aspect-ratio: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 4.60951px dashed #00caff;
  border-radius: 7.13511px;
  background: linear-gradient(
    146.5deg,
    rgba(0, 15, 68, 0.45) 14.94%,
    rgba(23, 90, 170, 0.1755) 46.56%,
    rgba(0, 15, 68, 0.45) 82.4%
  );

  background-image: url(${({ choosefile }) =>
    choosefile ? choosefile : "unset"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 0.3s;
  box-shadow: 0 0 10px 0 #000;
  cursor: pointer;
  user-select: none;
`;

const SectionChooseImg = styled(Box)`
  display: flex;
`;

const TextUpload01 = styled(Box)`
  display: flex;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
  /* identical to box height, or 89% */

  text-align: center;

  /* Text blue */

  color: #00caff;
  margin-top: 10px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 1023px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const TextUpload02 = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 8.32429px;
  line-height: 13px;
  /* or 157% */

  text-align: center;
  text-transform: capitalize;

  /* Text blue */

  color: #00caff;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 7px;
  }
  @media (max-width: 1023px) {
    font-size: 6px;
  }
  @media (max-width: 500px) {
    font-size: 5px;
  }
`;

const SectionColorSelect = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;

  transition: 0.5s;
  @media (max-width: 1200px) {
    margin-top: 20px;
  }
`;

const TextPickColor = styled(Box)`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  /* identical to box height, or 89% */

  text-align: center;

  /* Secondary */

  color: #808080;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 14px;
  }
  @media (max-width: 1023px) {
    font-size: 12px;
  }
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

const SectionEachColor = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 7px;
  border: ${({ active }) => (active ? "2px solid  #00caff" : "unset")};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 6px;
  }
`;

const SectionBannerColors = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 16px;
`;

const TextDescription02 = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  /* or 130% */

  color: #ffffff;
  margin-top: 32px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
    margin-top: 30px;
  }
  @media (max-width: 1023px) {
    font-size: 16px;
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

const TextPreview = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 14px;
  /* identical to box height, or 59% */

  /* White */

  color: #ffffff;
  margin-top: 57px;
  margin-bottom: 16px;
`;

const SectionButtonEdit = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 16px;
`;

const ButtonEdit = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 14px;
  /* identical to box height, or 71% */

  text-align: right;
  text-decoration-line: underline;

  /* Text blue */

  color: #00caff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 10px;
  }

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
  }
  @media (max-width: 1023px) {
    font-size: 17px;
  }
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;

export default CreateCollectionDetails;
