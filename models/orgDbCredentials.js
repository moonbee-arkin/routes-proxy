'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const orgDbCredentials = sequelize.define('org_db_credentials', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        auth_id: {
            type: Sequelize.INTEGER
        },
        db_name: {
            type: Sequelize.STRING
        },
        db_username: {
            type: Sequelize.STRING
        },
        db_password: {
            type: Sequelize.STRING
        },
        db_host: {
            type: Sequelize.STRING
        },
        pm2_port: {
            type: Sequelize.INTEGER
        },
        global_url_token: {
            type: Sequelize.STRING
        },
    });
    return orgDbCredentials;
};
