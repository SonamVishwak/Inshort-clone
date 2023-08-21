import mongoose from "mongoose";
const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.ftqt7pt.mongodb.net/gofood?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("database connected successfully");
  } catch (error) {
    console.log(error);
  }
};
export default Connection;
