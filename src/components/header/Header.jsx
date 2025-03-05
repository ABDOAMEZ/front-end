import "../../styles/header.css";

import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import HeaderBottom from "./HeaderBottom";
import DropsDown from "./DropsDown";
import TradeAssurance from "./TradeAssurance";
import HelpDrop from "./HelpDrop";

const Header = () => {
  return (
    <header>
      <HeaderTop />

      <HeaderCenter />

      <HeaderBottom />

      <DropsDown />
      <TradeAssurance />

      <HelpDrop />
      
    </header>
  );
};

export default Header;
