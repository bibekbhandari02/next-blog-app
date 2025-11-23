import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
    if (isConnected) {
        console.log("Using existing database connection");
        return;
    }

    try {
        await mongoose.connect('mongodb+srv://narutobibek000:bibek123@cluster0.8w30m.mongodb.net/blog-app?retryWrites=true&w=majority', {
            serverSelectionTimeoutMS: 5000,
        });
        isConnected = true;
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        throw error;
    }
}