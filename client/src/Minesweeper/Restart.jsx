import { useState } from "react";
export default function Restart({ mood, dispatch }) {
  let text = "";
  if (mood === "smile") {
    text = "🙂";
  } else if (mood === "surprise") {
    text = "😮";
  } else if (mood === "dead") {
    text = "😵";
  } else if (mood === "cool") {
    text = "😎";
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "RESTART" });
  };
  let [pressed, setPressed] = useState(false);
  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={handleClick}
      className="w-20 h-20 phone:w-16 phone:h-16 bg-empty-cell-color border-8 phone:border-6 ring-4 ring-restart-border text-6xl phone:text-5xl flex items-center justify-center"
      style={{ borderStyle: pressed ? "inset" : "outset" }}
    >
      {text}
    </div>
  );
}
