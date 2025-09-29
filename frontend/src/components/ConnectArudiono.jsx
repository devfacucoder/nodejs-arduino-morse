import React, { useContext } from "react";
import useApi from "../hooks/useApi";
import { ctxListMsg } from "../App";

function ConnectArduino() {
  const [listMsg, setListMsg] = useContext(ctxListMsg);

  const { connectToArduino } = useApi();
  const handleConnectToArduino = async () => {
    const response = await connectToArduino();
    setListMsg(listMsg.concat(response.message));
  };
  return (
    <div>
      <button
        onClick={() => {
          handleConnectToArduino();
        }}
        className="cursor-pointer h-[30px] bg-green-300 px-2 text-[20px] font-mono"
      >
        Conectar a Arduino
      </button>
    </div>
  );
}

export default ConnectArduino;
