console.log("JS");

const employees = [];

$(document).ready(init);

function init() {
  $(".js-btnSubmit").on("submit", addEmployee);
  $(".btnDelete").on("click", deleteEmployee);
}

function addEmployee(first, last, id, title, salary) {
  event.preventDefault();

const employee = {
  first: $(".firstNameInput").val(),
  last: $(".lastNameInput").val(),
  id: $(".idInput").val(),
  title: $(".titleInput").val(),
  salary: $(".salaryInput").val(),
};
