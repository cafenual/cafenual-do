import mongoose from "mongoose";
const Schema = mongoose.Schema;

const noticeSchema = mongoose.Schema(
  {
    writer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    noticeTitle: {
      type: String,
    },
    noticeContent: {
      type: String,
    },
    noticeHit: {  // 조회수
      type: Number,
    },
  },
  { timestamps: true }
);

const Notice = mongoose.model("Notice", noticeSchema);
export default Notice;
