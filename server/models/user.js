module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        userid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(200),
            allowNull: false,
            validate: {
              len: [4, 200],
              isEmail: true  
            }  
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    }, 
    { underscored: true }
    );
};