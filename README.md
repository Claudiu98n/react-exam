# React - Final Exam
The project represents a form with data about employees.
There are inputs for:
* Last Name ( Nume de familie ); 
* First Name ( Prenume ); 
* Job ( Meserie );
* Salary ( Salariu ), followed by currency;
* Date of Employment ( Data Angajarii ), which will default be set to actual date.
Data validation for the form is done manually.

## The main tehnologies used for creating the app:
* React.js
* Redux.js
* React Router
* Bootstrap

## To run the project locally
1. git clone https://github.com/Claudiu98n/react-exam.git
2. cd react-admin-panel
3. npm install
4. npm start

### Demo
https://react-final-exam.herokuapp.com/

### Functionalities
* Click on Trimiteti datele - it will send data to the page with employees;
* Click on Spre pagina cu angajati - it will display the page with employees; if there are no employees, it will show a message which recommends to go to the main page and introduce an employee;
* Click on Sorteaza - Dupa nume - it will sort employees by Last Name;
* Click on Sorteaza - Dupa salariu - it will sort employees by Salary;
* Click on Filtreaza dupa salariu: 1-2500 Lei - it will show the employees with salary between 1 and 2500 Lei;
* Click on Filtreaza dupa salariu: 2500-4000 Lei - it will show the employees with salary between 2500 and 4000 Lei;
* Click on Filtreaza dupa salariu: 4000-50000 Lei - it will show the employees with salary between 4000 and 50000 Lei;
* Click on Afiseaza angajatii in ordinea originala - it will show the employees in the original order;
* Click on Spre pagina principala - it will display the main page and automatically restore the employees in the original order.
