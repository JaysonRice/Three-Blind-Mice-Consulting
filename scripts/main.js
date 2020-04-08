import { getComputers } from "./computers/ComputerDataProvider.js";
import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js"

getComputers()
    .then(getEmployees)
    .then(EmployeeList)
