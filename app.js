// Pin Generator
function generatePin() {
    const generate = Math.floor(1000 + Math.random() * 9000) + '';
    document.getElementById('generate-input').value = generate;
}''
// handle calculator event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById("typed-pin");
            typedInput.value = '';
        }
    } else {
        const typedInput = document.getElementById("typed-pin");
        typedInput.value = typedInput.value + digit;
    }
});
// Match Pin
function matchPin() {
    const pin = document.getElementById('generate-input').value;
    const typePin = document.getElementById("typed-pin").value;
    if (pin === typePin) {
        displayMatchResult('block', 'none');
    } else {
        displayMatchResult('none' ,'block');
    }
};
// display match result
function displayMatchResult(correctStatus, inCorrectStatus){
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = inCorrectStatus;
};