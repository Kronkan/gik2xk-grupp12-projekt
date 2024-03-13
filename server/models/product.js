module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        productId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [2, 100] 
            }
        },
        description: {
            type: DataTypes.STRING(5000),
            allowNull: false
           
        },
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
                isUrl: true
            }
        }
    }, 
    { underscored: true }
    );
};