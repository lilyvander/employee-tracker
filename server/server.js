const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require ('express')
const PORT = process.env.PORT || 3001;

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Lennox666',
    database: 'employees_db',
  },
    console.log('Connected to the employees_db database.')
  );

startApp();

function startApp(){
    inquirer 
        .prompt({
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an emploee role',
                'Exit',
            ],
        })
        .then((answer) =>{
            switch (answer.action){
                case 'View all departments':
                    viewAllDepartments();
                    break;
                
                case 'View all roles':
                    viewAllRoles();
                    break;

                case 'View all employees':
                    viewAllEmpolyees();
                    break;

                case 'Add a department':
                    addADepartment();
                    break;

                case 'Add a role':
                    addARole();
                    break;

                case 'Add an employee':
                    addAEmployee();
                    break;

                case 'Update an employee':
                    updateAnEmployee();
                    break;

                case 'Exit':
                    connection.end();
                    break;

            }
        });
}

// Functions for prompt answers 
function viewAllDepartments() {
    const query = 'SELECT * FROM department';
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp();
    })
}

function viewAllRoles () {
    const query = 'SELECT * FROM role';
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp();
    })
}

function viewAllEmpolyees() {
    const query = 'SELECT * FROM employee';
    connection.query(query, (err, results) => {
        if (err) throw err;
        console.table(results);
        startApp();
    })
}

function addADepartment() {
    inquirer
        .prompt([
            {
                name: 'name',
                type: 'input',
                message: 'Enter the name of the new department:',
            },
        ])
        .then((answer) => {
            const query = 'INSERT INTO department SET ?';

            connection.query(query, { name: answer.name }, (err, res) => {
                if (err) throw err;

                console.log('Department added successfully!');
                startApp();
            });
        });
}

function addARole() {
    inquirer
        .prompt([
            {
                name: 'title',
                type: 'input',
                message: 'Enter the title of the new role:',
            },
        ])
        .then((answer) => {
            const query = 'INSERT INTO role SET ?';

            connection.query(query, { title: answer.title }, (err, res) => {
                if (err) throw err;

                console.log('Role added successfully!');
                startApp(); 
            });
        });
}

function addAEmployee() {
    inquirer
        .prompt([
            {
                name: 'first_name',
                type: 'input',
                message: 'Enter the first name of the new employee:',
            },
            {
                name: 'last_name',
                type: 'input',
                message: 'Enter the last name of the new employee:',
            },
        ])
        .then((answer) => {
            const query = 'INSERT INTO employee SET ?';

            connection.query(query, { first_name: answer.first_name, last_name: answer.last_name }, (err, res) => {
                if (err) throw err;

                console.log('Employee added successfully!');
                startApp(); 
            });
        });
}