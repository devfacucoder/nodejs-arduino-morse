import React, { useContext } from "react";
import useApi from "../hooks/useApi";
import { ctxListMsg } from "../App";
function ViewChannels() {
  const { getChannels } = useApi();
  const [listMsg, setListMsg] = useContext(ctxListMsg);
  const handleGetChannel = async () => {
  try {
    const data = await getChannels();

    const paths = data.map(e => e.path);

    setListMsg(prev => prev.concat(paths));
    setListMsg(prev => prev.concat("______"));

  } catch (error) {
    console.log(error);
  }
};

  return (
    <button
      className="cursor-pointer h-[30px] bg-green-300 px-2 text-[20px] font-mono"
      onClick={() => {
        handleGetChannel();
      }}
    >
      Ver Puertos Disponibles
    </button>
  );
}

export default ViewChannels;
