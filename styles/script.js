//PSEUDOCODE
//using stored values, a paragraph is generated
//provide a way for user to easily copy the code
//allow user to share website on twitter
const myApp = {};

//Allow user to input information
$('form').on('submit', function (e) {
    //When user clicks submit, values are stored
    e.preventDefault();
    myApp.userName = $('input[name=yourName]').val();
    console.log(myApp.userName);
    
    myApp.userAge = $('input[name=yourAge]').val();
    console.log(myApp.userAge);
    
    myApp.userLocal = $('input[name=yourLocation]').val();
    console.log(myApp.userLocal);
    

    myApp.userQualityOne = $('input[name=first-qual]').val();
    console.log(myApp.userQualityOne);

    myApp.userQualityTwo = $('input[name=quality-two]').val();
    console.log(myApp.userQualityTwo);

    myApp.userInterestOne = $('input[name=interest-one]').val();
    console.log(myApp.userInterestOne);
    
    myApp.userInterestTwo = $('input[name=interest-two]').val();
    console.log(myApp.userInterestTwo);
    
    myApp.userInterestThree = $('input[name=interest-three]').val();
    console.log(myApp.userInterestThree);
    
    
    
    myApp.relLevel = $('input[name=seriousness]:checked').val();
    
    console.log(myApp.relLevel);
    //depending on type of relationship preference, options of serious or not serious responses are provided
    //on submit, final page is presented
    myApp.seriousResp = [
        {
            seriousOption: `Hi there. My name is ${myApp.userName} and I'm just your average ${myApp.userAge} year old from ${myApp.userLocal}. I'm just a hopeless romantic looking for my soulmate. I love ${myApp.userInterestOne} and ${myApp.userInterestTwo}, but my real passion is ${myApp.userInterestThree}. I think my friends would say that I'm both ${myApp.userQualityOne} and ${myApp.userQualityTwo}, but you'll have to see for yourself! Not looking for drama or games, I'm an open book!`
        },
        {
            seriousOption: `Hey! I'm ${myApp.userName}, I'm an easy going ${myApp.userAge} year old from ${myApp.userLocal}. Looking for my partner in crime - maybe that's you? I'm not ashamed to admit that the best things about me are ${myApp.userQualityOne} and ${myApp.userQualityTwo}. In my spare time I really enjoy ${myApp.userInterestOne} and ${myApp.userInterestTwo}, but secretly I love ${myApp.userInterestThree}. Oh, and my mom says I'm a catch and my Uber rating is a 4.8!`
        },
        {
            seriousOption: `I'm ${myApp.userName}, a simple ${myApp.userAge} year old living in ${myApp.userLocal}. I'm really lookng for someone to enjoy this adventure we call life with me! I bet you've never met someone so ${myApp.userQualityOne} AND ${myApp.userQualityTwo}! When I have some free time, my favourite things are ${myApp.userInterestOne} and ${myApp.userInterestTwo}, and sometimes ${myApp.userInterestThree}. 🍕 🌮 😎 ✈️ 🎥 💯 🌏 🥑`
        },
        {
            seriousOption: `My name is ${myApp.userName}, and I'm just a typical ${myApp.userAge} year old currently living in ${myApp.userLocal}. My life is full but it feels like it's missing something - maybe it's you? Let's meet up and talk about ${myApp.userInterestOne} and ${myApp.userInterestTwo}, or maybe make a plan to enjoy ${myApp.userInterestThree}? How would I describe myself? I'd say ${myApp.userQualityOne} and ${myApp.userQualityTwo}. Would also love to meet someone soon so my family stops asking why I'm stil single!`
        }
    ];
    myApp.notSeriousResp = [
        {
            notSeriousOption: `Hello, there. I'm ${myApp.userName}, ${myApp.userAge}  from ${myApp.userLocal} with a really great ${myApp.userQualityOne}. Just to cut to the chase, I'm not looking to settle down right now so if that's you, don't bother! When I'm not working hard, I'm into ${myApp.userInterestOne} and ${myApp.userInterestTwo}. Would also really like to meet someone who is into ${myApp.userInterestThree}. Oh, dd I mention my amazing ${myApp.userQualityTwo}? Willing to lie about how we met lol.`
        },
        {
            notSeriousOption: `Hi! I'm ${myApp.userName}, an easy going ${myApp.userAge} from ${myApp.userLocal}. Looking for someone to have some fun with - open minded and judgement free is a must! I spend a lot of time on ${myApp.userInterestOne} and ${myApp.userInterestTwo}, and sometimes I enjoy ${myApp.userInterestThree}. Do you like someone who is ${myApp.userQualityOne} and ${myApp.userQualityTwo}? Perfect, we'll get along just fine. Good vibes only, leave your baggage at home.`
        },
        {
            notSeriousOption: `I'm ${myApp.userName}, ${myApp.userAge}  from ${myApp.userLocal}. Mostly looking for friends and casual hang outs, but let's see where things go. Do you enjoy ${myApp.userInterestOne} or ${myApp.userInterestTwo}? Great! I also reallly love ${myApp.userInterestThree} if that's something you'd be into. Let's just together and see where things go. Not looking for a pen pal.`
        },
        {
            notSeriousOption: `Oh hey. ${myApp.userName}, ${myApp.userAge} from ${myApp.userLocal} with an amazing ${myApp.userQualityOne}. Not looking for a commitment, just someone to chill with on the weekends. Really only into people who share my love of ${myApp.userInterestOne} and ${myApp.userInterestTwo}. Negotiable on my interest in ${myApp.userInterestThree}, but you should also enjoy that I am ${myApp.userQualityTwo}. Just looking for someone with a good smile and sense of humour. Why bother matching if we're never going to speak?`
        }

    ]
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


    