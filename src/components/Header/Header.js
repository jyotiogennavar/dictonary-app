import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constant";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LogoImage from "../../assets/images/logo.svg";
import FontSwitcher from "../FontSwitcher/FontSwitcher";
import { Moon } from "lucide-react";

const Header = ({ toggleTheme }) => {
  return (
    <Wrapper>
      <Logo src={LogoImage} alt="Logo" />
      <HeaderButtons>
        <FontSwitcher />
        <ThemeChanger>
          {/* Toggle switch for theme */}
          <ToggleSwitch onToggle={toggleTheme} />
          <StyledMoon toggleTheme={toggleTheme}/>
        </ThemeChanger>
      </HeaderButtons>
    </Wrapper>
  );
};

// Styled components
const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  color: ${({ toggleTheme }) =>
    toggleTheme === "light" ? COLORS[600] : COLORS[100]};
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

const StyledMoon = styled(Moon)`
 color: ${(props) => props.theme.toggleBg};
`;

export default Header;
