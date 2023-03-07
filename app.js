const active = document.querySelector('.active')
let wr = document.querySelector('.wrapper')

active.addEventListener('click', function () {
    if (wr.hidden) {
        wr.hidden = false;
        document.querySelector('.arrow').style =  'background-image: url(./assets/Chevron1.png)'
    } else {
        wr.hidden = true;
        document.querySelector('.arrow').style = 'background-image: url(./assets/Chevron.png)'
    }

})