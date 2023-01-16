const { prompt } = require("inquirer");
const {
  menuQuestion,
  departmentQuestion,
  roleQuestions,
  employeeQuestions,
  updateEmployeeQuestions,
} = require("./questions");
const db = require("./connection");

async function viewDepartments() {
  const [departments] = await db.promise().query("SELECT * FROM department");
  console.table(departments);
  promptMenu();
}

async function viewEmployees() {
  const [employees] = await db.promise().query("SELECT * FROM employee");
  console.table(employees);
  promptMenu();
}

async function viewRoles() {
  const [roles] = await db.promise().query("SELECT * FROM role");
  console.table(roles);
  promptMenu();
}

async function addDept() {
  const input = await prompt(departmentQuestion);
  console.log(input);
  await db.promise().query("INSERT INTO department SET ?", input);
  console.log("Department added succesfully");
  promptMenu();
}

async function promptMenu() {
  const { menu } = await prompt(menuQuestion);
  console.log(menu);
  switch (menu) {
    case "View all deparments":
      viewDepartments();
      break;
    case "View all employees":
      viewEmployees();
      break;
    case "View all roles":
      viewRoles();
      break;
    case "Add a deparment":
      addDept();
      break;
    case "Add a role":
      console.log("role added");
      break;
    case "Add an employee":
      console.log("employee added");
      break;
    case "Update an employee role":
      console.log("updated emp role");
      break;
    default:
      console.log("Something went wrong");
      break;
  }
}

promptMenu();
