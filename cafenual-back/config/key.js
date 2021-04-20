if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

// dev.js 생성후 복붙
// module.exports = {
//     mongoURI:
//       "mongodb+srv://ksmfou98:여기다가 비밀번호 입력@cafenual.3wvli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   };
