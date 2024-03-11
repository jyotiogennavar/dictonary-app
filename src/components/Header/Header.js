import React from "react";
import styled from "styled-components";

import { COLORS} from "../../constant";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LogoImage from "../../assets/images/logo.svg";
import FontSwitcher from "../FontSwitcher/FontSwitcher";
import { Moon, Sun } from "lucide-react";

const Header = ({ toggleTheme }) => {
  console.log("Current Theme:", toggleTheme);

  return (
    <Wrapper>
      <Logo src={LogoImage} alt="Logo" />
      <HeaderButtons>
        <FontSwitcher />
        <ThemeChanger>
          <ToggleSwitch onToggle={toggleTheme} />
          {toggleTheme === "light" ? <WhiteSun /> : <Moon />}
        </ThemeChanger>
      </HeaderButtons>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  max-width: 90ch;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 2rem;
`;

const ThemeChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border-left: 1px solid ${COLORS[400]};
  padding-left: 1rem;
`;

const WhiteSun = styled(Sun)`
  color: white;
`;

export default Header;
