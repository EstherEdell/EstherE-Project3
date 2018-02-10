//PSEUDOCODE
//Allow user to input information
//When user clicks submit, values are stored and next page loads
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
    
    myApp.userInterest = $('input[name=interest]');
    console.log(myApp.userInterest);

    console.log(myApp.userInterest);

    myApp.userInterest = myApp.userInterest.map(function (i, el) {
        return $(el).val();
    }).get().join();

    myApp.seriousResp = [
        {
            seriousOption: `${myApp.userAge} OPTION ONE`
        },
        {
            seriousOption: `${myApp.userAge} OPTION TWO`
        },
        {
            seriousOption: `${myApp.userAge} OPTION THREE`
        }
    ];
    myApp.notSeriousResp = [
        {
            notSeriousOption: `${myApp.userName} HARD ONE`
        },
        {
            notSeriousOption: `${myApp.userName} HARD TWO`
        },
        {
            notSeriousOption: `${myApp.userName} HARD THREE`
        }
    ]

    myApp.relLevel = $('input[name=seriousness]:checked').val();

    console.log(myApp.relLevel);

    if(myApp.relLevel === 'longTerm'){
        let finalSerRes = Math.floor(Math.random() * myApp.seriousResp.length);
        let finalSerious = myApp.seriousResp[finalSerRes].seriousOption;
        console.log(finalSerious);
        $('span').html(`${finalSerious}`);
        $('html, body').animate({
            scrollTop: $("#final").offset().top
        }, 1000);
    }
    else if(myApp.relLevel ==='shortTerm'){
        let finalNotSerRes = Math.floor(Math.random() * myApp.notSeriousResp.length);
        let finalNot = myApp.notSeriousResp[finalNotSerRes].notSeriousOption;
        console.log(finalNot);
        $('.results').html(`${finalNot}`);

        $('html, body').animate({
            scrollTop: $("#final").offset().top
        }, 1000);
    };
   
});
$(function () {
    //clear form and return to top
    $('.start-again').click(function (e) {
        e.preventDefault();
        $('form input[type="text"]').val('');
        $('.results ').val('');
        $('input[type=radio]').prop("checked", false);
        $('html, body').animate({
            scrollTop: $("#demographics").offset().top
        }, 1000);
    });
    //smooth scroll
    $('a').smoothScroll();
});


    