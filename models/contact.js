'use strict';
module.exports = (sequelize, DataTypes) => {
  const mail_list = sequelize.define("Contact", {
    first_name:  DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  mail_list.associate = function(models) {
    // associations can be defined here
  };
  return mail_list;
};


