import mongoose from "mongoose";
const Schema = mongoose.Schema;

const scheduleSchema = mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);
export default Schedule;
