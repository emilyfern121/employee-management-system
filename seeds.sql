USE management_DB;

INSERT INTO department (name)
VALUES ("Marketing");

INSERT INTO position (title, salary)
VALUES ("Manager", 60,000);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John","Doe",100,2);