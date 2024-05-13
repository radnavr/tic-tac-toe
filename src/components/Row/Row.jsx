import "./Row.css";
import Field from "../Field/Field";

const Row = ({ fields, rowInd }) => {
  return (
    <div className="row">
      {fields.map((field, fieldInd) => (
        <Field key={`${rowInd}${fieldInd}`} column={fieldInd} row={rowInd} />
      ))}
    </div>
  );
};

export default Row;

//id={`${rowInd}${fieldInd}`}
