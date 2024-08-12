import mongoose from "mongoose";

mongoose.set('bufferCommands', false);

const connectDatabase = async () => {
  try {
    const mongoUrl = process.env.MONGOOSE_URL;
    await mongoose.connect(mongoUrl, {
      autoCreate: false,
    });
    console.log(`Database connected successfully.`);
  } catch (err) {
    console.error('Database connection error:', err.message);
    console.error(err);
    throw err;
  }
};

export default connectDatabase;
