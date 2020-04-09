import { getComputers } from "./computers/ComputerDataProvider.js";
import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js"
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationProvider.js";

getComputers()
    .then(getDepartments)
    .then(getEmployees)
    .then(getLocations)
    .then(EmployeeList)
