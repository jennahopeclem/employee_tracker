const menuQuestion = {
  type: "list",
  name: "menu",
  message: "What would you like to do next?",
  choices: [
    "View all departments",
    "View all employees",
    "View all roles",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee role",
    "Update an employee manager",
    "View all employees by manager",
    "View all employees by department",
    "Delete a department",
    "Delete a role",
    "Delete an employee",
    "View total utilized budget of a department",
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
    name: "title",
  },
  {
    type: "input",
    message: "Enter the salary of this role",
    name: "salary",
  },
  {
    type: "input",
    message: "Enter the id of the department for this role",
    name: "department_id",
  },
];

const employeeQuestions = [
  {
    type: "input",
    message: "Enter the employee's first name",
    name: "first_name",
  },
  {
    type: "input",
    message: "Enter the employee's last name",
    name: "last_name",
  },
  {
    type: "input",
    message: "Enter the employee's role",
    name: "role_id",
  },
  {
    type: "input",
    message: "Enter the employee's manager ID",
    name: "manager_id",
  },
];

const updateEmployeeQuestions = [
  {
    type: "input",
    message: "Enter employee ID",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the updated role",
    name: "role_id",
  },
];

const updateEmployeeManagerQuestions = [
  {
    type: "input",
    message: "Enter employee ID",
    name: "employee_id",
  },
  {
    type: "input",
    message: "Enter the updated manager ID",
    name: "manager_id",
  },
];

const employeeByManagerQuestions = [
  {
    type: "input",
    message: "Enter manager ID",
    name: "manager_id",
  },
];

const employeeByDepartmentQuestions = [
  {
    type: "input",
    message: "Enter department ID",
    name: "department_ID",
  },
];

const deleteEmployeeQuestions = [
  {
    type: "input",
    message: "Enter employee ID",
    name: "employee_id",
  },
];

const deleteRoleQuestions = [
  {
    type: "input",
    message: "Enter role ID",
    name: "role_id",
  },
];

const deleteDepartmentQuestions = [
  {
    type: "input",
    message: "Enter department ID",
    name: "department_id",
  },
];

const viewBudgetQuestions = [
  {
    type: "input",
    message: "Enter department ID",
    name: "department_id",
  },
];

module.exports = {
  menuQuestion,
  departmentQuestion,
  roleQuestions,
  employeeQuestions,
  updateEmployeeQuestions,
  updateEmployeeManagerQuestions,
  employeeByManagerQuestions,
  employeeByDepartmentQuestions,
  deleteEmployeeQuestions,
  deleteRoleQuestions,
  deleteDepartmentQuestions,
  deleteEmployeeQuestions,
  viewBudgetQuestions,
};
