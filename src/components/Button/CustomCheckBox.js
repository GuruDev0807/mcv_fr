import styled from "styled-components";
import { Box } from "@mui/material";
import { BsCheck } from "react-icons/bs";
import { useState } from "react";

const CustomCheckBox = ({ data }) => {
  const [flagCheck, setFlagCheck] = useState(false);

  return (
    <StyledComponent
      onClick={() => {
        setFlagCheck(!flagCheck);
      }}
    >
      {!flagCheck ? (
        <IconUnChecked></IconUnChecked>
      ) : (
        <IconChecked>
          <BsCheck />
        </IconChecked>
      )}

      <Text>{data}</Text>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  margin-top: 12px;
`;

const IconUnChecked = styled(Box)`
  display: flex;
  width: 14px;
  height: 14px;
  border: 1px solid #565660;
  border-radius: 4px;
`;

const IconChecked = styled(Box)`
  display: flex;
  width: 16px;
  height: 16px;
  background: #ffae00;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #000f44;
`;

const Text = styled(Box)`
  margin-left: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* White */

  color: #ffffff;

  
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #ffae00;
  }
`;

export default CustomCheckBox;
