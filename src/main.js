// Modules
const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const cors = require("cors");

// Modules within project
const taskRouter = require("./routes/tasks");
const userRouter = require("./routes/users");

// Literals
const API_ROOT = "/api";
const PORT = process.env.port || process.env.PORT || 5000;

// Basic configs
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Register rooters
app.use(`${API_ROOT}/tasks`, taskRouter);
app.use(`${API_ROOT}/users`, userRouter);

// Error handling
app.use((err, req, res, next) => {
	res.status(404).json({ message: err.message });
});

// Run
app.listen(PORT, () => {
	console.log(`Run server @${PORT}!`);
});
