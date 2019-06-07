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

function resetTotals() {
  $('.col-results .results div').hide();
  jsTotal = 0;
  rubyTotal = 0;
  swiftTotal = 0;
  goTotal = 0;
  rustTotal = 0;
  cTotal = 0;
  pythonTotal = 0;
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
    goTotal += 2;
  } else if (company === 'microsoft') {
    cTotal += 2;
  } else if (company === 'apple') {
    swiftTotal +=2;
  } else {
    jsTotal ++;
    rubyTotal ++;
    pythonTotal ++;
    rustTotal ++;
    goTotal --;
    cTotal --;
    swiftTotal --;
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

  if (mascot === 'gopher') {
    goTotal += 2;
  } else if (mascot === 'snake') {
    pythonTotal += 2;
  } else if (mascot === 'bird') {
    swiftTotal += 2;
  } else if (mascot === 'ruby') {
    rubyTotal += 2;
  } else {
    jsTotal ++;
    cTotal ++;
    rustTotal ++;
    goTotal --;
    swiftTotal --;
    pythonTotal --;
    rubyTotal --;
  };
};

function getFrontBack(frontBack) {
  var frontBack = $("input:radio[name=front-back]:checked").val();
  console.log('data gathered: front end or back end: ' + frontBack);

  if (frontBack === 'front') {
    jsTotal += 2;
    swiftTotal ++;
    rustTotal ++;
  } else if (frontBack === 'back') {
    jsTotal ++;
    cTotal ++;
    goTotal ++;
    pythonTotal ++;
    rubyTotal ++;
  };
};

function getResults() {

  var userName = $('#user-name').val();
  $('.results .name').text(userName);
  $('.results').show();

  if (jsTotal > rustTotal && jsTotal > swiftTotal && jsTotal > goTotal && jsTotal > cTotal && jsTotal > pythonTotal && jsTotal > rubyTotal) {
      console.log('javascript is suggested');
      $('.col-results .results .javascript').show();
      $('.col-results .results .jacascript div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/JavaScript"></iframe>');
    } else if (rustTotal > swiftTotal && rustTotal > goTotal && rustTotal > cTotal && rustTotal > pythonTotal && rustTotal > rubyTotal && rustTotal > jsTotal) {
      console.log('rust is suggested');
      $('.col-results .results .rust').show();
      $('.col-results .results .rust div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Rust_(programming_language)"></iframe>');
    } else if (swiftTotal > goTotal && swiftTotal > cTotal && swiftTotal > pythonTotal && swiftTotal > rubyTotal && swiftTotal > jsTotal && swiftTotal > rustTotal) {
      console.log('swift is suggested');
      $('.col-results .results .swift').show()
      $('.col-results .results .swift div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Swift_(programming_language)"></iframe>');
      $('body').css('background-color','#f05138');
    } else if (goTotal > cTotal && goTotal > pythonTotal && goTotal > rubyTotal && goTotal > jsTotal && goTotal > rustTotal && goTotal > swiftTotal) {
      console.log('go is suggested');
      $('.col-results .results .golang').show();
      $('.col-results .results .golang div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Go_(programming_language)"></iframe>');
      $('body').css('background-color','#5adaff');
    } else if (cTotal > pythonTotal && cTotal > rubyTotal && cTotal > jsTotal && cTotal > rustTotal && cTotal > swiftTotal && cTotal > goTotal) {
      console.log('c# is suggested');
      $('.col-results .results .c-sharp').show();
      $('.col-results .results .c-sharp div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"></iframe>');
      $('body').css('background-color','#a179dc');
    } else if (pythonTotal > rubyTotal && pythonTotal > cTotal && pythonTotal > jsTotal && pythonTotal > goTotal && pythonTotal > swiftTotal && pythonTotal > rustTotal) {
      console.log('python is suggested');
      $('.col-results .results .python').show();
      $('.col-results .results .python div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Python_(programming_language)"></iframe>');
    } else if (rubyTotal > jsTotal && rubyTotal > pythonTotal && rubyTotal > swiftTotal && rubyTotal > goTotal && rubyTotal > cTotal && rubyTotal > rustTotal) {
      console.log('ruby is suggested');
      $('.col-results .results .ruby').show();
      $('.col-results .results .ruby div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Ruby_(programming_language)"></iframe>');
    } else {
      console.log('multiple languages are suggested');
      $('.col-results .results .multiple').show();
      $('.col-results .results .multiple div.iframe').show().append().html('<iframe src="https://en.wikipedia.org/wiki/Programming_languages_used_in_most_popular_websites"></iframe>');
    };

}
//end business logic


//user interface logic (jquery)
$(document).ready(function() {
console.log('jquery is enabled');

$('button.btn').click(function() {

  resetTotals();
  $('.col-results .results div').hide();
  $('.copy').show();

  getAge();
  getCompany();
  getMemory();
  getMascot();
  getFrontBack();

  logTotals();

  getResults();


  });
});
//end unser interface logic
