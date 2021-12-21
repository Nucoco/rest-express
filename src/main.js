// Modules
const express = require("express");
const bodyParser = require("body-parser");
const sqlite3 = require("sqlite3");
const cors = require("cors");

// Modules within project
const router = require("./routes");

// Literals
const DB_PATH = "db/database.sqlite3";
const API_ROOT = "/api";
const PORT = process.env.port || process.env.PORT || 5000;

// Basic configs
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Register the rooter
app.use(API_ROOT, router);

// Error handling
app.use((err, req, res, next) => {
	res.status(404).json({ message: err.message });
});

// Run
app.listen(PORT, () => {
	console.log(`Run server @${PORT}!`);
});
