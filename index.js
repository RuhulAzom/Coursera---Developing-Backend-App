const express = require("express");
const app = express();

app.get("/", (req, res) => {
  try {
    return res.status(200).json({
      status: 200,
      message: "Server Running",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
});

app.listen(4000, () => {
  console.log("Server is listen at port 4000");
});
