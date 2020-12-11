const db = require('../database')
const { Sequelize } = require('Sequelize')

const Employee = db.define('employees', {
    id: { 
      type: Sequelize.INTEGER, 
      autoIncrement: true,
      primaryKey: true 
    },
    nombre:{
      type: Sequelize.STRING, 
    },  
    apellido:{
        type: Sequelize.STRING, 
      },  
    salario:{
      type: Sequelize.TEXT
    }   
  },
  {
    tableName: 'employees'
  })


module.exports = Employee