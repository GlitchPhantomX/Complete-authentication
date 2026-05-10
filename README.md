# Complete Authentication System

A robust and secure authentication system built with Node.js, Express, and MongoDB. This project provides a full-featured authentication flow, including email verification, session management, and JWT-based security.

## Features

- **User Registration**: Secure sign-up process with password hashing.
- **Email Verification**: OTP-based verification using Nodemailer and Google OAuth2.
- **Secure Login**: Authentication with SHA-256 password hashing.
- **Session Management**: Tracks IP addresses and User-Agents for each session.
- **JWT Authentication**: Uses Access Tokens (15m expiry) and Refresh Tokens (7d expiry).
- **Secure Cookies**: Refresh tokens are stored in `httpOnly` and `secure` cookies.
- **Global Logout**: Ability to revoke all active sessions for a user.
- **Profile Management**: Secure endpoint to retrieve the current user's profile.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Security**: JSON Web Tokens (JWT), Crypto (SHA-256)
- **Email Service**: Nodemailer with Google OAuth2
- **Utilities**: cookie-parser, morgan, dotenv

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)
- Google Cloud Project credentials for OAuth2 (for email service)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd complete-authentication
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_REFRESH_TOKEN=your_google_refresh_token
   GOOGLE_USER=your_gmail_address
   ```

## Running the Application

### Development Mode
Runs the server with `nodemon` for automatic restarts on file changes.
```bash
npm run dev
```

The server will start on `http://localhost:3000`.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user and send verification OTP. |
| `POST` | `/api/auth/verify-email` | Verify user email using the OTP sent to their email. |
| `POST` | `/api/auth/login` | Authenticate user and receive access token + refresh cookie. |
| `GET` | `/api/auth/get-me` | Get current user's profile (Requires Bearer Token). |
| `GET` | `/api/auth/refresh-token` | Refresh the access token using the refresh cookie. |
| `GET` | `/api/auth/logout` | Invalidate current session and clear refresh cookie. |
| `GET` | `/api/auth/logout-all` | Invalidate all active sessions for the user. |

## Project Structure

```text
├── src/
│   ├── config/         # Database and app configuration
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   ├── services/       # External services (Email)
│   ├── utils/          # Helper functions
│   └── app.js          # Express app setup
├── server.js           # Entry point
└── .env                # Environment variables
```

## Security Considerations

- **Password Hashing**: Passwords are never stored in plain text.
- **Token Revocation**: Refresh tokens can be revoked server-side to terminate sessions.
- **Cookie Security**: `httpOnly` prevents XSS, and `secure` ensures transmission over HTTPS.
- **Input Tracking**: Sessions include metadata like IP and User-Agent for security audits.

## License

This project is licensed under the ISC License.
