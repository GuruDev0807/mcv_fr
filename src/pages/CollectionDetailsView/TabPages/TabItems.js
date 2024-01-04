import styled from "styled-components";
import { Box } from "@mui/material";
import CartCollectionDetailView from "../../../components/Cart/CartCollectionDetailView";
import { dataCartCollectionDetails } from "../../../Data/Cart";

const TabItems = ({ flagCollapseLeftBar }) => {
  return (
    <SectionCart active={flagCollapseLeftBar ? 1 : 0}>
      {dataCartCollectionDetails.map((each, index) => {
        return <CartCollectionDetailView key={index} data={each} />;
      })}
    </SectionCart>
  );
};

const SectionCart = styled(Box)`
  display: grid;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  grid-template-columns: ${({ active }) =>
    active ? " 1fr 1fr 1fr 1fr 1fr" : " 1fr 1fr 1fr 1fr"};
  grid-column-gap: ${({ active }) => (active ? " 28px" : " 14px")};
  grid-row-gap: ${({ active }) => (active ? " 28px" : " 14px")};

  transition: 0.5s;
  @media (max-width: 1300px) {
    grid-template-columns: ${({ active }) =>
      active ? " 1fr 1fr 1fr 1fr" : " 1fr 1fr 1fr"};
  }
  @media (max-width: 1024px) {
    grid-template-columns: ${({ active }) =>
      active ? " 1fr 1fr 1fr" : " 1fr 1fr"};
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 14px;
    grid-row-gap: 14px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 14px;
    grid-row-gap: 14px;
  }
  @media (max-width: 389px) {
    grid-template-columns: 1fr;
    grid-column-gap: 14px;
    grid-row-gap: 14px;
  }
`;

export default TabItems;
