import mongoose from "mongoose";

mongoose.connect("mongodb+srv://dc1994:1234@dc1994.kenij.mongodb.net/livros-node");

let db = mongoose.connection;
export default db;