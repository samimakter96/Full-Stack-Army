import PropTypes from "prop-types";
import shortid from "shortid";
import Button from "../ui/Button";

const OperationSection = ({ handleOperations, handleClear }) => {
  const operations = [
    {
      id: shortid.generate(),
      text: "+",
      onClick: () => handleOperations("+"),
    },
    {
      id: shortid.generate(),
      text: "-",
      onClick: () => handleOperations("-"),
    },
    {
      id: shortid.generate(),
      text: "/",
      onClick: () => handleOperations("/"),
    },
    {
      id: shortid.generate(),
      text: "%",
      onClick: () => handleOperations("%"),
    },
    {
      id: shortid.generate(),
      text: "clear",
      onClick: handleClear,
    },
  ];

  return (
    <div>
      <p>Operations</p>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {operations.map((ops) => (
          <Button key={ops.id} text={ops.text} onClick={ops.onClick} />
        ))}
      </div>
    </div>
  );
};

OperationSection.propTypes = {
  handleOperations: PropTypes.func.isRequired,
  handleClear: PropTypes.func.isRequired,
};

export default OperationSection;
