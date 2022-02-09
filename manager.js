const Employee = require('./employee')

class Manager extends Employee{
    constructor(name,title,salary){
        super(name,title,salary);
        this.employees = [];

    }

    addEmployee(employee){
        this.employees.push(employee)
    }


}

let annie = new Manager('Annie', 'Director', 100000)
let alvy = new Employee('Alvy', 'Analyst', 75000, annie)


console.log(annie)
