let customerEmployees = []

export const useCustomerEmployees = () => customerEmployees.slice()

export const getCustomerEmployees = () => fetch("http://localhost:8088/customeremployees")
    .then(res => res.json())
    .then(data => customerEmployees = data)