//PSEUDOCODE
//Allow user to input name, age and location
//When user clicks submit, values are stored and next page loads
//add class of hidden??
//second page - allow user to select level of seriousness
//on submit, stores the result and loads next page
//user inputs three values of interests 
//on submit, final page is presented
//using stored values, a paragraph is generated
//provide a way for user to easily copy the code
//allow user to share website on twitter

const myApp = {};

myApp.results = {
     firstLine: `lakjfkljaf`,
}



 $('.final-button').on('click', function (e) {
    e.preventDefault();
    myApp.userName = $('input[name=yourName]').val();
    console.log(myApp.userName);
    myApp.userAge = $('input[name=yourAge]').val();
    console.log(myApp.userAge);
    myApp.userLocal = $('input[name=yourLocation]').val();
    console.log(myApp.userLocal);
     myApp.relLevel = $('input[name=seriousness]:checked').val();
     console.log(myApp.relLevel);
     myApp.userInterest = $('input[name=interest]');
     console.log(myApp.userInterest);
     myApp.userInterest.each(function (i, el) {
         console.log($(el).val());
    $('span').html(`<p class="choice">${myApp.results.firstLine} ${myApp.userName}</p>`);
})

// $('.gen-level button').on('click', function (e) {
    // e.preventDefault();
    // myApp.relLevel = $('input[name=seriousness]:checked').val();
    // console.log(myApp.relLevel);
    // $('span').html(`<p class="choice">blah blah ${myApp.relLevel}.</p>`);
// })
// $('.final-button').on('click', function (e) {
//     e.preventDefault();
//     myApp.userInterest = $('input[name=interest]');
//     console.log(myApp.userInterest);
//     myApp.userInterest.each(function(i, el){
//         console.log($(el).val());
    
//     })
    
    // $('.final-button').on('submit', function(e){
    //     $('span').append(`hi my name is ${userName}, I'm ${userAge} and located in ${userLocal}`);
    // })
    
});


$(function () {
});

//one form that gets submitted, and when it's submitted, grab values
//can still have buttons, won't let them submit
//on click for buttons, on submit for form

    // if ('.form-demo' !=='')
    //     $('span').append(`hi my name is ${userName}, I'm ${userAge} and located in ${userLocal}`);
    // $('input').val('');