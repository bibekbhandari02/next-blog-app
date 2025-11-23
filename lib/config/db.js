import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        throw error;
    }
}