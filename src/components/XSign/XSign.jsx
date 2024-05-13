import "./XSign.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";

const XSign = ({ id }) => {
  const { victory } = useContext(AppContext);
  return (
    <div
      className={
        victory && victory.winStreak.includes(id) ? "x-sign-winning" : "x-sign"
      }
    ></div>
  );
};

export default XSign;
