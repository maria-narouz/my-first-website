var getUserName = prompt("Alo enta meen");

console.log(getUserName);

document.getElementById("username").innerText = getUserName


// tooltip //

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })