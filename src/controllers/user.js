const user = require("../models/user");
const DB_PATH = "db/database.sqlite3";

/*
module.exports = {
	getUsers: (req, res, next) => {},
	createUsers: (req, res, next) => {},
  updateUser: (req, res, next) => {},
  deleteUser: (req, res, next) => {}
}
*/

exports.getUsers = (req, res, next) => {
	// implements like below
	const db = new sqlite3.Database(DB_PATH);
	db.all("SELECT * FROM users", (err, users) => {
		res.status(200).json({ users });
	});
	db.close();
};

exports.createUser = (req, res, next) => {
	// implements like below
	const { id, name, text } = req.body;
	const newUser = new user.User(id, name, text);

	// TODO: db access

	res.status(201).json({ message: "Successfully created!", createdUser: newUser });
};

exports.updateUser = (req, res, next) => {
	// implements like below
	const userId = req.params.userId;

	// TODO: db access

	res.status(204).json({ message: "Successfully updated!" });
};

exports.deleteUser = (req, res, next) => {
	// implements like below
	const userId = req.params.userId;

	// TODO: db access

	res.status(204).json({ message: "Successfully deleted!" });
};
