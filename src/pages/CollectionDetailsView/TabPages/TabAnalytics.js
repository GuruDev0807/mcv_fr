import { Box } from "@mui/material";
import styled from "styled-components";
import ButtonGraphTab from "../../../components/Button/ButtonGraphTab";
import ButtonDropDownChart from "../../../components/Button/ButtonDropDownChart";

import ChartBalance from "../../../components/Chart/ChartBalance";
import { dataFilterExploreLeftBarItems } from "../../../Data/Filter";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  dataTableLongestHoldingItems,
  dataTableTopHolders,
} from "../../../Data/Table";
import TableLongestHoldingItems from "../../../components/Table/TableLongestHoldingItems";
import TableTopHolders from "../../../components/Table/TableTopHolders";

const TabAnalytics = () => {
  return (
    <StyledComponent>
      <SectionEachGroup>
        <TextSubject>Collection Statistics</TextSubject>
        <SectionBox>
          <BoxEach>
            <TextHead>Interacted Addresses</TextHead>
            <TextContent>288 people</TextContent>
          </BoxEach>
          <BoxEach>
            <TextHead>Items Never Transferred Since Mint</TextHead>
            <TextContent>77.73%</TextContent>
            <TextSContent>(2,722)</TextSContent>
          </BoxEach>
          <BoxEach>
            <TextHead>Items Purchased Below Current Floor Price</TextHead>
            <TextContent>288 people</TextContent>
            <TextSContent>(12)</TextSContent>
          </BoxEach>
          <BoxEach>
            <TextHead>Average Holding Days</TextHead>
            <TextContent>84 Days</TextContent>
          </BoxEach>
        </SectionBox>
      </SectionEachGroup>
      <SectionEachGroup>
        <SectionHead>
          <TextSubject>Trading History</TextSubject>
          <ButtonGraphTab data={["1D", "7D", "3OD", "B"]} />
        </SectionHead>
        <SectionGraph>
          <ChartBalance
            data={[1.45, 1.45, 1.45, 1.45, 1.45, 1.5, 1.5, 1.4, 1.36]}
            axiosColor={"#FFFFFF"}
            chartColor={"#FFAE00"}
            height={"100%"}
            categoriesX={[
              "31/01",
              "01/02",
              "02/02",
              "03/02",
              "04/02",
              "05/02",
              "06/02",
              "07/02",
              "08/02",
            ]}
            typeChart={"area"}
          />
        </SectionGraph>
      </SectionEachGroup>
      <SectionEachGroup>
        <SectionHead>
          <TextSubject>Listing Depth</TextSubject>
          <ButtonGraphTab data={["5 AVAX", "0.1 AVAX", "1 AVAX"]} />
        </SectionHead>
        <SectionGraph>
          <ChartBalance
            data={[65, 5, 20, 45, 5, 30, 30]}
            axiosColor={"#FFFFFF"}
            chartColor={"#00CAFF"}
            height={"100%"}
            categoriesX={[0, 10, 15, 20, 25, 30, 35]}
            typeChart={"bar"}
          />
        </SectionGraph>
      </SectionEachGroup>
      <SectionGroupTwo>
        <SectionEachGroup>
          <SectionHead>
            <TextSubjectSmall>Top Holders</TextSubjectSmall>
            <ButtonDropDownChart data={dataFilterExploreLeftBarItems} />
          </SectionHead>
          <SectionTable>
            <TableTopHolders data={dataTableTopHolders} />
          </SectionTable>
        </SectionEachGroup>
        <SectionEachGroup>
          <SectionHead>
            <TextSubjectSmall>Longest Holding Items</TextSubjectSmall>
            <ButtonGroupDirection>
              <ButtonDirection>
                <MdKeyboardArrowLeft />
              </ButtonDirection>
              <ButtonDirection ml={"8px"}>
                <MdKeyboardArrowRight />
              </ButtonDirection>
            </ButtonGroupDirection>
          </SectionHead>
          <SectionTable>
            <TableLongestHoldingItems data={dataTableLongestHoldingItems} />
          </SectionTable>
        </SectionEachGroup>
      </SectionGroupTwo>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const SectionEachGroup = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 0.5px solid #00caff;
  border-radius: 16px;
  padding: 16px 24px;
  box-sizing: border-box;
  margin-bottom: 32px;

  transition: 0.5s;
  @media (max-width: 900px) {
    padding: 8px 16px;
  }
`;

const TextSubject = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  /* Text blue */

  color: #00caff;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 26px;
  }
`;

const SectionBox = styled(Box)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 24px;
  grid-column-gap: 20px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
`;

const BoxEach = styled(Box)`
  display: flex;
  flex: 1;
  height: 100px;
  border: 0.470019px solid #ffae00;
  border-radius: 15.0406px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextHead = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;

  /* White */

  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
  }
`;

const TextContent = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  display: flex;
  align-items: center;
  text-align: center;

  /* White */

  color: #ffffff;
  transition: 0.5s;
  @media (max-width: 900px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
  }
`;

const TextSContent = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11.2805px;
  line-height: 19px;
  /* identical to box height, or 167% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Secondary 2 */

  color: #b9b8bb;
`;

const SectionHead = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const SectionGraph = styled(Box)`
  display: flex;
  width: 100%;
  height: 270px;
  margin-top: 50px;

  transition: 0.5s;
  @media (max-width: 900px) {
    height: 200px;
  }
`;

const TextSubjectSmall = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  /* identical to box height, or 130% */

  display: flex;
  align-items: center;
  text-align: center;

  color: #00caff;

  transition: 0.5s;
  @media (max-width: 900px) {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
`;

const SectionGroupTwo = styled(Box)`
  display: flex;
  justify-content: space-between;
  > div:nth-child(1) {
    margin-right: 12px;
  }

  transition: 0.5s;
  @media (max-width: 1600px) {
    flex-direction: column;
  }
`;

const ButtonGroupDirection = styled(Box)`
  display: flex;
  align-items: center;
`;

const ButtonDirection = styled(Box)`
  display: flex;
  width: 46px;
  height: 37px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #00caff;
  border-radius: 8px;
  color: #00caff;
  font-size: 1.3rem;
  user-select: none;
  cursor: pointer;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px;
  }
`;

const SectionTable = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 24px;
`;

export default TabAnalytics;
