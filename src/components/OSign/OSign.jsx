import "./OSign.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const OSign = ({ id }) => {
  const { victory } = useContext(AppContext);
  return (
    <div
      className={
        victory && victory.winStreak.includes(id) ? "o-sign-winning" : "o-sign"
      }
    ></div>
  );
};

export default OSign;
