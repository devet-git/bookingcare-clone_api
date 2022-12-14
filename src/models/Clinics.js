'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Clinics extends Model {

		static associate(models) {
			// define association here
		}
	}
	Clinics.init({
		addr: DataTypes.STRING,
		description: DataTypes.TEXT,
		image: DataTypes.STRING,
	}, {
		sequelize,
		modelName: 'Clinics',
	});
	return Clinics;
};