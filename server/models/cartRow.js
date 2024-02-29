module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart_row', {
        rowId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, { underscored: true }
    );
};