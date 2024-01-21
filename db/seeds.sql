INSERT INTO department (name) VALUES 
('Training'),
('Marketing'),
('Sales');

INSERT INTO role (title, salary, department_id) VALUES 
('Trainer', 80000, 1),
('Cheif of Marketing', 100000, 2),
('Lead Trainer', 90000, 1),
('Sales Manager', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Jane', 'Smith', 2, 1),
('Alice', 'Williams', 4, 1),
('Charlie', 'Brown', 5, 2);

