import React, { useState, useContext } from "react";
import useApi from "../hooks/useApi";
import { ctxListMsg } from "../App";
function Form() {
  const [listMsg, setListMsg] = useContext(ctxListMsg);
  const [textMsg, setTextMsg] = useState("");
  const { sendToBackArduino } = useApi();

  const handleConnectToArduino = async (e) => {
    try {
      e.preventDefault();
      const response = await sendToBackArduino({ msg: textMsg });
      setListMsg(listMsg.concat(response.message))
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={handleConnectToArduino}
      className=" flex flex-col gap-4 py-6 items-center w-full justify-start "
    >
      <div className="flex flex-col w-[85%] px-2">
        <label className="text-white  " htmlFor="inpMsg">
          Mensaje
        </label>
        <input
          onChange={(e) => {
            setTextMsg(e.target.value);
          }}
          type="text"
          id="inpMsg"
          className="h-[40px] text-[20px] px-2  bg-green-300"
        />
      </div>

      <button className="cursor-pointer h-[30px] bg-green-300 px-2 text-[20px] font-mono">
        Enviar Mensaje
      </button>
    </form>
  );
}

export default Form;
