const { prompt } = require("inquirer");
const {
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
  viewBudgetQuestions,
} = require("./questions");
const db = require("./connection");

async function viewDepartments() {
  const [departments] = await db.promise().query("SELECT * FROM department");
  console.table(departments);
  promptMenu();
}

async function viewEmployees() {
  const [employees] = await db
    .promise()
    .query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
    );
  console.table(employees);
  promptMenu();
}

async function viewRoles() {
  const [roles] = await db
    .promise()
    .query(
      "SELECT title,salary,name FROM role LEFT JOIN department ON role.department_id = department.id"
    );
  console.table(roles);
  promptMenu();
}

async function addDepartment() {
  const input = await prompt(departmentQuestion);
  console.log(input);
  await db.promise().query("INSERT INTO department SET name=?", input.name);
  console.log("Department added succesfully");
  promptMenu();
}

async function addRole() {
  const [departments] = await db.promise().query("SELECT * FROM department");
  const input = await prompt(roleQuestions);
  const department_id = departments.find(
    (department) => department.name === input.department_id
  ).id;
  input.department_id = department_id;
  console.log(input);
  await db.promise().query("INSERT INTO role SET ?", {
    title: input.title,
    salary: input.salary,
    department_id: input.department_id,
  });
  console.log("Department added succesfully");
  promptMenu();
}

async function addEmployee() {
  const [roles] = await db.promise().query("SELECT * FROM role");
  const [employees] = await db.promise().query("SELECT * FROM employee");
  const input = await prompt(employeeQuestions);
  const role_id = roles.find((role) => role.title === input.empRole).id;
  const manager_id = employees.find(
    (employee) => employee.first_name === input.empMang
  ).id;
  input.role_id = role_id;
  input.manager_id = manager_id;
  console.log;
  await db.promise().query("INSERT INTO employee SET ?", {
    first_name: input.empFname,
    last_name: input.empLname,
    role_id: input.role_id,
    manager_id: input.manager_id,
  });
  console.log("Employee added succesfully");
  promptMenu();
}

async function updateEmployeeRole() {
  const [roles] = await db.promise().query("SELECT * FROM role");
  const input = await prompt(updateEmployeeQuestions);
  const role_id = roles.find((role) => role.title === input.upRole).id;
  input.role_id = role_id;
  input.employee_id = input.empId;
  console.log;
  await db
    .promise()
    .query("UPDATE employee SET role_id = ? WHERE id = ?", [
      input.role_id,
      input.employee_id,
    ]);
  console.log("Employee role updated succesfully");
  promptMenu();
}

async function updateEmployeeManager() {
  const input = await prompt(updateEmployeeManagerQuestions);
  const newEmployee = await db
    .promise()
    .query("UPDATE employee SET manager_id = ? WHERE id = ?", [
      input.manager_id,
      input.employee_id,
    ]);
  const [employees] = await db
    .promise()
    .query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id"
    );
  console.table(employees);
  promptMenu();
}

async function viewEmployeesByManager() {
  const input = await prompt(employeeByManagerQuestions);
  // view all employees by manager id
  const [employees] = await db
    .promise()
    .query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE employee.manager_id = ?",
      Number(input.manager_id)
    );

  console.table(employees);
  promptMenu();
}

async function viewEmployeesByDepartment() {
  const input = await prompt(employeeByDepartmentQuestions);
  const [employees] = await db
    .promise()
    .query(
      "SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id WHERE role.department_id = ?",
      input.department_id
    );
  console.table(employees);
  promptMenu();
}

async function deleteRole() {
  const input = await prompt(deleteRoleQuestions);
  // delete a role
  const [roles] = await db
    .promise()
    .query("DELETE FROM role WHERE id = ?", input.role_id);
  console.log("Role deleted succesfully");
}

async function deleteDepartment() {
  const input = await prompt(deleteDepartmentQuestions);
  const [employees] = await db
    .promise()
    .query("DELETE FROM department where id = ?", input.employee_id);
  console.log("Department deleted successfully");
  promptMenu();
}

async function deleteEmployee() {
  const input = await prompt(deleteEmployeeQuestions);
  // delete an employee
  const [employees] = await db
    .promise()
    .query("DELETE FROM employee WHERE id = ?", input.employee_id);
  console.log("Employee deleted succesfully");
  promptMenu();
}

async function viewBudget() {
  const input = await prompt(viewBudgetQuestions);
  const [budget] = await db
    .promise()
    .query(
      "SELECT department.name, SUM(role.salary) AS budget FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id WHERE department.id = ?",
      input.department_id
    );
  console.table(budget);
  promptMenu();
}

async function promptMenu() {
  const { menu } = await prompt(menuQuestion);
  console.log(menu);
  switch (menu) {
    case "View all departments":
      viewDepartments();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "Add a role":
      addRole();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an employee role":
      updateEmployeeRole();
      break;
    case "Update an employee manager":
      updateEmployeeManager();
      break;
    case "View all employees by manager":
      viewEmployeesByManager();
      break;
    case "View all employees by department":
      viewEmployeesByDepartment();
      break;
    case "Delete a department":
      deleteDepartment();
      break;
    case "Delete a role":
      deleteRole();
      break;
    case "Delete an employee":
      deleteEmployee();
      break;
    case "View total utilized budget of a department":
      viewBudget();
      break;
    default:
      console.log("Something went wrong");
      break;
  }
}

promptMenu();
