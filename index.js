const mysql = require('mysql');
const inquirer = require ('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: '@jejm$121323fs',
    database: management_DB,

});

connection.connect((error) => {
    if (error) {
        console.log(err);
    } else {
        console.log("Connected to database succesfully");
    }

});




// connection.connect((err) => {
//     if (err) throw err;
//     runSearch();
// });

// const runSearch = () => {
//     inquirer.prompt({
//         name: 'action',
//         type: 'list',
//         message: 'What would you like to do?',
//         choices: [
//         'View all employees',
//         'View all employees by departments',
//         'View all employees by Manager',
//         'Add employee',
//         'Add departments',
//         'Add roles',
//         'Update employee roles',
//       ],
//     })
//     .then((answer) => {
//         switch (answer.action) {
//           case 'View all employees':
//             viewEmployee();
//             break;
  
//           case 'View all employees by departments':
//             viewDepartment();
//             break;
  
//           case 'View all employees by Manager':
//             viewManager();
//             break;
  
//           case 'Add employee':
//             addEmployee();
//             break;
  
//           case 'Add departments':
//             addDepartment();
//             break;
            
//             case 'Add roles':
//                 addRoles();
//                 break;
        
//         case 'Update employee roles':
//                 updateRoles();
//                 break;

//           default:
//             console.log(`Invalid action: ${answer.action}`);
//             break;
//         }
//       });
//   };

//   const viewEmployee = () => {
//     inquirer
//       .prompt({
//         name: 'first name',
//         type: 'input',
//         message: 'What employee would you like to view',
//       })
//       .then((answer) => {
//         const query = 'SELECT position, song, year FROM top5000 WHERE ?';
//         connection.query(query, { artist: answer.artist }, (err, res) => {
//           if (err) throw err;
//           res.forEach(({ position, song, year }) => {
//             console.log(
//               `Position: ${position} || Song: ${song} || Year: ${year}`
//             );
//           });
//           runSearch();
//         });
//       });
//   };
