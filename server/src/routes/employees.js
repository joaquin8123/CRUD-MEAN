const { Router } = require('express')
const { route } = require('../app')
const router = Router()
const employeesControllers = require('../controllers/employees.js')


router.get('/employees', employeesControllers.getEmployees)
router.post('/employees', employeesControllers.createEmployee)
router.get('/employees/:id', employeesControllers.getEmployee)
router.put('/employees/:id', employeesControllers.editEmployee)
router.delete('/employees/:id', employeesControllers.deleteEmployee)

module.exports = router