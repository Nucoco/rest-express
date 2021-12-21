const task = require("../models/task");
const DB_PATH = "db/database.sqlite3";

/*
module.exports = {
	getTasks: (req, res, next) => {},
	createTasks: (req, res, next) => {},
  updateTask: (req, res, next) => {},
  deleteTask: (req, res, next) => {}
}
*/

exports.getTasks = (req, res, next) => {
	// implements like below
	const db = new sqlite3.Database(DB_PATH);
	db.all("SELECT * FROM tasks", (err, tasks) => {
		res.status(200).json({ tasks });
	});
	db.close();
};

exports.createTask = (req, res, next) => {
	// implements like below
	const { id, name, text } = req.body;
	const newTask = new task.Task(id, name, text);

	// TODO: db access

	res.status(201).json({ message: "Successfully created!", createdTask: newTask });
};

exports.updateTask = (req, res, next) => {
	// implements like below
	const taskId = req.params.taskId;

	// TODO: db access

	res.status(204).json({ message: "Successfully updated!" });
};

exports.deleteTask = (req, res, next) => {
	// implements like below
	const taskId = req.params.taskId;

	// TODO: db access

	res.status(204).json({ message: "Successfully deleted!" });
};
