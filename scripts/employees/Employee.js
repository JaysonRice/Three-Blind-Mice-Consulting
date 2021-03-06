export const Employee = (employeeObject, computerObject, departmentObject, locationObject, customerArray) => {
    return `
        <section class="employee">
        <header class="employee__name">
            <h2>${employeeObject.firstName} ${employeeObject.lastName}, ${employeeObject.age}</h2>
        </header>
        <section class="employee__computer">
            Currently using: ${computerObject.year} ${computerObject.model}
        <section>
        <section class="employee__department">
            Works in ${departmentObject.departmentName}.
        </section>
        <section class="employee__department">
            At the ${locationObject.city} location.
        </section>
        <section class="employee__customers">
                <ul>
                <h4>Customers</h4>
                    ${
                        customerArray.map(customer => `<li>${customer.business}</li>`).join("")
                    }
                </ul>
            </section>
        </section>
    `
}