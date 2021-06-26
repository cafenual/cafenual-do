import mongoose, { Document, Schema } from "mongoose";
import validator from "validator";

export interface IUser extends Document {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  address: string;
  addressDetail: string;
}

const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is not Exist");
        }
      },
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password can not contain a word password");
        }
      },
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true,
    },

    wage: {
      type: Number,
      trim: true,
      default: 0,
    },

    status: {
      type: String,
      enum: ["재직자", "퇴직자"],
      default: "재직자",
    },

    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
