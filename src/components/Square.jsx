const Square = ({ onClick, value }) => {
  return (
    <button className={`square ${value ? "" : "allow"}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
