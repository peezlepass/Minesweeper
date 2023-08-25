export default function Unknown({ dispatch, index }) {
  const handleLeftClick = (e) => {
    e.preventDefault();
    dispatch({ type: "REVEAL_CELL", payload: index });
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    dispatch({ type: "MARK_POTENTIAL_BOMB", payload: index });
  };
  return (
    <div
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      className="w-14 h-14 phone:w-8 phone:h-8 bg-empty-cell-color border-6 phone:border-4"
      style={{ borderStyle: "outset" }}
    ></div>
  );
}
