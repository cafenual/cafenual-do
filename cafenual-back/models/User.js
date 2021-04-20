import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 10,
  },
  email: {
    type: String,
    trim: true, // 공백을 제거해주는 역할
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    // 일반 유저, 관리자를 나누기 위한 객체  0: 일반유저 1: 관리자 계정
    type: Number,
    default: 0,
  },

  token: {
    // 유효성 관리
    type: String,
  },
});

const User = mongoose.model("User", userSchema)
export default User;
