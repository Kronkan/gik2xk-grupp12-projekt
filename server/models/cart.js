module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        cartId: {
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