import { useEmployees } from "./EmployeeDataProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";

const contentTarget = document.querySelector(".employees")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            // Find the related department for the current employee
            const foundDepartment = departments.find(
                (department) => {
                    return department.id === employeeObject.departmentId
                }
            )
            return Employee(employeeObject, foundComputer, foundDepartment)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}