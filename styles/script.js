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


    $('form').on('submit', function (e) {
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

    // myApp.introductionOne = `Lorem ${myApp.userName} dolor sit, amet ${myApp.userAge} adipisicing ${myApp.userLocal}. Necessitatibus, ad!`;
    // myApp.introductionTwo = `Lorem ${myApp.userName} dolor sit ${myApp.userAge} consectetur ${myApp.userLocal} elit.`;


    myApp.userInterest.each(function (i, el) {
    console.log($(el).val());
    });

        myApp.intro = {
            introOne: `${myApp.userName} one`,
            introTwo: `${myApp.userName} two`
        };
        myApp.level = {
            serious: `Lorem Ipsum is simply dummy text of the printing and ${myApp.relLevel} industry.`,
            notSerious: `It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`
        };

        myApp.interests = {
            interestOne: `It is a long established fact that a reader will be ${myApp.userInterest} distracted by the readable content of a page when looking.`,
            interestTwo: `Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
        };
        myApp.outro = {
            outroOne: `But also the leap into electronic typesetting, remaining essentially unchanged.`,
            outroTwo: `Contrary to popular belief, Lorem Ipsum is not simply random text.`
        };
    myApp.firstResponseSerious = `${myApp.intro.introOne} ${myApp.level.serious} ${myApp.interests.interestOne}${myApp.outro.outroOne}.`
    
    myApp.secondResponseSerious = `${myApp.intro.introTwo} ${myApp.level.serious} ${myApp.interests.interestOne}
    ${myApp.outro.outroOne}.`

    myApp.thirdResponseSerious = `${myApp.intro.introTwo} ${myApp.level.serious} ${myApp.interests.interestOne}${myApp.outro.outroTwo}.`

    myApp.fourthResponseSerious = `${myApp.intro.introOne} ${myApp.level.serious} ${myApp.interests.interestOne}${myApp.outro.outroTwo}.`

    $('span').html(`${myApp.firstResponseSerious}`);
    });
