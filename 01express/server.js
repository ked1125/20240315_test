console.log("hello express!!!");

const express = require("express");
const app = express();

const users = [];

app.use(express.json());

app.get("/user", function (req, res) {
  return res.send({ users: users });
});

app.post("/user", function (req, res) {
  //   console.log(req.body);
  //   users.push({ name: "홍길동", age: 30 });
  users.push({
    name: req.body.name,
    age: req.body.age,
  });
  return res.send({ success: true });
});

app.listen(3000);

// app.get().listen();
// => 동일하게
// app.get()
// app.listen()
