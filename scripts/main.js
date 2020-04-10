import { getComputers } from "./computers/ComputerDataProvider.js";
import { getEmployees } from "./employees/EmployeeDataProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js"
import { getDepartments } from "./departments/DepartmentDataProvider.js";
import { getLocations } from "./locations/LocationProvider.js";
import { getCustomers } from "./customers/CustomerProvider.js";
import { getCustomerEmployees } from "./customers/CustomerEmployeeProvider.js";

getComputers()
    .then(getDepartments)
    .then(getEmployees)
    .then(getLocations)
    .then(getCustomers)
    .then(getCustomerEmployees)
    .then(EmployeeList)
