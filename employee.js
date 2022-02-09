class Employee{
    constructor(name,title,salary,boss = null){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.manager = boss;
        if (boss) {
            boss.addEmployee(this);
        }
    }
}

module.exports = Employee;
