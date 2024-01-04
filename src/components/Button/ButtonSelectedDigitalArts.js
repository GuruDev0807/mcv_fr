import styled from "styled-components";
import { Box } from "@mui/material";
import { useState } from "react";
import { MdClose } from "react-icons/md";

const ButtonSelectedDigitalArts = ({
  data,
  index,
  textSelectedDigitalArts,
  setTextSelectedDigitalArts,
}) => {
  const [flagDelete, setFlagDelete] = useState(false);

  return (
    <StyledComponent active={flagDelete ? 1 : 0}>
      <TextButton>{data}</TextButton>
      <ButtonDelete
        onClick={() => {
          console.log("index:", index);
          console.log("text:", textSelectedDigitalArts);
          setFlagDelete(true);
          let temp = textSelectedDigitalArts;
          temp.splice(index, 1);
          setTextSelectedDigitalArts(temp);
          //   console.log(temp);
        }}
      >
        <MdClose />
      </ButtonDelete>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: ${({ active }) => (active ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0px 24px;
  box-sizing: border-box;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #ffae00;
  border-radius: 18px;
  margin-right: 6px;
  margin-bottom: 3px;
  margin-top: 3px;

  transition: 0.5s;
  @media (max-width: 1023px) {
    height: 30px;
  }

  @media (max-width: 900px) {
    height: 26px;
  }
  @media (max-width: 500px) {
    height: 22px;
  }
`;

const TextButton = styled(Box)`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  color: #010101;

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

const ButtonDelete = styled(Box)`
  display: flex;
  font-size: 1.2rem;
  color: #010101;
  margin-left: 6px;
  cursor: pointer;

  transition: 0.5s;
  @media (max-width: 1023px) {
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    font-size: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 0.9rem;
  }
`;

export default ButtonSelectedDigitalArts;
