const mysql = require('mysql');
const inquirer = require ('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '@jejm$121323fs',
    database: 'management_DB',

});

// connection.connect((error) => {
//     if (error) {
//         console.log(err);
//     } else {
//         console.log("Connected to database succesfully");
//     }

// });



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
        'View all employees by Manager',
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
  
          case 'View all employees by Manager':
            viewManager();
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
    inquirer
      .prompt({
        name: 'first_name',
        type: 'input',
        message: 'What employee would you like to view? Please enter first name',
      })
      .then((answer) => {
        const query = 'SELECT first_name FROM employee WHERE ?';
        connection.query(query, { first_name: answer.first_name }, (err, res) => {
          if (err) throw err;
          res.forEach(({ first_name }) => {
            console.log(
              `First Name: ${first_name}`
            );
          });
          runSearch();
        });
      });
  };
