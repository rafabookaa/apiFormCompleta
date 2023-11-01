const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Acess-Control-Allow-Origin", "*");
  res.header("Acess-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Acess-Control-Allow-Origin", "Content-Type");
  app.use(cors());
  next();
})


const messages = require("./controllers/messages")

app.use('/message', messages)



app.listen(8080, () => {
  console.log("Servidor rodando. http://localhost:8080");
});