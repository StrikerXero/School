'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "posts", deps: []
 *
 **/

var info = {
    "revision": 2,
    "name": "posts_initial_migration",
    "created": "2023-01-07T08:21:23.508Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "posts",
        {
            "PostId": {
                "type": Sequelize.INTEGER,
                "field": "PostId",
                "allowNull": false,
                "primaryKey": true,
                "autoIncrement": true
            },
            "PostTitle": {
                "type": Sequelize.STRING,
                "field": "PostTitle"
            },
            "PostBody": {
                "type": Sequelize.STRING,
                "field": "PostBody"
            },
            "UserId": {
                "type": Sequelize.INTEGER,
                "field": "UserId"
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt"
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt"
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
