import mongoose from 'mongoose';

let MONGO_URI = process?.env?.MONGO_URI ?? null;

export const connectToMongo = async (mongoUri?: string) => {
  try {
    if (!MONGO_URI) {
      MONGO_URI = mongoUri as string | null;
    }

    if (!MONGO_URI) {
      throw new Error('MongoDB URI is not provided');
    }

    await mongoose.connect(MONGO_URI);

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', (error as Error).message);
  }
};
