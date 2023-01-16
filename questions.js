const menuQuestion = {
  type: "list",
  name: "menu",
  message: "What would you like to do next?",
  choices: [
    "View all deparments",
    "View all employees",
    "View all roles",
    "Add a deparment",
    "Add a role",
    "Add an employee",
    "Update an employee role",
  ],
};

const departmentQuestion = {
  type: "input",
  message: "Enter name of department",
  name: "name",
};

const roleQuestions = [
  {
    type: "input",
    message: "Enter name of the role",
    name: "roleName",
  },
  {
    type: "input",
    message: "Enter the salary of this role",
    name: "roleSal",
  },
  {
    type: "input",
    message: "Enter the department of this role",
    name: "roleDept",
  },
];

const employeeQuestions = [
  {
    type: "input",
    message: "Enter the employee's first name",
    name: "empFname",
  },
  {
    type: "input",
    message: "Enter the employee's last name",
    name: "empLname",
  },
  {
    type: "input",
    message: "Enter the employee's role",
    name: "empRole",
  },
  {
    type: "input",
    message: "Enter the employee's manager",
    name: "empMang",
  },
];

const updateEmployeeQuestions = [
  {
    type: "input",
    message: "Enter employee ID",
    name: "empId",
  },
  {
    type: "input",
    message: "Enter the updated role",
    name: "upRole",
  },
];

module.exports = {
  menuQuestion,
  departmentQuestion,
  roleQuestions,
  employeeQuestions,
  updateEmployeeQuestions,
};
