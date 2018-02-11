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
    
    myApp.userInterestOne = $('input[name=interest-one]').val();
    console.log(myApp.userInterestOne);

    myApp.userInterestTwo = $('input[name=interest-two]').val();
    console.log(myApp.userInterestTwo);

    myApp.userInterestThree = $('input[name=interest-three]').val();
    console.log(myApp.userInterestThree);

    myApp.seriousResp = [
        {
            seriousOption: `Hi there. My name is ${myApp.userName} and I'm just your average ${myApp.userAge} year old from ${myApp.userLocal}. I'm just a hopeless romantic looking for my soulmate. I love ${myApp.userInterestOne} and ${myApp.userInterestTwo}, but my real passion is ${myApp.userInterestThree}. Not looking for drama, or games!`
        },
        {
            seriousOption: `Hey! I'm ${myApp.userName}, I'm an easy going ${myApp.userAge} year old from ${myApp.userLocal}. Looking for my partner in crime - maybe that's you? In my spare time I really enjoy ${myApp.userInterestOne} and ${myApp.userInterestTwo}, but secretly I love ${myApp.userInterestThree}. Oh, and my mom says I'm a catch!`
        },
        {
            seriousOption: `I'm ${myApp.userName}, a simple ${myApp.userAge} year old living in ${myApp.userLocal}. I'm really lookng for someone to enjoy this adventure we call life with me! When I have some free time, my favourite things are ${myApp.userInterestOne} and ${myApp.userInterestTwo}, and sometimes ${myApp.userInterestThree}. 🍕 🌮 😎 ✈️ 🎥 💯 🌏`
        },
        {
            seriousOption: `My name is ${myApp.userName}, and I'm just a typical ${myApp.userAge} year old currently living in ${myApp.userLocal}. My life is full but it feels like it's missing something - maybe it's you? Maybe we can meet up and talk about ${myApp.userInterestOne} and ${myApp.userInterestTwo}, or maybe make a plan to enjoy ${myApp.userInterestThree}? Would also love to meet someone soon so my family stops asking why I'm stil single!`
        }
    ];
    myApp.notSeriousResp = [
        {
            notSeriousOption: `Hello, there. I'm ${myApp.userName}, ${myApp.userAge}  from ${myApp.userLocal}. Just to cut to the chase, I'm not looking to settle down right now so if that's you, don't bother! When I'm not working hard, I'm into ${myApp.userInterestOne} and ${myApp.userInterestTwo}. Would also really like to meet someone who is into ${myApp.userInterestThree}. Willing to lie about how we met lol.`
        },
        {
            notSeriousOption: `Greetings. I'm ${myApp.userName}, an open minded ${myApp.userAge}  from ${myApp.userLocal}. Looking for someone to have some fun with, open minded is a must! I spend a lot of time on ${myApp.userInterestOne} and ${myApp.userInterestTwo}, and sometimes I enjoy ${myApp.userInterestThree}. Good vibes only, leave your baggage at home`
        },
        {
            notSeriousOption: `I'm ${myApp.userName}, ${myApp.userAge}  from ${myApp.userLocal}. Mostly looking for friends and casual hang outs, but let's see where things go. Do you enjoy ${myApp.userInterestOne} or ${myApp.userInterestTwo}? Great! I also reallly love ${myApp.userInterestThree} if that's something you'd be into. Let's just together and see where things go`
        },
        {
            notSeriousOption: `Oh hey. ${myApp.userName}, ${myApp.userAge}  from ${myApp.userLocal}. Not looking for a commitment, just someone to chill with on the weekends. Really only into people who share my love of ${myApp.userInterestOne} and ${myApp.userInterestTwo}. Negotiable on my interest in ${myApp.userInterestThree}. Just looking for someone with a good smile and sense of humour.`
        }
        
    ]

    myApp.relLevel = $('input[name=seriousness]:checked').val();
    console.log(myApp.relLevel);

    if(myApp.relLevel === 'longTerm'){
        let finalSerRes = Math.floor(Math.random() * myApp.seriousResp.length);
        let finalSerious = myApp.seriousResp[finalSerRes].seriousOption;
        console.log(finalSerious);
        $('.results').html(`${finalSerious}`);
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


    