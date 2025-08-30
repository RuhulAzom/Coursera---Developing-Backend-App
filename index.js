const express = require("express");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const auth_routes = require("./router/auth_users.js");
const genl_routes = require("./router/general.js");
const middlewareAuth = require("./lib/middlewareAuth.js");
const authenticatedUser = require("./lib/authenticatedUser.js");
const users = require("./router/usersdb.js");
const doesExist = require("./lib/doesExist.js");

const app = express();

app.use(express.json());
app.use(
  session({ secret: "fingerprint", resave: true, saveUninitialized: true })
);

const PORT = 5000;

app.use("/auth", middlewareAuth, auth_routes);
app.use("/", genl_routes);

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username && password) {
    if (!doesExist(username)) {
      users.push({ username: username, password: password });
      return res
        .status(200)
        .json({ message: "User successfully registered. Now you can login" });
    } else {
      return res.status(404).json({ message: "User already exists!" });
    }
  }
  return res.status(404).json({ message: "Unable to register user." });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(404).json({ message: "Error logging in" });
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign(
      {
        data: password,
      },
      "access",
      { expiresIn: 60 * 60 }
    );
    req.session.authorization = {
      accessToken,
      username,
    };
    return res.status(200).json({ message: "User successfully logged in" });
  } else {
    return res
      .status(208)
      .json({ message: "Invalid Login. Check username and password" });
  }
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
