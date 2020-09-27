import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertEmployee = payload => api.post(`/employee`, payload)
export const getAllEmployees = () => api.get(`/employee`)
export const updateEmployeeById = (id, payload) => api.put(`/employee/${id}`, payload)
export const deleteEmployeeById = id => api.delete(`/employee/${id}`)

const apis = {
    insertEmployee,
    getAllEmployees,
    updateEmployeeById,
    deleteEmployeeById,
}

export default apis
