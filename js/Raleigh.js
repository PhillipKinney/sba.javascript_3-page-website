const restaurants = ['Che Empanadas: BOGO empanadas after 5pm everyday', 
    'Beasley\'s Chicken and Waffles: Free Mac n Cheese everyday before 6pm', 
    'Nancy\'s Pizzeria: $10 off stuffed pizza after 9pm every day',
    'Taza Grill: BOGO Lamb Gyro everyday from 11am-3pm',
    'Winston\'s Grill: 50% entrees everyday 3pm-7pm'
]
const deal = document.querySelector('#answerDiv');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let searchRest = input.value.toLowerCase();
    input.value=' ';
    input.focus();
    for (let rests = 0; rests < restaurants.length; rests++){
        let restDeal = restaurants[rests].split(':');
        if(restDeal[0].toLocaleLowerCase() === searchRest){
            deal.textContent = restDeal[0] + '\'s deal for the week is' + restDeal[1] + '.';
            
        } else {
            deal.textContent = 'Restaurant not in top 5';
        }


    }


});