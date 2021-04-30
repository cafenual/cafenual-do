import mongoose from "mongoose";
import bcrypt from "bcrypt";

const saltRounds = 10;

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

userSchema.pre("save", function (next) {
  // users.js에서  user.save를 하기전에 이 함수 시작
  let user = this;

  if (user.isModified("password")) {
    // password 가 수정 됐으면
    // 비밀번호를 암호화 시킨다
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

const User = mongoose.model("User", userSchema);
export default User;
