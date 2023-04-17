const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("DataUser", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      //value: ["last_name"],
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
     // value: ["phone"],
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
     // value: ["address"],
      allowNull: false,
    },
  },{ timestamps: false });
};
