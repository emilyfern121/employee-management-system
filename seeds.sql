USE management_DB;

INSERT INTO department (name)
VALUES ("Marketing"),
("IT"), ("Sales"), ("Accounting"), ("Weddings");
-- Select * FROM department

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 60000, 1), ("Coordinator", 25000, 2), ("VP", 90000, 3), ("Project Leader", 75000, 4);

-- SELECT * FROM role

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John","Doe",1, 1),("Sally","Smith",2, 2),("Peter","Paul",3, 3), ("Betty","Boop",4, 4), ("Billy","Bob",2, );

-- SELECT * FROM employee