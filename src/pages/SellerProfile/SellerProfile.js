import styled from "styled-components";
import { Box } from "@mui/material";
import InputSellerProfile from "../../components/Input/InputSellerProfile";
import imgNFT01 from "../../assets/image/Background/NFT01.png";
import imgNFT02 from "../../assets/image/Background/NFT02.png";
import imgNFT03 from "../../assets/image/Background/NFT03.jpg";
import imgNFT04 from "../../assets/image/Background/NFT04.jpg";
import { useState, useEffect } from "react";
import { dataTypeDigitalArt } from "../../Data/DigitalArt";
import ButtonSelectedDigitalArts from "../../components/Button/ButtonSelectedDigitalArts";
import { MdCheck } from "react-icons/md";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SellerProfile = () => {
  const images = [imgNFT01, imgNFT02, imgNFT03, imgNFT04];
  const timeDuration = 3000;
  const [step, setStep] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textSelectedDigitalArts, setTextSelectedDigitalArts] = useState([]);
  const [checkAgree, setCheckAgree] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, timeDuration);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mx-4 mt-8 md:ml-[13vw] md:mr-0 2xl:mb-4 text-white">
      <div className="relative pb-4 mb-10 md:pb-20 md:mb-24 2xl:pb-12 2xl:mb-12 callout-bg">
        <StyledComponent>
          <SectionLeft>
            <TextSubject>SELLER PROFILE</TextSubject>
            {step === 0 ? (
              <SectionContent>
                <TextHeader>
                  What is your name or alias as a digital artist?
                </TextHeader>
                <InputSellerProfile placeHolder={"Name"} />

                <TextHeader>What is your email address</TextHeader>
                <InputSellerProfile placeHolder={"Email"} />

                <TextHeader>
                  What is your portfolio or website where we can see your
                  digital art?
                </TextHeader>
                <InputSellerProfile />

                <TextHeader>
                  How did you discover NFTs and what are your thoughts on them?
                </TextHeader>
                <InputSellerProfile />
              </SectionContent>
            ) : step === 1 ? (
              <SectionContent>
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
                        setTextSelectedDigitalArts={setTextSelectedDigitalArts}
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
                <InputSellerProfile placeHolder={"Tools"} />
                <TextHeader>
                  Why do you want to sell your digital art on our NFT
                  marketplace website?
                </TextHeader>
                <InputSellerProfile />
              </SectionContent>
            ) : step === 2 ? (
              <SectionContent>
                <TextOptional>(Optional)</TextOptional>
                <TextHeader01>
                  How long have you been creating digital art and what is your
                  background or experience as an artist?
                </TextHeader01>
                <InputSellerProfile />

                <TextOptional>(Optional)</TextOptional>
                <TextHeader01>
                  What are some of the NFT projects or collections that you like
                  or support?
                </TextHeader01>
                <InputSellerProfile />

                <TextOptional>(Optional)</TextOptional>
                <TextHeader01>
                  Why do you want to sell your digital art on our NFT
                  marketplace website?
                </TextHeader01>
                <InputSellerProfile />
              </SectionContent>
            ) : (
              <SectionContent>
                <TextHeader>
                  What guarantees or policies do you offer to your buyers, such
                  as refunds, authenticity proofs, after-sales support, etc.?
                </TextHeader>
                <InputSellerProfile />
                <SectionAgreeTerms>
                  <CheckAgree
                    onClick={() => {
                      setCheckAgree(!checkAgree);
                    }}
                  >
                    {!checkAgree ? <></> : <MdCheck></MdCheck>}
                  </CheckAgree>
                  <TextAgree>
                    I agree to the{" "}
                    <a href="/" target={"_blank"} rel="noreferrer">
                      <span style={{ color: "#00CAFF" }}>
                        TERMS & CONDITIONS
                      </span>
                    </a>
                  </TextAgree>
                </SectionAgreeTerms>
                <SectionButtonGroupFinal>
                  <ButtonPreviousLast
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
                  </ButtonPreviousLast>
                  <ButtonCompleteProfile>
                    Complete Profile
                  </ButtonCompleteProfile>
                </SectionButtonGroupFinal>
              </SectionContent>
            )}
          </SectionLeft>
          <SectionRight>
            <SectionRandomImage>
              <SectionImageBack01></SectionImageBack01>
              <SectionImageBack02></SectionImageBack02>
              <img src={images[currentImageIndex]} alt="" />
            </SectionRandomImage>
          </SectionRight>
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

  transition: 0.5s;
  @media (max-width: 1400px) {
  }
  @media (max-width: 1023px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 767px) {
    padding: 65px 0px;
  }
`;

const SectionLeft = styled(Box)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: 130px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-right: 50px;
  }
  @media (max-width: 1200px) {
    margin-right: 30px;
  }
  @media (max-width: 1023px) {
    margin-right: 0px;
  }
`;

const SectionRight = styled(Box)`
  display: flex;
  flex: 1;
  perspective: 1000px;

  transition: 0.5s;
  @media (max-width: 900px) {
    display: none;
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

const TextHeader01 = styled(Box)`
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
  margin-bottom: 24px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1023px) {
    font-size: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 900px) {
    font-size: 16px;
    margin-bottom: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const SectionRandomImage = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  transform-style: preserve-3d;
  align-items: baseline;

  > img {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 30px 0px;
    border: 1.5px solid #ffae00;
    object-fit: cover;
    object-position: center;
    z-index: 10;
  }
`;

const SectionImageBack01 = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 30px 0px;
  border: 1.5px solid #ffae00;
  top: -12px;
  right: -18px;
  z-index: 9;

  transition: transform 300ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  animation: backAnimation01 3s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  @keyframes backAnimation01 {
    0% {
      top: -12px;
      right: -18px;
    }
    80% {
      top: -12px;
      right: -18px;
    }
    100% {
      top: 0px;
      right: 0px;
    }
  }
`;

const SectionImageBack02 = styled(Box)`
  display: flex;
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 30px 0px;
  border: 1.5px solid #ffae00;
  top: -12px;
  right: -18px;
  z-index: 8;
  transition: transform 500ms cubic-bezier(0, 0, 0.2, 1) 0ms !important;
  animation: backAnimation02 3s 1;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;

  @keyframes backAnimation02 {
    0% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SectionContent = styled(Box)`
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

const SectionAgreeTerms = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 22px;
`;

const CheckAgree = styled(Box)`
  display: flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  color: #00caff;
  font-size: 1.2rem;
  border: 1px solid #00caff;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;

  transition: 0.5s;
  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`;

const TextAgree = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  color: #ffffff;
  margin-left: 12px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 18px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
  }
  @media (max-width: 350px) {
    font-size: 12px;
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

const TextOptional = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */

  /* Text blue */

  color: #00caff;
  margin-top: 36px;
  margin-bottom: 8px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    margin-top: 30px;
    font-size: 16px;
  }
  @media (max-width: 1023px) {
    margin-top: 20px;
    font-size: 14px;
  }
  @media (max-width: 900px) {
    margin-top: 15px;
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

export default SellerProfile;
