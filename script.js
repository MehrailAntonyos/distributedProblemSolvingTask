let str = document.getElementById('str');

function isPalidrome() {
    let expression = str.value;
    let splittedStr = '';
    let temp = 0;
    let temp2 = 0;
    let startOfStr = 0;
    let endOfStr = 0;
    for (var i = 0; i <= expression.length; i++) {
        for (var j = i + 1; j <= expression.length; j++) {
            if (expression[j] == expression[i]) {
                temp = j;

                if (i > 2 && temp2 - temp < 1) {
                    temp2 = i;
                    endOfStr = temp;
                    startOfStr = temp2;
                    splittedStr = splittedStr + expression[j];
                    spliceString(startOfStr, endOfStr, str.value);
                    return startOfStr, endOfStr;

                }
            }
        }
    }
}

function spliceString(startOfStr, endOfStr, stringToCheck) {

    let isPalidrome = document.getElementById('isPalidrome');
    console.log("position to splice", startOfStr, endOfStr , "string", stringToCheck);
    let stringToCheckArray = stringToCheck.toString().split('');
    let stringCheckTrue = stringToCheckArray.splice(startOfStr, endOfStr).join('');

    if (stringCheckTrue.length > 2) {
        console.log("Palidrome is", stringCheckTrue)
        isPalidrome.innerText = stringCheckTrue;
        isPalidrome.style.display = 'block'
        isPalidrome.style.color = 'green'
    }
    else{
        isPalidrome.innerText = 'not found';
        isPalidrome.style.display = 'block'
        isPalidrome.style.color = 'red'
    }

}
