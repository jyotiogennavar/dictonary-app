import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../constant";
import { motion } from "framer-motion";

const ToggleSwitch = ({ onToggle }) => {
  const [isChecked, setIsChecked] = useState();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (onToggle) {
      onToggle(!isChecked);
    }
  };

  return (
    <Wrapper
      type="button"
      role="switch"
      aria-checked={isChecked}
      onClick={handleToggle}
    >
      <Ball
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
        animate={{ x: isChecked ? "100%" : "0%" }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  display: block;
  width: 1.8rem;
  height: 0.9rem;

  border-radius: 1000px;
  border: none;
  padding: 4px;
  cursor: pointer;
  box-sizing: content-box;
  outline-offset: 4px;

  background-color: ${(props) => props.theme.toggleBg};
`;

const Ball = styled(motion.span)`
  display: block;
  height: 100%;
  aspect-ratio: 1/1;
  background-color: ${COLORS[100]};
  border-radius: 1000px;
`;

export default ToggleSwitch;
