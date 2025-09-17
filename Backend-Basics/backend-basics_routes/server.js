import { createServer } from "node:http";

export const server = createServer((req, res) => {
  if (req.url === "/api/fish/1") {
    res.statusCode = 200;
    res.end("Shrimp");
  } else if (req.url === "/api/fish/2") {
    res.statusCode = 200;
    res.end("Anemonefish");
  } else {
    res.statusCode = 400;
    res.end("Not found");
  }
});
