import mongoose from "mongoose";
const Schema = mongoose.Schema;

const commuteSchema = mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Commute = mongoose.model("Commute", commuteSchema);
export default Commute;
