const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.managerOfficeNumber = managerOfficeNumber;
    }

    getOfficeNumber() {
        return this.managerOfficeNumber;
    }
    getRole() {
        return "Manager";
    }
};

module.exports = Manager;