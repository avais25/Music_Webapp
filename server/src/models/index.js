const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const config = require("../config/config")

const db = {}
const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options
)
console.log(__dirname)
fs
	.readdirSync(__dirname)
	.filter((file)=> {
		return file !== "index.js"
	})
	.forEach((file)=> {
		const model = sequelize.import(path.join(__dirname,file))
		console.log("model is = ",model)
		db[model.name] = model
	})



db.sequelize = sequelize
db.Sequelize = Sequelize


module.exports = db