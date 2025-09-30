# Morse Arduino Node.js Project

This project enables communication between a Node.js backend, a React frontend, and an Arduino device to send Morse code messages via serial port.

## Features

- **Frontend**: Built with React and Vite, styled with Tailwind CSS.
- **Backend**: Node.js server using Express, communicates with Arduino via serial port.
- **Arduino**: Receives Morse code signals and controls an LED accordingly.

## Project Structure

 ├── backend/ │ ├── arduinoCode/ │ │ └── morseArduino.ino │ ├── conection.js │ └── index.js ├── frontend/ │ ├── src/ │ └── ... ├── main.js ├── package.json └── README.md


## How It Works

1. **Frontend**: Users send messages and interact with available serial ports.
2. **Backend**: Handles requests from the frontend, manages serial port connections, and sends messages to Arduino.
3. **Arduino**: Receives Morse code characters and blinks an LED based on the received signals.

## Getting Started

### Prerequisites

- Node.js
- Arduino (with LED connected to pin 13)
- npm

### Installation

1. Clone the repository.
2. Install backend dependencies:
   ```sh
   npm install


   cd frontend
npm install

Running the Project