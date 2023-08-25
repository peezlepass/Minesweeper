export default function Bomb({ red }) {
  let background = "bg-empty-cell-color";
  if (red) {
    background = "bg-red-bomb";
  }
  return (
    <div
      className={`w-14 h-14 phone:w-8 phone:h-8 ${background} border-t-4 border-l-4 phone:border-t-2 phone:border-l-2 border-empty-cell-border text-5xl phone:text-2xl flex items-center justify-center`}
    >
      💣
    </div>
  );
}
