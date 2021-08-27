const mysql = require('mysql');
const inquirer = require ('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@jejm$121323fs',
    database: 'management_DB',

});


connection.connect((err) => {
    if (err) throw err;
    runSearch();
});

const runSearch = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
        'View all employees',
        'View all employees by departments',
        'View all employees by Role',
        'Add employee',
        'Add departments',
        'Add roles',
        'Update employee roles',
      ],
    })
    .then((answer) => {
        switch (answer.action) {
          case 'View all employees':
            viewEmployee();
            break;
  
          case 'View all employees by departments':
            viewDepartment();
            break;
  
          case 'View all employees by Role':
            viewRole();
            break;
  
          case 'Add employee':
            addEmployee();
            break;
  
          case 'Add departments':
            addDepartment();
            break;
            
            case 'Add roles':
                addRoles();
                break;
        
        case 'Update employee roles':
                updateRoles();
                break;

          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };

  const viewEmployee = () => {
        const query = 'SELECT * FROM employee';
        connection.query(query,(err, res) => {
          if (err) throw err;
            console.table(res)
          runSearch();
        });
  };

  const viewDepartment = () => {
    const query = 'SELECT * FROM department';
    connection.query(query,(err, res) => {
      if (err) throw err;
        console.table(res)
      runSearch();
    });
};

const viewRole = () => {
  const query = 'SELECT * FROM role';
  connection.query(query,(err, res) => {
    if (err) throw err;
      console.table(res)
    runSearch();
  });
};



