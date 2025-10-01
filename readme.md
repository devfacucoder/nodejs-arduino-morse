# Morse Arduino Node.js Project

This project enables communication between a Node.js backend, a React frontend, and an Arduino device to send Morse code messages via serial port.

## Features

- **Frontend**: Built with React and Vite, styled with Tailwind CSS.
- **Backend**: Node.js server using Express, communicates with Arduino via serial port.
- **Arduino**: Receives Morse code signals and controls an LED accordingly.

## Project Structure

 ├── backend/
 │   ├── arduinoCode/
 │   │   └── morseArduino.ino
 │   ├── conection.js
 │   └── index.js
 ├── frontend/
 │   ├── src/
 │   └── ...
 ├── main.js
 ├── package.json
 └── README.md

## How It Works

1. **Frontend**: Users send messages and interact with available serial ports.
2. **Backend**: Handles requests from the frontend, manages serial port connections, and sends messages to Arduino.
3. **Arduino**: Receives Morse code characters and blinks an LED based on the received signals.

## Getting Started

### Prerequisites

- Node.js
- Arduino (with LED connected to pin 12)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/devfacucoder/nodejs-arduino-morse
   cd nodejs-arduino-morse
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Install frontend dependencies and start development server:
   ```sh
   cd frontend
   npm install
   npm run dev
   ```
4. Start Electron.js:
   ```sh
   npx electron .
   ```

## Usage

- Open the Electron app.
- Use the frontend to connect to the Arduino and send messages.
- View available serial ports and message logs in the console.

## Troubleshooting

- **Serial Port Not Found**: Make sure your Arduino is connected and the correct port is specified in [`backend/conection.js`](backend/conection.js).
- **Frontend Not Loading**: Ensure the Vite dev server is running (`npm run dev` in the `frontend` folder).
- **Electron Issues**: Check that Electron is installed and the backend server is running.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the ISC License.
