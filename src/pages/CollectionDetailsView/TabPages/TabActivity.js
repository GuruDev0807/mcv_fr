import { Box } from "@mui/material";
import styled from "styled-components";
import { dataCollectionActivity } from "../../../Data/Table";
import { MdAddCircleOutline, MdStarOutline } from "react-icons/md";
import { BsTag } from "react-icons/bs";
import BackOpacity from "../../../components/BackOpacity/BackOpacity";
import { shortAddress } from "../../../functions/functions";

const TabActivity = () => {
  return (
    <StyledComponent>
      <TableHead>
        <TableHeadCell flex="3.5">Item</TableHeadCell>
        <TableHeadCell flex="2">Event</TableHeadCell>
        <TableHeadCell flex="1">Price</TableHeadCell>
        <TableHeadCell flex="2">From</TableHeadCell>
        <TableHeadCell flex="2">To</TableHeadCell>
        <TableHeadCell flex="2">Date</TableHeadCell>
      </TableHead>
      <TableBody>
        {dataCollectionActivity.map((each, index) => {
          return (
            <TableRow key={index}>
              <BackOpacity
                padding={"15px 24px"}
                border={"1px solid #00CAFF"}
                borderRaidus={"8px"}
              >
                <TableRowInside>
                  <TableRowCell01 flex="3.5">
                    <SectionItemImage>
                      {/* <img src={""} width={"100%"} height={'100%'} alt='' /> */}
                    </SectionItemImage>
                    <SectionTextItem>
                      <TextItemUp>{each.itemName}</TextItemUp>
                      <TextItemDown>{each.itemNumber}</TextItemDown>
                    </SectionTextItem>
                  </TableRowCell01>
                  <TableRowCell02 flex="2">
                    {each.eventType === 0 ? (
                      <BadgeCollectingBid>
                        <Box display={"flex"} mr={"3px"}>
                          <MdAddCircleOutline fontSize={"0.9rem"} />
                        </Box>
                        <Box display={"flex"}>Collecting Bid</Box>
                      </BadgeCollectingBid>
                    ) : each.eventType === 1 ? (
                      <BadgeListing>
                        <Box display={"flex"} mr={"3px"}>
                          <BsTag fontSize={"0.9rem"} />
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
                  </TableRowCell02>
                  <TableRowCell03 flex="1">{each.price}</TableRowCell03>
                  <TableRowCell03 flex="2">
                    {shortAddress(each.from)}
                  </TableRowCell03>
                  <TableRowCell03 flex="2">
                    {shortAddress(each.to)}
                  </TableRowCell03>
                  <TableRowCell03 flex="2">{each.date}</TableRowCell03>
                </TableRowInside>
              </BackOpacity>
            </TableRow>
          );
        })}
      </TableBody>
      <TableMobileBody>
        {dataCollectionActivity.map((each, index) => {
          return (
            <TableMobileRow key={index}>
              <BackOpacity
                padding={"15px 24px"}
                border={"1px solid #00CAFF"}
                borderRaidus={"8px"}
              >
                <TableMobileRowInside>
                  <TextSubject>Item</TextSubject>
                  <TableRowCell01>
                    <SectionItemImage>
                      {/* <img src={""} width={"100%"} height={'100%'} alt='' /> */}
                    </SectionItemImage>
                    <SectionTextItem>
                      <TextItemUp>{each.itemName}</TextItemUp>
                      <TextItemDown>{each.itemNumber}</TextItemDown>
                    </SectionTextItem>
                  </TableRowCell01>
                  <TextSubject mt={"15px"}>Event</TextSubject>
                  <TableRowCell02>
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
                  </TableRowCell02>
                  <TextSubject mt={"15px"}>Price</TextSubject>
                  <TableRowCell03>{each.price}</TableRowCell03>
                  <TextSubject mt={"15px"}>From</TextSubject>
                  <TableRowCell03>{shortAddress(each.from)}</TableRowCell03>
                  <TextSubject mt={"15px"}>To</TextSubject>
                  <TableRowCell03>{shortAddress(each.to)}</TableRowCell03>
                  <TextSubject mt={"15px"}>Date</TextSubject>
                  <TableRowCell03>{each.date}</TableRowCell03>
                </TableMobileRowInside>
              </BackOpacity>
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
  margin-top: 18px;
`;

const TableHead = styled(Box)`
  display: flex;
  width: 100%;
  padding: 0px 24px;
  box-sizing: border-box;
  align-items: center;

  transition: 0.5s;
  @media (max-width: 1600px) {
    display: none;
  }
`;

const TableHeadCell = styled(Box)`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  text-transform: uppercase;

  /* Blus shd */
  color: #ffae00;
  text-shadow: 0px 0px 3px #0080ff;
`;

const TableBody = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 12px;

  transition: 0.5s;
  @media (max-width: 1600px) {
    display: none;
  }
`;

const TableMobileBody = styled(Box)`
  display: none;
  width: 100%;
  flex-direction: column;

  transition: 0.5s;
  @media (max-width: 1600px) {
    display: flex;
  }
`;

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const TableMobileRow = styled(Box)`
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

const TableRowCell01 = styled(Box)`
  display: flex;
  align-items: center;
`;

const TableRowCell02 = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TableRowCell03 = styled(Box)`
  display: flex;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;
`;

const SectionItemImage = styled(Box)`
  display: flex;
  min-width: 42px;
  min-height: 42px;
  border-radius: 8px;
  background: #565660;
`;

const SectionTextItem = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`;

const TextItemUp = styled(Box)`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Text blue */

  color: #00caff;

  transition: 0.5s;
  @media (max-width: 370px) {
    font-size: 14px;
  }
`;

const TextItemDown = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  /* Blus shd */
  color: rgba(255, 174, 0, 1);
  text-shadow: 0px 0px 3px #0080ff;
`;

const BadgeCollectingBid = styled(Box)`
  display: flex;
  width: 130px;
  height: 23px;
  justify-content: center;
  align-items: center;
  background: rgba(34, 197, 94, 0.05);
  border: 1px solid #22c55e;
  border-radius: 100px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #22c55e;
`;

const BadgeListing = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 23px;

  background: rgba(186, 32, 36, 0.05);
  border: 1px solid #ba2024;
  border-radius: 100px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #ff383d;
`;

const BadgeMint = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64.25px;
  height: 23px;

  background: rgba(234, 179, 8, 0.05);
  border: 1px solid #eab308;
  border-radius: 100px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: #eab308;
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
`;

const TextSubject = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  /* Blus shd */
  color: #ffae00;
  text-shadow: 0px 0px 3px #0080ff;
  margin-bottom: 5px;
`;

const TableRowInside = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
`;

const TableMobileRowInside = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;


export default TabActivity;
