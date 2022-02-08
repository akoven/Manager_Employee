const Employee = require('./employee')

class Manager extends Employee{
    constructor(name,title,salary,employees){
        super(name,title,salary);
        this.employees = employees;
    }

    addEmployee(employees){
        let employeeArr = [];
        employees.forEach(employee => {
            employeeArr.push(employee);
        });
        return employeeArr;
    }

}

let annie = new Manager('Annie', 100000, 'Director')
let alvy = new Employee('Alvy', 75000, 'Analyst', annie)

console.log(annie)
