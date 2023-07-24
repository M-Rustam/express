import mongoose from 'mongoose';


function dbConnect() {
  main().catch(err => console.log(err));

  const db = mongoose.connection;

  db.once('open', () => {
    console.log('CONNECTED');
  });
  async function main() {
    await mongoose.connect('mongodb://localhost:27017/express');
  }
}

export default dbConnect;