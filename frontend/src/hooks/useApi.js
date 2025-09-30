const urlBack = import.meta.env.VITE_BACK_URL;
function useApi() {
  const sendToBackArduino = async (requestBody) => {
    try {
      const response = await fetch(urlBack + "/send", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const connectToArduino = async () => {
    try {
      const response = await fetch(urlBack + "/connect");

      if (response.ok) {
        const data = await response.json();
        return data;
      }

      return {message:"error en el puerto reconecta el arduino"}

    } catch (error) {
      console.log(error);
      return {message:"error en el puerto reconecta el arduino"}
    }
  };

  const getChannels = async () => {
    try {
      const response = await fetch(urlBack + "/channel");

      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    sendToBackArduino,
    connectToArduino,
    getChannels,
  };
}
export default useApi;
