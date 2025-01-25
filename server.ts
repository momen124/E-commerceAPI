import http from 'http';
import app from './app';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();


const PORT = process.env.PORT || 5000;

// Create the server
const server = http.createServer(app);

// Start the server

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: Error) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
  });
  

    export default server;