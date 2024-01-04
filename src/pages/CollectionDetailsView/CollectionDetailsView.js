import { useState } from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import BannerImage from "../../components/BannerImage";
import iconFilter from "../../assets/image/Icon/iconFilter01.png";
import iconSearchFilter from "../../assets/image/Icon/iconSearchFilter.png";
import iconFilterClean from "../../assets/image/Icon/iconCleanFilter.png";
import iconFilterRefresh from "../../assets/image/Icon/iconRefreshFilter.png";
import {
  MdKeyboardArrowLeft,
  MdClose,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import FilterBarEachSection from "../../components/Filter/FilterBarEachSection";
import CustomCheckBox from "../../components/Button/CustomCheckBox";
import {
  dataFilterLeftBar,
  dataFilterCollectionDetailsView,
  dataFilterButtonShow,
} from "../../Data/Filter";
import Slider from "@mui/material/Slider";
import ButtonDropDown from "../../components/Button/ButtonDropDown";
import ButtonFilterShow from "../../components/Button/ButtonFilterShow";
import Collapse from "@mui/material/Collapse";
import StickyBox from "react-sticky-box";
import TabItems from "./TabPages/TabItems";
import TabActivity from "./TabPages/TabActivity";
import TabAnalytics from "./TabPages/TabAnalytics";

const CollectionDetailsView = () => {
  const [flagCollapseLeftBar, setFlagCollapseLeftBar] = useState(false);
  const [flagClickedTab, setFlagClickedTab] = useState(0);
  const [valuePrice, setValuePrice] = useState([20, 37]);
  const handleChangePrice = (event, newValue) => {
    setValuePrice(newValue);
  };

  const [flagButtonShow, setFlagButtonShow] = useState(-1);

  return (
    <div className="mx-4 md:ml-[13vw] md:mr-[13vw] 2xl:mb-4 text-white mt-8">
      <StyledComponent>
        <BannerImage />
        <StickyBox
          offsetTop={0}
          style={{
            display: "flex",
            width: "100%",
            zIndex: "901",
          }}
        >
          <SectionSettingBar>
            {flagClickedTab === 0 ? (
              <SectionFilterBarIcon
                width={
                  window.innerWidth > 900 && !flagCollapseLeftBar
                    ? "270px"
                    : "unset"
                }
              >
                <IconFilter
                  onClick={() => {
                    setFlagCollapseLeftBar(!flagCollapseLeftBar);
                  }}
                >
                  <img src={iconFilter} width={"100%"} height={"100%"} alt="" />
                </IconFilter>
                <IconCollapse
                  onClick={() => {
                    setFlagCollapseLeftBar(!flagCollapseLeftBar);
                  }}
                >
                  {!flagCollapseLeftBar ? (
                    <MdKeyboardArrowLeft />
                  ) : (
                    <MdKeyboardArrowRight />
                  )}
                </IconCollapse>

                <IconCollapseMobile
                  onClick={() => {
                    setFlagCollapseLeftBar(!flagCollapseLeftBar);
                  }}
                >
                  {!flagCollapseLeftBar ? (
                    <MdKeyboardArrowUp />
                  ) : (
                    <MdKeyboardArrowDown />
                  )}
                </IconCollapseMobile>
              </SectionFilterBarIcon>
            ) : (
              <></>
            )}

            <SectionTab>
              <TabEach
                active={flagClickedTab === 0 ? 1 : 0}
                onClick={() => {
                  setFlagClickedTab(0);
                }}
              >
                ITEMS
              </TabEach>
              <TabEach
                active={flagClickedTab === 1 ? 1 : 0}
                onClick={() => {
                  setFlagClickedTab(1);
                }}
              >
                ACTIVITY
              </TabEach>
              <TabEach
                active={flagClickedTab === 2 ? 1 : 0}
                onClick={() => {
                  setFlagClickedTab(2);
                }}
              >
                ANALYTICS
              </TabEach>
            </SectionTab>
          </SectionSettingBar>
        </StickyBox>
        <SectionContent>
          {flagClickedTab === 0 ? (
            <Collapse
              in={!flagCollapseLeftBar}
              orientation={window.innerWidth < 900 ? "vertical" : "horizontal"}
            >
              <StickyBox
                offsetTop={100}
                style={{
                  display: "flex",
                  width: "100%",
                  zIndex: "900",
                }}
              >
                <SectionFilterBar>
                  <FilterBarEachSection textTitle={"Status"} flagBorder={true}>
                    <GroupCheckBoxStatus>
                      {dataFilterLeftBar.status.map((each, index) => {
                        return <CustomCheckBox key={index} data={each} />;
                      })}
                    </GroupCheckBoxStatus>
                  </FilterBarEachSection>
                  <FilterBarEachSection
                    textTitle={"Categories"}
                    flagBorder={true}
                  >
                    <GroupCheckBoxStatus>
                      {dataFilterLeftBar.categories.map((each, index) => {
                        return <CustomCheckBox key={index} data={each} />;
                      })}
                    </GroupCheckBoxStatus>
                  </FilterBarEachSection>
                  <FilterBarEachSection textTitle={"Price"} flagBorder={true}>
                    <SectionPrice>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={valuePrice}
                        onChange={handleChangePrice}
                        valueLabelDisplay="auto"
                      />
                    </SectionPrice>
                  </FilterBarEachSection>
                  <FilterBarEachSection textTitle={"Chains"} flagBorder={false}>
                    <SectionDropDownChain>
                      <ButtonDropDown
                        data={dataFilterCollectionDetailsView}
                        width={"100%"}
                        fontSize={"16px"}
                        lineHeight={"24px"}
                      />
                    </SectionDropDownChain>
                  </FilterBarEachSection>
                </SectionFilterBar>
              </StickyBox>
            </Collapse>
          ) : (
            <></>
          )}

          <SectionNFTContent>
            <SectionFilter>
              <SectionFilterUp>
                <SectionFilterUpLeft>
                  <SectionInputSearch>
                    <InputSearch
                      component={"input"}
                      type={"text"}
                      placeholder={"Search by ID, name or attribute"}
                    ></InputSearch>
                    <IconSeacrh>
                      <img
                        src={iconSearchFilter}
                        width={"100%"}
                        height={"100%"}
                        alt=""
                      />
                    </IconSeacrh>
                  </SectionInputSearch>
                  <SectionLeftMobile>
                    <SectionDropDown>
                      <ButtonDropDown
                        data={dataFilterCollectionDetailsView}
                        fontSize={"12px"}
                        lineHeight={"14px"}
                      />
                    </SectionDropDown>
                    <ButtonFilterClean>
                      <img src={iconFilterClean} alt="" />
                    </ButtonFilterClean>
                    <ButtonFilterClean>
                      <img src={iconFilterRefresh} alt="" />
                    </ButtonFilterClean>
                  </SectionLeftMobile>
                </SectionFilterUpLeft>
                <SectionFilterUpRight>
                  <TextShow>Show:</TextShow>
                  <GroupButtonShow>
                    {dataFilterButtonShow.map((each, index) => {
                      return (
                        <ButtonFilterShow
                          key={index}
                          data={each}
                          flagButtonShow={flagButtonShow}
                          index={index}
                          setFlagButtonShow={setFlagButtonShow}
                        >
                          Listings
                        </ButtonFilterShow>
                      );
                    })}
                  </GroupButtonShow>
                </SectionFilterUpRight>
              </SectionFilterUp>
              <SectionFilterDown>
                <ButtonClearAll>Clear All</ButtonClearAll>
                <ButtonEachFilter>
                  <TextLeft>Buy Now</TextLeft>
                  <IconClose>
                    <MdClose />
                  </IconClose>
                </ButtonEachFilter>
                <ButtonEachFilter>
                  <TextLeft>Domain Names</TextLeft>
                  <IconClose>
                    <MdClose />
                  </IconClose>
                </ButtonEachFilter>
                <ButtonEachFilter>
                  <TextLeft>Collectibles</TextLeft>
                  <IconClose>
                    <MdClose />
                  </IconClose>
                </ButtonEachFilter>
              </SectionFilterDown>
            </SectionFilter>

            {flagClickedTab === 0 ? (
              <TabItems flagCollapseLeftBa={flagCollapseLeftBar} />
            ) : flagClickedTab === 1 ? (
              <TabActivity />
            ) : (
              <TabAnalytics />
            )}
          </SectionNFTContent>
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

const SectionSettingBar = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px dashed #23d0ff;
  background-color: #021223;

  transition: 0.5s;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

const SectionFilterBarIcon = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 28px;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: unset;
    margin-right: unset;
  }
`;

const SectionTab = styled(Box)`
  display: flex;
  flex: 1;
  width: 100%;

  transition: 0.5s;
  @media (max-width: 900px) {
    flex: unset;
    width: unset;
  }
`;

const IconFilter = styled(Box)`
  display: flex;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;

const IconCollapse = styled(Box)`
  display: flex;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: #ffae00;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const IconCollapseMobile = styled(Box)`
  display: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  user-select: none;

  transition: 0.3s;
  &:hover {
    color: #ffae00;
  }

  @media (max-width: 900px) {
    display: flex;
  }
`;

const TabEach = styled(Box)`
  display: flex;
  width: fit-content;
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
  @media (max-width: 600px) {
    margin-right: 10px;
    padding: 4px 8px;
  }
  @media (max-width: 500px) {
    margin-right: 5px;
    font-size: 10px;
  }
  @media (max-width: 389px) {
    margin-right: 5px;
    font-size: 8px;
  }
  @media (max-width: 350px) {
    margin-right: 3px;
    font-size: 7px;
  }
`;

const SectionContent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 21px;

  transition: 0.5s;
  @media (max-width: 900px) {
    flex-direction: column;
    > div {
      width: 100%;
    }

    .css-14vyde3-MuiCollapse-wrapperInner {
      width: 100%;
    }
  }
`;

const SectionFilterBar = styled(Box)`
  display: flex;
  width: 270px;
  margin-right: 28px;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 100%;
    margin-right: unset;
  }
`;

const SectionNFTContent = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const GroupCheckBoxStatus = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 4px;
`;

const SectionPrice = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 12px;
  .css-14pt78w-MuiSlider-rail {
    background: #565660;
    border-radius: 4px;
  }
  .css-1gv0vcd-MuiSlider-track {
    background: #00caff;
    border-radius: 3px;
  }
  .css-eg0mwd-MuiSlider-thumb {
    background: #00caff;
  }
`;

const SectionDropDownChain = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 12px;
`;

const SectionFilter = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionFilterUp = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionFilterDown = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;

  margin-top: 18px;
`;

const SectionFilterUpLeft = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1300px) {
    flex-direction: column;
    align-items: unset;
    width: 100%;
  }
`;

const SectionFilterUpRight = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    margin-top: 18px;
  }
`;

const SectionInputSearch = styled(Box)`
  display: flex;
  width: 350px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff;
  border-radius: 19px;
  padding: 0px 15px 0px 15px;
  box-sizing: border-box;

  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffae00;
  }

  input::placeholder {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height, or 120% */
    color: #ffffff;
  }

  transition: 0.5s;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const InputSearch = styled(Box)`
  outline: none;
  border: none;
  background: rgba(0, 0, 0, 0);
  display: flex;
  width: 100%;
  margin-right: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 120% */

  color: #ffffff;
`;

const IconSeacrh = styled(Box)`
  width: 20px;
`;

const SectionDropDown = styled(Box)`
  display: flex;
  margin-left: 14px;

  transition: 0.5s;
  @media (max-width: 1300px) {
    margin-left: unset;
  }
`;

const ButtonFilterClean = styled(Box)`
  display: flex;
  width: 40px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(0, 163, 255, 0.3) 0%,
    rgba(0, 163, 255, 0.06) 100%
  );
  mix-blend-mode: normal;
  margin-left: 12px;
  > img {
    width: 18px;
    height: 18px;
  }
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    border: 1px solid #ffae00;
  }
