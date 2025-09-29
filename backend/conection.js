import { SerialPort } from "serialport";
export const viewListOfPort = async () => {
  try {
    const ports = await SerialPort.list();
    return ports.map((p) => ({
      path: p.path,
      manufacturer: p.manufacturer || "Desconocido",
    }));
  } catch (err) {
    console.error("❌ Error al listar puertos:", err);
    return [];
  }
};
let port = null;
const conectionToArduino = () => {
  return new Promise((resolve, reject) => {
    try {
      port = new SerialPort({ path: "COM3", baudRate: 9600 });

      port.on("open", () => {
        console.log("✅ Puerto serie abierto");
        resolve("Puerto abierto");
      });

      port.on("error", (err) => {
        console.error("❌ Error en el puerto:", err);
        reject("Error en el puerto");
      });

      port.on("close", () => {
        console.warn("⚠️ Puerto serie cerrado, Arduino desconectado");
      });
    } catch (error) {
      console.error("❌ Error al conectar a Arduino:", error);
      reject("Error al conectar a Arduino");
    }
  });
};
const sendMsgToArduino = (msg) => {
  if (!port || !port.isOpen) {
    console.warn("⚠️ No hay puerto abierto, mensaje no enviado");
    return Promise.resolve({ message: "No hay puerto abierto", code: 404 });
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      port.write(msg, (err) => {
        if (err) {
          console.error("❌ Error al escribir:", err);
          resolve({ message: "Error al escribir", code: 403 });
        } else {
          console.log("📤 Mensaje enviado al Arduino:", msg);
          resolve({ message: "Mensaje enviado", code: 200 });
        }
      });
    }, 2000);
  });
};

export { conectionToArduino, sendMsgToArduino };
