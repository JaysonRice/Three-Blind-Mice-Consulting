import { useEmployees } from "./EmployeeDataProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";

const contentTarget = document.querySelector(".employees")

const render = employeesToRender => {
    const computers = useComputers()

    contentTarget.innerHTML = employeesToRender.map(
        (employeeObject) => {
            // Find the related computer for the current employee
            const foundComputer = computers.find(
                (computer) => {
                    return computer.id === employeeObject.computerId
                }
            )
            return Employee(employeeObject, foundComputer)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}