class Employee{
    constructor(name,title,salary,boss = null){
        this.name = name;
        this.title = title;
        this.salary = salary;
        this.boss = boss;

        if (boss) {
            boss.addEmployee(this);
        }
    }

    bonus(mulitplier){
        let bonusPay;
        let sum = 0;
        if(this.title !== 'Manager'){
            bonusPay = this.salary*mulitplier;
        }else{
            let employeeArr = boss.employees;
            for(let i = 0; i < employeeArr.length; i++){
                sum += employeeArr[i].salary
            }
            bonusPay = (this.salary+sum)*mulitplier;
        }
        return bonusPay;

    }
}



module.exports = Employee;
