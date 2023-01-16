use employee_tracker;

INSERT INTO department (name)
VALUES ("Sales"),
       ("Accounting"),
       ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales", 65000, 1),
        ("Sales rep", 45000, 1),
        ("Accountant", 95000, 2),
        ("Forensice accountant", 100000, 2),
        ("Software engineer", 100000, 3),
        ("Senior engineer", 125000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jenna", "Clementi", 1, null),
        ("Tom", "Smith", 2, 1),
        ("Sean", "New", 3, null),
        ("Stephanie", "Smith", 4, 3),
        ("Kat", "Solan", 5, null),
        ("Cristina", "Verdia", 6, 5);