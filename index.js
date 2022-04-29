const app = require("express")();
const PORT = 3000;

const start = () => {
  console.log("App started!");
  app.get("/", (req, res) => {
    console.log("<Received a request>");
    const { accept } = req.headers;
    const text = accept.includes("text/html") ? "<h1>Hello!<h1>" : "Hello!";
    res.send(text);
  });
};

app.listen(PORT, start);
