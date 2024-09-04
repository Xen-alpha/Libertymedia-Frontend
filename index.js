import express from "express";

import path from "path";

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.resolve(import.meta.dirname, "dist", "index.html"));
});

app.use(express.static(path.resolve(import.meta.dirname, "dist")));

app.listen(8080, () => {
  console.log("Service opened on port 8080");
});
