import { useState } from "react";

export const Range = () => {
  const [left, setLeft] = useState(60);

  return (
    <div className="relative cursor-pointer w-full h-1 py-3 overflow-hidden ">
      <div className="absolute w-full h-[3px] bg-[var(--color-border)] -translate-y-1/2 rounded-lg"></div>
      <div
        className="absolute w-full h-[3px] bg-[var(--color-green-second)] -translate-y-1/2 rounded-lg"
        style={{ width: `${left}%` }}
      ></div>
      <div
        className="absolute w-[19px] h-[19px] bg-[var(--color-green-second)] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${left}%` }}
      ></div>
    </div>
  );
};
