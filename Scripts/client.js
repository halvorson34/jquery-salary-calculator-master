console.log("JS");

const employees = [];

$(document).ready(init);

function init() {
  $(".js-btnSubmit").on("click", addEmployee);
  $(".btnDelete").on("click", deleteEmployee);
}

function deleteEmployee() {
  const employeeIndex = $(this).data("index");

  employees.splice(employeeIndex, 1);

  render();
}

function addEmployee(first, last, id, title, salary) {
  event.preventDefault();

  const employee = {
    first: $(".firstNameInput").val(),
    last: $(".lastNameInput").val(),
    id: $(".idInput").val(),
    title: $(".titleInput").val(),
    salary: parseFloat($(".salaryInput").val())
  };

  employees.push(employee);
  render();
}

function render() {
  $(".tableBody").empty();
  let totalMonthly = 0;

  for (let i = 0; 1 < employees.length; i++) {
    const individualEmployee = employees[i];
    totalMonthly += individualEmployee.salary;

    $(".tableBody").append(`
    <tr>
        <td>${individualEmployee.first}</td>
        <td>${individualEmployee.last}</td>
        <td>${individualEmployee.id}</td>
        <td>${individualEmployee.title}</td>
        <td>${individualEmployee.salary}</td>
        <td><button class="btnDelete" data-index="${i}">Delete</button></td>
    </tr>
        `);
  }

  $(".totalMonthly").text(`${totalMonthly}`);
}
