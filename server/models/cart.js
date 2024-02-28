module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        cartid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       payed: {
        type: DataTypes.BOOLEAN
       }
    }, 
    { underscored: true }
    );
};