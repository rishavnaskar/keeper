# Keeper

Keeper is a basic note-keeping app, similar to Google Keep, built using the **MERN stack** (MongoDB, Express, React, Node.js). It allows users to create, edit, and store notes with a clean and simple UI.

## MERN Stack Overview
- **MongoDB**: Stores notes data as documents in a NoSQL database.
- **Express**: Backend framework to handle API requests.
- **React**: Frontend library for building user interfaces.
- **Node.js**: Runs JavaScript on the server-side.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/rishavnaskar/keeper.git
   cd keeper
   ```

2. **Install dependencies** for both server and client:
   ```bash
   npm install
   cd client
   npm install
   ```

3. **Initialize MongoDB**:
   - Make sure MongoDB is installed and running on your machine.
   - Create a `.env` file in the root with the MongoDB URI:
     ```
     MONGO_URI=your_mongodb_connection_string
     ```

4. **Run the app**:
   ```bash
   npm run dev
   ```

The app will be available at `http://localhost:3000`.
