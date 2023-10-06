import mongoose from 'mongoose';

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set('stricktQuery', true);

  if (isConnected) {
    console.log('Mongodb is connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'fasco',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log('Mongodb is connected');
  } catch (error) {
    console.log(error);
  }
};
