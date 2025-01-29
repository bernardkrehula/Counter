let result = document.querySelector('.result');
let btn = document.querySelectorAll('.btn button');

let count = 0;

let activeIndex;

function incrementCount() {
        count += 1;
} 
function decrementCount() {
        count -= 1;
}
function resetCount() {
        count = 0;
}
function getCount() {
    return count;
}
console.log(activeIndex);
btn.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        
        activeIndex = index;
        result.innerHTML = getCount();
        
            if(activeIndex === 2) {
                incrementCount();
                if(count >= 0) {
                    result.style.color = 'green';
                }
            }
            if(activeIndex === 0) {
                decrementCount();
                if(count <= 0) {
                    result.style.color = 'red';
                }
            }
            if(activeIndex === 1){
                resetCount();
                if(count === 0) {
                    result.style.color = 'rgb(0, 102, 107)';
        
                }
            }
    })        
})
