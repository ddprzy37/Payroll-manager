// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = [];

const collectEmployees = function() {
  let employees = { firstName: "", lastName: "", salary: 0 };

  employees.firstName = prompt("What is your FIRST name?");
  employees.lastName = prompt("What is your LAST name?");
  employees.salary = prompt("What is your SALARY? (use numbers)");
  employeesArray.push(employees);
  console.log(employeesArray);
};

const displayAverageSalary = function(employeesArray) {
  let total = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    total += employeesArray[i].salary;
  }

  let avg = total / employeesArray.length;
  return avg;
};


// calculate and display average salary:
const averageSalary = displayAverageSalary(employeesArray);
console.log("Average Salary:", averageSalary);


// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    return "No employees recorded."
  }
  // Generates random index within the range of the array's length
  const randomIndex = Math.floor(Math.random() * employeesArray.length);

  // Return the employee object at the random index
  return employeesArray[randomIndex];
  }

const randomEmployee = getRandomEmployee(employeesArray);
console.log("Random Employee:", randomEmployee);
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
