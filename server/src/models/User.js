module.exports = (sequelize, DataTypes)=> {
	console.log("pqr")
	var table = sequelize.define("Song",{
		songName: {
			type: DataTypes.STRING,
			unique: true
		},
		lyric: {
			type: DataTypes.STRING
		}
	})
	console.log("table created")
	return table
}