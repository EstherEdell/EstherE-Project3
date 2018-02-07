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

const interests = {
    interestOne: "",
    interestTwo:"",
    interestThree:"",
};

$(function () {
    
    $('.form-demo').on('submit', function(e){
        e.preventDefault();
        const userName = $('input[name=yourName]').val();
        console.log(userName);
        const userAge = $('input[name=yourAge]').val();
        console.log(userAge);
        const userLocal = $('input[name=yourLocation]').val();

        if ('.form-demo' !=='')
            $('span').append(`hi my name is ${userName}, I'm ${userAge} and located in ${userLocal}`);
        $('input').val('');
    })
    
    $('.form-level').on('submit', function(e){
        e.preventDefault();
        const relLevel = $('input[name=seriousness]:checked').val();
        console.log(relLevel);
    })
    $('.form-interest').on('submit', function(e){
        e.preventDefault();
        const userInterest = $('input[name=interest]').val();
        console.log(userInterest);

    });

});