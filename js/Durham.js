const restaurants = ['Chicken Hut: BOGO chicken dinners after 5pm everyday', 
    'Bocci: Free breadsticks with pizza purchase everyday before 6pm', 
    'Nantucket: $10 off prime rib after 9pm every day',
    'Nzingas: BOGO shrimp and grits everyday from 11am-3pm',
    'Fosters: 50% entrees everyday 3pm-7pm'
];
const deal = document.querySelector('#answerDiv2');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let searchRest = input.value.toLowerCase();
    input.value='';
    input.focus();
    for (let rests = 0; rests < restaurants.length; rests++){
        let restDeal = restaurants[rests].split(':');
        if(restDeal[0].toLowerCase() === searchRest){
            deal.textContent = restDeal[0] + '\'s deal for the week is' + restDeal[1] + '.';
           break; 
        } else {
            deal.textContent = 'Restaurant not in top 5';
        }


    }


});