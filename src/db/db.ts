import mongoose from "mongoose";
import logger from "@/helpers/logger";

export const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      logger.error(
        "MONGODB_URI not defined. Please define the environment variables"
      );
      process.exit();
    }
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    logger.error(`Something went wrong while connecting to MongoDB: ${error}`);
    process.exit();
  }
};
