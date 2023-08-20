'use strict';

var Sequelize = require('sequelize');



var info = {
    "revision": 2,
    "name": "add-column_migration",
    "created": "2022-12-22T12:42:57.985Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createColumn",
    params: ["users", "Delete"]
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
