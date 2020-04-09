export const Employee = (employeeObject, computerObject, departmentObject, locationObject) => {
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
        </section>
    `
}