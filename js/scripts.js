//business logic

//global variables
var jsTotal = 0;
var rubyTotal = 0;
var swiftTotal = 0;
var goTotal = 0;
var rustTotal = 0;
var cTotal = 0;
var pythonTotal = 0;

//function declarations
function logTotals() {
  console.log('//////////////////')
  console.log('jsTotal: ' + jsTotal);
  console.log('rubyTotal: ' + rubyTotal);
  console.log('swiftTotal: ' + swiftTotal);
  console.log('goTotal: ' + goTotal);
  console.log('rustTotal: ' + rustTotal);
  console.log('cTotal: ' + cTotal);
  console.log('pythonTotal: ' + pythonTotal);
};


function getAge(age) {
  var age = parseInt($('#user-age').val());
  console.log('data gathered: user age: ' + age);

  if (age > 25) {
    jsTotal ++;
    rubyTotal ++;
    cTotal ++;
    pythonTotal ++;
  } else if (age < 25) {
    goTotal ++;
    rustTotal ++;
    swiftTotal ++;
  };
};

function getCompany(company) {
  var company = $("input:radio[name=company]:checked").val();
  console.log('data gathered: user prefers: ' + company)

  if (company === 'google') {
    goTotal ++;
  } else if (company === 'microsoft') {
    cTotal ++;
  } else if (company === 'apple') {
    swiftTotal ++;
  } else {
    jsTotal ++;
    rubyTotal ++;
    pythonTotal ++;
    rustTotal ++;
  };
};

function getMemory(memory) {
  var memory = $("input:radio[name=memory]:checked").val();
  console.log('data gathered: memory management: ' + memory);

  if (memory === 'yes') {
    goTotal ++;
    cTotal ++;
    pythonTotal ++;
  } else {
    jsTotal ++;
    swiftTotal ++;
    rustTotal ++;
    rubyTotal ++;
  };
};

function getMascot(mascot) {
  var mascot = $("input:radio[name=mascot]:checked").val();
  console.log('data gathered: mascot: ' + mascot);
}

//user interface logic (jquery)
$(document).ready(function() {
console.log('jquery is enabled');

$('button.btn').click(function() {

  getAge();
  getCompany();
  getMemory();

  logTotals();


})



});
