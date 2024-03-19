module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            unique: true,
            validate: {
              len: [4, 200],
              isEmail: true  
            }  
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [4, 50]
            }
        }
    }, 
    { underscored: true }
    );
};