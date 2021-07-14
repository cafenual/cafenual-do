import mongoose, { Document, Model, Schema } from "mongoose";

export interface INotice {
  title: string;
  content: string;
  important: boolean;
}

export interface INoticeMethod extends INotice, Document {}
export interface INoticeStatics extends Model<INoticeMethod> {}

const NoticeSchema: Schema<INoticeMethod> = new Schema(
  {
    title: {
      type: String,
      maxLength: 50,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    important: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Notice = mongoose.model<INoticeMethod, INoticeStatics>(
  "Notice",
  NoticeSchema
);

export default Notice;
