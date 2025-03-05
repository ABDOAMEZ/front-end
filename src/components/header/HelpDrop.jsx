import { Link } from "react-router-dom";

const HelpDrop = () => {
    
  const showHelpDrop = () => {
    document.querySelector("#Principaletrade-help").classList.add("down");
  };

  const hideHelpDrop = () => {
    document.querySelector("#Principaletrade-help").classList.remove("down");
  };

  return (
    <div
      onMouseEnter={showHelpDrop}
      onMouseLeave={hideHelpDrop}
      id="Principaletrade-help"
      className="helpCenter-drop"
    >
      <div className="helCentrale-container">
        <div className="buyers">
          <Link>
            <img loading="lazy" src={require("../../assets/images/buyers.png")} alt="" />
            <p>For buyers</p>
          </Link>
        </div>

        <div className="sellers">
          <Link>
            <img loading="lazy" src={require("../../assets/images/sellers.png")} alt="" />
            <p>For sellers</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpDrop;
