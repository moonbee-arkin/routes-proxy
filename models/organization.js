'use strict';
const Sequelize = require('sequelize');
module.exports = (sequelize) => {
    const organization = sequelize.define('organization', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        auth_id: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        company_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        first_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        street: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        postal: {
            type: Sequelize.STRING,
            allowNull: true
        },
        city: {
            type: Sequelize.STRING,
            allowNull: true
        },
        country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tel: {
            type: Sequelize.STRING,
            allowNull: true
        }
    });
    return organization;
};
