let result = document.querySelector('.result');
let btn = document.querySelectorAll('.btn button');

let count = 0;

let clickedButton;

function incrementCount() {
    if(clickedButton === 'increase'){
        count += 1;
    }
} 
function decrementCount() {
    if(clickedButton === 'decrease'){
        count -= 1;
    }
}
function resetCount() {
    if(clickedButton === 'reset'){
        count = 0;
    }
}
function getCount() {
    return count;
}

btn.forEach((element) => {
    element.addEventListener('click', (event) => {
        clickedButton = event.target.id;
        
        incrementCount();
        decrementCount();
        resetCount();
        getCount();

        result.innerHTML = getCount();
        
        if(count < 0) {
            result.style.color = 'red';
        }
        if(count > 0) {
            result.style.color = 'green';
        }
        if(count === 0) {
            result.style.color = 'rgb(0, 102, 107)';
        }
    })        
})
