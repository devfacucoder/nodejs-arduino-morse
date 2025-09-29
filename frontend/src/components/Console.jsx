import React, { useContext } from "react";
import { ctxListMsg } from "../App";
function Console() {
  const [listMsg, setListMsg] = useContext(ctxListMsg);
  
  return (
    <div className="w-[85%] h-[200px] overflow-y-auto bg-green-950">
      <ul className="px-2 text-white font-mono">
        {listMsg.map((e, index) => (
          <li key={index}>{e}.</li>
        ))}
      </ul>
    </div>
  );
}

export default Console;
