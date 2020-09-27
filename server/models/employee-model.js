const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        id: { type: Number, required: false },
        name: { type: String, required: true },
        birthdate: { type: String, required: false },
        department: { type: String, required: true },
        shirtsize: { type: String, required: false },
        enabled: { default: true, type: String, required: false },
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)
