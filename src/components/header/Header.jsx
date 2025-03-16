import "../../styles/header.css";

import HeaderTop from "./HeaderTop";
import HeaderCenter from "./HeaderCenter";
import HeaderBottom from "./HeaderBottom";
import DropsDown from "./DropsDown";
import TradeAssurance from "./TradeAssurance";
import HelpDrop from "./HelpDrop";

import { useLocation } from "react-router-dom";

const Header = () => {

  const location = useLocation();
  const receivedData = location.state;
  // console.log('haeder: ' + receivedData);

  return (
    <header>
      <HeaderTop />

      <HeaderCenter userData={receivedData}/>

      <HeaderBottom />

      <DropsDown />
      <TradeAssurance />

      <HelpDrop />
      
    </header>
  );
};

export default Header;
