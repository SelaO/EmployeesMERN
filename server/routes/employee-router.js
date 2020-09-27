const express = require('express')

const EmployeeCtrl = require('../controllers/employee-ctrl')

const router = express.Router()

router.post('/employee', EmployeeCtrl.createEmployee)
router.delete('/employee/:id', EmployeeCtrl.deleteEmployee)
router.get('/employee', EmployeeCtrl.getEmployees)

module.exports = router
