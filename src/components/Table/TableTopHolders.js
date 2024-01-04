import styled from "styled-components";
import { Box } from "@mui/material";
import { shortAddress } from "../../functions/functions";

const TableTopHolders = ({ data }) => {
  return (
    <StyledComponent>
      <TableHead>
        {data.header.map((each, index) => {
          return (
            <HeadEachCell
              flex={each.flex}
              key={index}
              justifyContent={
                index === data.header.length - 1 ? "flex-end" : "flex-start"
              }
            >
              {each.name}
            </HeadEachCell>
          );
        })}
      </TableHead>
      <TableBody>
        {data.content.map((each, index) => {
          return (
            <TableRow key={index}>
              <SectionEachRow flex={data.header[0].flex}>
                {index + 1}
              </SectionEachRow>
              <SectionEachRow flex={data.header[1].flex}>
                <AvatarUser>
                  <img
                    src={each.avatarUser}
                    width={"100%"}
                    height={"100%"}
                    alt=""
                  />
                </AvatarUser>
                <Box ml={"8px"}>{shortAddress(each.address)}</Box>
              </SectionEachRow>
              <SectionEachRow
                flex={data.header[2].flex}
                justifyContent={"flex-end"}
              >
                {each.itemCount}
              </SectionEachRow>
            </TableRow>
          );
        })}
      </TableBody>
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
  justify-content: space-between;
  align-items: center;
  padding: 0px 24px 10px 24px;
  box-sizing: border-box;
  border-bottom: 0.5px solid #a9a9c2;
`;

const HeadEachCell = styled(Box)`
  display: flex;
  font-family: "DM Sans";
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 18px;
  /* identical to box height, or 164% */

  text-transform: uppercase;

  /* Blus shd */
  color: #ffae00;
  text-shadow: 0px 0px 3px #0080ff;
  transition: 0.5s;
  @media (max-width: 390px) {
    font-weight: 700;
    font-size: 10px;
    line-height: 11px;
  }
`;

const TableBody = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const TableRow = styled(Box)`
  display: flex;
  width: 100%;
  padding: 20px 24px 20px 24px;
  box-sizing: border-box;
  border-bottom: 1px dashed;
  border-spacing: 5px;
  border-color: #ffae00;
  align-items: center;
`;

const SectionEachRow = styled(Box)`
  display: flex;
  align-items: center;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 18px;
  /* identical to box height, or 164% */

  /* Dark/secondary 2 */

  color: #a9a9c2;

  transition: 0.5s;
  @media (max-width: 390px) {
    font-weight: 700;
    font-size: 8px;
    line-height: 11px;
  }
`;

const AvatarUser = styled(Box)`
  display: flex;
  width: 33px;
  height: 33px;
  min-width: 33px;
  min-height: 33px;
  > img {
    border-radius: 8px;
  }

  transition: 0.5s;
  @media (max-width: 390px) {
    width: 21px;
    height: 21px;
    min-width: 21px;
    min-height: 21px;
  }
`;

export default TableTopHolders;
