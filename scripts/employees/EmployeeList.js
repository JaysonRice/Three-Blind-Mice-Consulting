import { useEmployees } from "./EmployeeDataProvider.js";
import { Employee } from "./Employee.js";
import { useComputers } from "../computers/ComputerDataProvider.js";
import { useDepartments } from "../departments/DepartmentDataProvider.js";
import { useLocations } from "../locations/LocationProvider.js";

const contentTarget = document.querySelector(".employees")

const render = employeesToRender => {
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    
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
            // Find the related location for the current employee
            const foundLocation = locations.find(
                (location) => {
                    return location.id === employeeObject.locationId
                }
            )
            return Employee(employeeObject, foundComputer, foundDepartment, foundLocation)
        }
    ).join("")
}

export const EmployeeList = () => {
    const employees = useEmployees()

    render(employees)
}