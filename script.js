let result = document.querySelector('.result');
let btn = document.querySelectorAll('.btn button');

let rlt = 0;

let clickedButton;

function counter() {
    if(clickedButton === 'increase'){
        rlt += 1;
    }
    if(clickedButton === 'decrease'){
        rlt -= 1;
    }
    if(clickedButton === 'reset'){
        rlt = 0;
    }
result.innerHTML = `${rlt}`;
}
function changeOfcolor() {
    if(rlt < 0) {
        result.style.color = 'red';
    }
    if(rlt > 0) {
        result.style.color = 'green';
    }
    if(rlt === 0) {
        result.style.color = 'rgb(0, 102, 107)';
    }
}

btn.forEach((element) => {
    element.addEventListener('click', (event) => {
        clickedButton = event.target.id;
        counter();
        changeOfcolor();
    })        
})
