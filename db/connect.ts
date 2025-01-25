const mongoose = require('mongoose');

const connectDB = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('🟢 MongoDB Connected Successfully');
    } catch (error) {
        console.error('🔴 MongoDB Connection Failed:', error.message);
        process.exit(1); // Exit the process if the connection fails
    }
};

module.exports = connectDB;