`;

const TextShow = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* or 120% */

  text-align: right;

  color: #ffffff;

  text-shadow: 0px 0px 3px #ffcc0d;
`;

const GroupButtonShow = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonClearAll = styled(Box)`
  display: flex;
  width: max-content;
  height: 30px;
  padding: 0px 15px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 120% */

  color: #ffffff;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  user-select: none;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const ButtonEachFilter = styled(Box)`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 0px 15px;
  box-sizing: border-box;
  background: rgba(255, 174, 0, 0.3);
  border-radius: 25px;
  user-select: none;
  cursor: pointer;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const TextLeft = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height, or 120% */

  color: #ffffff;
  margin-right: 12px;
`;

const IconClose = styled(Box)`
  color: #ffae00;
  font-size: 0.8rem;
`;

const SectionLeftMobile = styled(Box)`
  display: flex;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1300px) {
    margin-top: 18px;
  }
`;

// const SectionCart01 = styled(Box)`
//   display: grid;
//   gap: var(--template-column-gutters);
//   grid-auto-rows: minmax(0px, 1fr);
//   grid-template-columns: repeat(
//     calc(
//       var(--template-columns) -
//         (
//           var(--template-reduced-columns) *
//             var(--template-reduced-columns-multiplier)
//         )
//     ),
//     minmax(0, 1fr)
//   );
// `;

export default CollectionDetailsView;
