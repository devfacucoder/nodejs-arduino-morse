import React, { createContext } from "react";

import { useState } from "react";
import Form from "./components/Form";
import Console from "./components/Console";
import ConnectArduino from "./components/ConnectArudiono";
import ViewChannels from "./components/ViewChannels";

export const ctxListMsg = createContext();
function App() {
  const [listMsg, setListMsg] = useState([]);
  return (
    <ctxListMsg.Provider value={[listMsg, setListMsg]}>
      <div className="w-screen h-screen  flex items-center justify-center">
        <div className="bg-[#005757] w-[95%] sm:w-[460px] h-[600px] gap-2 flex flex-col items-center">
          <Form />
          <ViewChannels/>
          <ConnectArduino />
          <Console />
        </div>
      </div>
    </ctxListMsg.Provider>
  );
}

export default App;
