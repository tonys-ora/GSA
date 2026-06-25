# SkyStake Frontend

Welcome to the SkyStake Frontend repository! This project is the frontend for a casino platform built with modern web technologies. It includes features like user authentication, game integration, payment processing, and more.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Multi-language Support**: Integrated with `i18next` for internationalization.
- **State Management**: Uses Redux Toolkit for efficient state management.
- **Form Handling**: Utilizes `react-hook-form` and `yup` for form validation.
- **Real-time Updates**: Integrated with `socket.io-client` for real-time notifications.
- **Animations**: Enhanced with `gsap` for smooth animations.
- **Payment Integration**: Ready for payment gateway integration.
- **QR Code Generation**: Uses `qrcode.react` for QR code generation.

## Technologies Used

- **Frontend Framework**: React (v18)
- **Styling**: Emotion, Material-UI (MUI)
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **API Communication**: Axios
- **Internationalization**: i18next
- **Animation**: GSAP
- **Build Tool**: Webpack
- **Linting & Formatting**: ESLint, Prettier
- **Type Checking**: TypeScript

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/silverskystake-frontend.git
   cd silverskystake-frontend
2. **Install dependencies**:
   ```sh
   npm install
3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the required environment variables. Refer to `.env.example` for the necessary keys.
   ```plaintext
   REACT_APP_API_URL=https://api.yourdomain.com
   REACT_APP_SOCKET_URL=wss://socket.yourdomain.com
   ```

4. **Run the development server**:
      ```sh 
      npm run dev
5. **Open the app**:
   The app should automatically open in your default browser at `http://localhost:8080`. If not, you can manually navigate to the URL.

## Available Scripts
- `npm start`: Starts the production server.

- `npm run dev`: Starts the development server with hot reloading.

- `npm run build`: Builds the project for production.

- `npm run lint`: Runs ESLint to check and fix code issues.

- `npm run format`: Formats the code using Prettier.

## Configuration
- **Webpack**: Configuration is located in `webpack.config.js`.

- **ESLint**: Configuration is located in `.eslintrc.js`.

- **Prettier**: Configuration is located in `.prettierrc`.

## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.

2. Create a new branch (`git checkout -b feat/YourFeatureName`).

3. Commit your changes (`git commit -m 'Add some feat`').

4. Push to the branch (`git push origin feat/YourFeatureName`).

5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any questions or inquiries, please contact the project maintainers at [superdev947](https://github.com/superdev947).
