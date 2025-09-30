import express from "express";
import {
  conectionToArduino,
  sendMsgToArduino,
  viewListOfPort,
} from "./conection.js";

import translateMorse from "./translateMorse.js";

import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/channel", async (req, res) => {
  const list = await viewListOfPort();
  res.status(200).json({ data: list });
});

app.get("/connect", async (req, res) => {
  try {
    const resConnection = await conectionToArduino();
    res.status(200).json({ message: "Puerto Conectado" });
  } catch (errMsg) {
    res.status(500).json({ message: errMsg });
  }
});

app.post("/send", async (req, res) => {
  if (!req.body.msg) {
    return res.status(400).json({ message: "No se recibió mensaje" });
  }
  const dataForArduin = translateMorse(req.body.msg);
  const result = await sendMsgToArduino(dataForArduin);
  console.log(result);
  res.status(200).json({ message: result.message, msg: result.msg });
});

app.listen(4000, () => {
  console.log("🚀 Server abierto en 4000");
});
