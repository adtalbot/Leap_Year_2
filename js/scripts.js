var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {                  /*.ready prevents JS from executing until the page DOM is ready*/
  $('form#leap-year').submit(function(event) {  /*Goes to leap-year form. Attaches a function to run when submit event occurs. Passes in the parameter event. Event is submitting the form.*/
    var year = parseInt($('input#year').val()); /*Creates variable year. Calls value method to pull out the value of input id field year.*/
    var result = leapYear(year);                /*Creates variable result and sets it equal to the leap year function when we pass in year.*/

    $('.year').text(year);                      /*Takes the year variable that stores the user input from the form and inserts it into the class .year in span tag.*/
    if (!result) {                              /*If result evaluates to not true (if leap year function returns false when passing in year variable)*/
      $('.not').text('not');                    /*If above statement is true, inserts 'not' into .not class span field.*/
    }

    $('#result').show();                        /*Shows div id result that was previously hidden by CSS*/
    event.preventDefault();                     /*Prevents the form from being submitted to server.*/
  });
});
