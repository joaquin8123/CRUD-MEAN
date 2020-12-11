const Employees = require('../models/Employee')

const employeesControllers = {}

employeesControllers.getEmployees = async (req, res) => {
    res.status(200).json(await Employees.findAll())
 }
employeesControllers.createEmployee = async (req, res) => { 
    const nuevoEmployee = await  Employees.create(req.body)
    res.status(200).json(nuevoEmployee)
}
employeesControllers.getEmployee = async (req, res) => { 
   const {id} = req.params
    employee = await Employees.findAll({
        where: {
          id: id
        }
      })
    res.status(200).json(employee)
}
employeesControllers.editEmployee = async (req, res) => { 
    const {id} = req.params
    employee = await Employees.update(req.body, {
        where: {
          id: id
        }
      });
    if(employee == 0){
        res.json({status: "No existe el empleado"})
    } else{
        res.status(200).json({status: "Empleado Actualizado"})
    }
}
employeesControllers.deleteEmployee = async (req, res) => {
    const {id} = req.params
    employee = await Employees.destroy({
        where: {
          id: id
        }
      })
    if(employee == 0){
        res.json({status: "No existe el empleado"})
    } else{
        res.status(200).json({status: "Empleado Eliminado"})
    }
    
 }


module.exports = employeesControllers