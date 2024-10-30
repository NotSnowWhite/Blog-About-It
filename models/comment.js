const sequelize = require("../config/connection");
const { Model, DataTypes } = require(sequelize);

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull:false,
            autoIncrement: true,
        }
    },
    {
        sequelize,
        modelName: 'comment',
        freezeTableName: true, 
    }
);