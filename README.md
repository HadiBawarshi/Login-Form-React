# Login Form React

A simple React application that consumes a C# ASP.NET Web API for user authentication. The application represents a login form where users can enter their email and password. Upon submission, the credentials are sent to the backend via Axios. Based on the backend response, a popup is shown to the user.

## Project Overview

This React app is designed to demonstrate a login form with authentication using a backend API built in C#. It provides a simple, functional UI where users can log in by entering their email and password.

## Setup and Installation

### Prerequisites

- Make sure you have Node.js installed (LTS version recommended).
- You need the backend API (C# ASP.NET) running locally or online. Instructions for setting up the backend are available in the [backend repository](https://github.com/HadiBawarshi/AuthAPI-Clean.git).

### Steps to Run the Application

1. Clone the repository:
   ```bash
   git clone https://github.com/HadiBawarshi/Login-Form-React.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Login-Form-React
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Open the `.env` file and configure the backend API URL.
   - You will find two environment variables:
     - One for the local backend (the default `localhost` and the default Port).
     - One for the online version of the backend.

5. Start the development server:
   ```bash
   npm run dev
   ```

### Requirements

- Ensure you have Node.js LTS version installed. If you don't have it, download it from [Node.js](https://nodejs.org/).

## Libraries and Tools

- **Axios**: Used for making HTTP requests to the backend API.
- **Vite**: A build tool used for fast development and production builds.
- **Bootstrap**: Used for basic styling and layout components.

## Authentication Flow

1. The React app displays a login form where users can input their email and password.
2. Upon submitting the form, the credentials are sent to the backend API via a POST request using Axios.
3. The backend responds with a success or failure message:
   - On success: A popup or notification is displayed indicating that the login was successful.
   - On failure: An error message is displayed, informing the user of incorrect credentials or an issue with authentication.

## Known Limitations

- The application is **not production-ready** and is only for testing purposes.
- The backend should be running for the frontend to function correctly, whether it's hosted locally or online.
  
## License
This project is open-source and can be modified as needed.

## Author
Hadi Bawarshi
