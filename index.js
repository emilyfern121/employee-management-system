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
        'Add department',
        'Add role',
        'Update employee role',
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
  
          case 'Add department':
            addDepartment();
            break;
            
            case 'Add role':
                addRole();
                break;
        
        case 'Update employee role':
                updateRole();
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

const addEmployee = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is their first name?',
      },
      {
        name: 'lastName',
        type: 'input',
        message: 'What is their last name',
      },
      {
        name: 'roleId',
        type: 'input',
        message: 'What is their role id?',
      },
      {
        name: 'managerId',
        type: 'input',
        message: 'What is their manager id?',
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO employee SET ?',
        {
          first_name: answer.name,
          last_name: answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        (err) => {
          if (err) throw err;
          console.log('Your employee was created successfully!');
          runSearch();
        }
      );
    });
};

const addDepartment = () => {
  inquirer
    .prompt([
      {
        name: 'name',
        type: 'input',
        message: 'What is the new department name?',
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO department SET ?',
        {
          name: answer.name,
        },
        (err) => {
          if (err) throw err;
          console.log('Your department was created successfully!');
          runSearch();
        }
      );
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        name: 'role',
        type: 'input',
        message: 'What is the new title?',
      },
    ])
    .then((answer) => {
      connection.query(
        'INSERT INTO role SET ?',
        {
          title: answer.role,
        },
        (err) => {
          if (err) throw err;
          console.log('Your role was created successfully!');
          runSearch();
        }
      );
    });
};

const updateRole = () => {
  inquirer
    .prompt([
      {
        name: 'role',
        type: 'input',
        message: 'What is the new title?',
      },
    ])
    .then((answer) => {
      connection.query(
        'UPDATE role SET ?',
        {
          title: answer.role,
        },
        (err) => {
          if (err) throw err;
          console.log('Your role was created successfully!');
          runSearch();
        }
      );
    });
};



