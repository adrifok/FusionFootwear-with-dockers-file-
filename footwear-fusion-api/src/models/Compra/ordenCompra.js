const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("OrdenCompra", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        promotion: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        payment: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        orderStatus: {
            type: DataTypes.ENUM,
            values: ["created", "processing", "shipped", "cancelled", "completed"],
            defaultValue: "created",
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },{ timestamps: false });
};