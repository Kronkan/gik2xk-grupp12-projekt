'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      (file.indexOf('.') !== 0) &&
      (file !== basename )&&
      (file.slice(-3) === '.js'));
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// DATABAS RELATIONER

db.cart.belongsTo(db.user, { 
  foreignKey: 'userId', 
  allowNull: false
});
db.user.hasMany(db.cart, {
  foreignKey: 'userId',
  allowNull: false,
  onDelete: 'CASCADE'
});


db.rating.belongsTo(db.user, {
  foreignKey: 'userId', 
  allowNull: false
});
db.user.hasMany(db.rating, {
  foreignKey: 'userId',
  allowNull: false
});


db.rating.belongsTo(db.product, { 
  foreignKey: 'productId', 
  allowNull: false
});
db.product.hasMany(db.rating, {
  foreignKey: 'productId',
  allowNull: false,
  onDelete: 'CASCADE'
});

// DIREKTA KOPPLINGAR ISTÄLLET FÖR THROUGH
db.cart.hasMany(db.cart_row, { 
  foreignKey: 'cartId', 
  allowNull: false
});
db.cart_row.belongsTo(db.cart, { 
  foreignKey: 'cartId', 
  allowNull: false
});

db.product.hasMany(db.cart_row, { 
  foreignKey: 'productId', 
  allowNull: false
});
db.cart_row.belongsTo(db.product, { 
  foreignKey: 'productId', 
  allowNull: false
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
