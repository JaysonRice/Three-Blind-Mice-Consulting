import { getComputers } from "./computers/ComputerDataProvider.js";
import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js"
import { getDepartments } from "./departments/DepartmentDataProvider.js";

getComputers()
    .then(getDepartments)
    .then(getEmployees)
    .then(EmployeeList)
