const http = require("http");
const express = require("express");
var cors = require("cors");

const app = express();
app.use(express.json());

// enabling cors
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/books", require("./routes/books"));

app.use("/", function (req, res) {
	res.send("Hey, I'm here! :)");
});

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT);
console.debug("Server listening on port: " + PORT);
