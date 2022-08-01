const inputN = document.querySelector('#inputN');
const inputA = document.querySelector('#inputA');
const inputB = document.querySelector('#inputB');
const labelN = document.querySelector('#labelN');
const labelA = document.querySelector('#labelA');
const labelB = document.querySelector('#labelB');
const checkBtn = document.querySelector('.btn');
const body = document.querySelector('body');
let checkType = [];
let checkDivisibility = [];
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
console.log(inputA.valueAsNumber);


checkBtn.addEventListener('click', () => {
    checkType = [];
    if (inputN.valueAsNumber % 1 !== 0) {
        const error = document.createElement('p');
        error.classList.add('errorType');
        error.innerText = 'The N value is not a number';
        labelN.appendChild(error);
        sleep(5000).then(() => { labelN.removeChild(error) });
        checkType.push(false);
    } else {
        checkType.push(true);
    }
    if (inputA.valueAsNumber % 1 !== 0) {
        const error = document.createElement('p');
        error.classList.add('errorType');
        error.innerText = 'The A value is not a number';
        labelA.appendChild(error);
        sleep(5000).then(() => { labelA.removeChild(error) });
        checkType.push(false);
    } else {
        checkType.push(true);
    }
    if (inputB.valueAsNumber % 1 !== 0) {
        const error = document.createElement('p');
        error.classList.add('errorType');
        error.innerText = 'The B value is not a number';
        labelB.appendChild(error);
        sleep(5000).then(() => { labelB.removeChild(error) });
        checkType.push(false);
    } else {
        checkType.push(true);
    }
    switch (checkType.includes(false)) {
        case true:
            console.log('no');
            break;
        case false:
            // checkDivisibility = inputN.valueAsNumber % inputA.valueAsNumber === 0 && inputN.valueAsNumber % inputB.valueAsNumber === 0;
            if (inputN.valueAsNumber % inputA.valueAsNumber === 0 && inputN.valueAsNumber % inputB.valueAsNumber === 0) {
                const divisibility = document.createElement('p');
                divisibility.classList.add('divsibility');
                divisibility.innerText = `The ${inputN.valueAsNumber}(N) is divisible by ${inputA.valueAsNumber}(A) and ${inputB.valueAsNumber}(B).`;
                body.appendChild(divisibility);
                inputN.valueAsNumber = NaN;
                inputA.valueAsNumber = NaN;
                inputB.valueAsNumber = NaN;
            } 
            else if (inputN.valueAsNumber % inputA.valueAsNumber === 0 && inputN.valueAsNumber % inputB.valueAsNumber !== 0) {
                const divisibility = document.createElement('p');
                divisibility.classList.add('notdivsibility');
                divisibility.innerText = `The ${inputN.valueAsNumber}(N) is not divisible by ${inputB.valueAsNumber}(B).`;
                body.appendChild(divisibility);
                inputN.valueAsNumber = NaN;
                inputA.valueAsNumber = NaN;
                inputB.valueAsNumber = NaN;
            }
            else if (inputN.valueAsNumber % inputA.valueAsNumber !== 0 && inputN.valueAsNumber % inputB.valueAsNumber === 0) {
                const divisibility = document.createElement('p');
                divisibility.classList.add('notdivsibility');
                divisibility.innerText = `The ${inputN.valueAsNumber}(N) is not divisible by ${inputA.valueAsNumber}(A).`;
                body.appendChild(divisibility);
                inputN.valueAsNumber = NaN;
                inputA.valueAsNumber = NaN;
                inputB.valueAsNumber = NaN;
            }
            else if (inputN.valueAsNumber % inputA.valueAsNumber !== 0 && inputN.valueAsNumber % inputB.valueAsNumber !== 0) {
                const divisibility = document.createElement('p');
                divisibility.classList.add('notdivsibility');
                divisibility.innerText = `The ${inputN.valueAsNumber}(N) is not divisible by ${inputA.valueAsNumber}(A). and ${inputB.valueAsNumber}(B).`;
                body.appendChild(divisibility);
                inputN.valueAsNumber = NaN;
                inputA.valueAsNumber = NaN;
                inputB.valueAsNumber = NaN;
            }
    }
}
);

document.addEventListener('DOMContentLoaded', () => {
    inputN.valueAsNumber = NaN;
    inputA.valueAsNumber = NaN;
    inputB.valueAsNumber = NaN;
})
