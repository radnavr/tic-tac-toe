import "./Field.css";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
import OSign from "../OSign/OSign";
import XSign from "../XSign/XSign";

const Field = ({ column, row }) => {
  const { handleFieldClick, matrix } = useContext(AppContext);

  const id = `${row}${column}`;

  return (
    <div
      className="field"
      onClick={() => handleFieldClick(row, column)}
      id={id}
    >
      {matrix[row][column] &&
        (matrix[row][column].sign === "o" ? (
          <OSign id={id} />
        ) : (
          <XSign id={id} />
        ))}
    </div>
  );
};

export default Field;
