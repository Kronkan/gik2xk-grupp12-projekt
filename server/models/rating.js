module.exports = (sequelize, DataTypes) => {
    return sequelize.define('rating', {
        ratingId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false
        }
    }, 
    { underscored: true }
    );
};