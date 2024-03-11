import React from "react";
import styled from "styled-components";
import { COLORS, FONT_FAMILY } from "../../constant";
import { useFont } from "../../FontContext";

const FontSwitcher = () => {
  const { selectedFont, changeFont } = useFont();

  const handleFontChange = (event) => {
    changeFont(event.target.value);
  };

  return (
    <DropDown onChange={handleFontChange} value={selectedFont}>
      <SanSerif value="inter">San Serif</SanSerif>
      <Serif value="lora">Serif</Serif>
      <Mono value="inconsolata">Mono</Mono>
    </DropDown>
  );
};

const DropDown = styled.select`
  border: none;
  appearance: ${COLORS.purple}; 
  padding: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  position: relative;
`;

const SanSerif = styled.option`
  font-family: ${FONT_FAMILY.inter};
  padding-bottom: 0.5rem;
`;
const Serif = styled.option`
  font-family: ${FONT_FAMILY.lora};
  padding-bottom: 0.5rem;
`;
const Mono = styled.option`
  font-family: ${FONT_FAMILY.inconsolata};
  padding-bottom: 0.5rem;
`;
export default FontSwitcher;
