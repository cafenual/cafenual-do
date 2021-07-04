import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment {
  text: string;
  writer: string;
  menu: string;
}

export interface ICommentMethod extends IComment, Document {}
export interface ICommentStatics extends Model<ICommentMethod> {}

const CommentSchema: Schema<ICommentMethod> = new Schema(
  {
    content: {
      type: String,
      required: true,
    },

    writer: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },

    menu: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Menu",
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model<ICommentMethod, ICommentStatics>(
  "Comment",
  CommentSchema
);

export default Comment;
