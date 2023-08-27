export default function BombGuess({ red, dispatch, index }) {
  let background = "bg-empty-cell-color";
  if (red) {
    background = "bg-red-flag";
  }
  const handleRightClick = (e) => {
    e.preventDefault();
    dispatch({ type: "UNMARK_POTENTIAL_BOMB", payload: index });
  };
  return (
    <div
      onContextMenu={handleRightClick}
      className={`w-14 h-14 phone:w-8 phone:h-8 ${background} border-6 text-4-5xl phone:left-0 phone:text-2xl flex items-center justify-center `}
      style={{ borderStyle: "outset" }}
    >
      🚩
    </div>
  );
}
