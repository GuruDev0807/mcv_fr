import styled from "styled-components";
import { Box } from "@mui/material";
import { dataDetailsHistory } from "../../../Data/Table";
import { MdAddCircleOutline, MdStarOutline } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import iconMcverse from "../../../assets/image/Icon/iconMcverse.png";
import { formatNumber, shortAddress } from "../../../functions/functions";

const TabHistory = () => {
  return (
    <StyledComponent>
      <TableHead>
        <TableHeadCell flex="2">Event</TableHeadCell>
        <TableHeadCell flex="1.5">Price</TableHeadCell>
        <TableHeadCell flex="1.5">From</TableHeadCell>
        <TableHeadCell flex="1.5">To</TableHeadCell>
      </TableHead>
      <TableBody>
        {dataDetailsHistory.map((each, index) => {
          return (
            <TableRow
              key={index}
              marginTop={index === 0 ? "unset" : "17px"}
              borderBottom={
                index === dataDetailsHistory.length - 1
                  ? "unset"
                  : "1px dashed #FFFFFF"
              }
              paddingBottom={
                index === dataDetailsHistory.length - 1 ? "unset" : "17px"
              }
            >
              <SectionEvent flex="2">
                {each.eventType === 0 ? (
                  <BadgeCollectingBid>
                    <Box display={"flex"} mr={"3px"}>
                      <MdAddCircleOutline fontSize={"1rem"} />
                    </Box>
                    <Box display={"flex"}>Collecting Bid</Box>
                  </BadgeCollectingBid>
                ) : each.eventType === 1 ? (
                  <BadgeListing>
                    <Box display={"flex"} mr={"3px"}>
                      <BsTag fontSize={"1rem"} />
                    </Box>
                    <Box display={"flex"}>Listing</Box>
                  </BadgeListing>
                ) : (
                  <BadgeMint>
                    <Box display={"flex"} mr={"3px"}>
                      <MdStarOutline fontSize={"1rem"} />
                    </Box>
                    <Box display={"flex"}>Mint</Box>
                  </BadgeMint>
                )}
                {each.eventFlag === false ? (
                  <TextValid>Valid</TextValid>
                ) : (
                  <></>
                )}
                <TextEventTime>{each.eventTime}</TextEventTime>
              </SectionEvent>
              <TextPrice flex="1.5">
                <IconPrice>
                  <img src={iconMcverse} width={"100%"} alt="" />
                </IconPrice>
                <Box display={"flex"}>{formatNumber(each.price)}</Box>
              </TextPrice>
              <TextAddress
                flex="1.5"
                color={
                  each.eventType === 0
                    ? "#22C55E"
                    : each.eventType === 1
                    ? "#FF383D"
                    : "#FFAE00"
                }
              >
                {shortAddress(each.from)}
              </TextAddress>
              <TextAddress
                flex="1.5"
                color={
                  each.eventType === 0
                    ? "#22C55E"
                    : each.eventType === 1
                    ? "#FF383D"
                    : "#FFAE00"
                }
              >
                {shortAddress(each.to)}
              </TextAddress>
            </TableRow>
          );
        })}
      </TableBody>
      <TableMobileBody>
        {dataDetailsHistory.map((each, index) => {
          return (
            <TableMobileRow key={index} borderBottom={"1px dashed #ffae00"}>
              <MobileSectionEachRow>
                <TextSubject>Event</TextSubject>
                <SectionEvent>
                  {each.eventType === 0 ? (
                    <BadgeCollectingBid>
                      <Box display={"flex"} mr={"3px"}>
                        <MdAddCircleOutline fontSize={"1rem"} />
                      </Box>
                      <Box display={"flex"}>Collecting Bid</Box>
                    </BadgeCollectingBid>
                  ) : each.eventType === 1 ? (
                    <BadgeListing>
                      <Box display={"flex"} mr={"3px"}>
                        <BsTag fontSize={"1rem"} />
                      </Box>
                      <Box display={"flex"}>Listing</Box>
                    </BadgeListing>
                  ) : (
                    <BadgeMint>
                      <Box display={"flex"} mr={"3px"}>
                        <MdStarOutline fontSize={"1rem"} />
                      </Box>
                      <Box display={"flex"}>Mint</Box>
                    </BadgeMint>
                  )}
                  {each.eventFlag === false ? (
                    <TextValid>Valid</TextValid>
                  ) : (
                    <></>
                  )}
                </SectionEvent>
              </MobileSectionEachRow>
              <MobileSectionEachRow>
                <TextSubject mt={"15px"}>Price</TextSubject>
                <TextPrice>{each.price}</TextPrice>
              </MobileSectionEachRow>
              <MobileSectionEachRow>
                <TextSubject mt={"15px"}>From</TextSubject>
                <TextAddress>{shortAddress(each.from)}</TextAddress>
              </MobileSectionEachRow>
              <MobileSectionEachRow>
                <TextSubject mt={"15px"}>To</TextSubject>
                <TextAddress>{shortAddress(each.to)}</TextAddress>
              </MobileSectionEachRow>
            </TableMobileRow>
          );
        })}
      </TableMobileBody>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TableHead = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TableHeadCell = styled(Box)`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-transform: uppercase;

  color: #446d85;
`;

const TableBody = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 28px;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: none;
  }
`;

const TableMobileBody = styled(Box)`
  display: none;
  width: 100%;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 1200px) {
    display: flex;
  }
`;

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TableMobileRow = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 0px 20px 0px;
  box-sizing: border-box;
  margin-bottom: 20px;

  flex-direction: column;
`;

const SectionEvent = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const IconPrice = styled(Box)`
  width: 24px;
  margin-right: 6px;
`;

const TextPrice = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */
  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-weight: 400;
    font-size: 14px;
  }
`;

const TextAddress = styled(Box)`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-decoration-line: underline;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-weight: 400;
    font-size: 14px;
  }
`;

const BadgeCollectingBid = styled(Box)`
  display: flex;
  width: 140px;
  height: 23px;
  justify-content: center;
  align-items: center;
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid #22c55e;
  border-radius: 100px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #22c55e;
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 130px;
    font-weight: 500;
    font-size: 12px;
  }
`;

const BadgeListing = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 23px;

  background: rgba(186, 32, 36, 0.05);
  border: 1px solid #ba2024;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #ff383d;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 80px;
    font-weight: 500;
    font-size: 12px;
  }
`;

const BadgeMint = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 23px;

  background: rgba(234, 179, 8, 0.05);
  border: 1px solid #eab308;
  border-radius: 100px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #eab308;
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 65px;
    font-weight: 500;
    font-size: 12px;
  }
`;

const TextValid = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  /* Dark/secondary 2 */

  color: #a9a9c2;
  margin-top: 5px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;

const TextSubject = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-transform: uppercase;

  /* Secondary */

  /* color: #565660; */
  color: white;
  margin-bottom: 5px;
`;

const TextEventTime = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  /* Dark/secondary 2 */

  color: #a9a9c2;
  margin-top: 3px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 10px;
  }
`;

const MobileSectionEachRow = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export default TabHistory;
