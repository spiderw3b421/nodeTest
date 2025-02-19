import express from "express";
const app = express();

const port = 5500;

const start = () => {
  app.listen(port, () => console.log(`server is listening on port 5500`));
};

start();
