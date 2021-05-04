import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    // 일반 유저, 관리자를 나누기 위한 객체  0: 일반유저 1: 매니저 계정 2: 관리자 계정
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

userSchema.methods.comparePassword = function (plainPassword, cb) {
  //plainPassword이 입력받은 이메일 값인데 디비에 hash로 저장된 비밀번호호랑 같은지 체크를 해야함
  bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

userSchema.methods.generateToken = function (cb) {
  // jsonwebtoken을 이용해서 token을 생성하기

  let user = this;
  let token = jwt.sign(user._id.toHexString(), "secretToken");
  user.token = token;
  user.save(function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
};

userSchema.statics.findByToken = function (token, cb) {
  let user = this;

  // 토큰을 decode 한다.
  jwt.verify(token, "secretToken", function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

    user.findOne({ _id: decoded, token: token }, function (err, user) {
      if (err) return cb(err);

      cb(null, user);
    });
  });
};

const User = mongoose.model("User", userSchema);
export default User;
