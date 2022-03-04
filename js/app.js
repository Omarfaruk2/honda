
//----------------------------------------- Input function-----------------
function getinput(money) {
    const out = 2000;
    const input = document.getElementById(money + '-input');
    const inputvalueText = input.value;
    const inputValue = parseInt(inputvalueText);
    // if (isNaN(input.value) || input.value < 0 || input.value == '') {
    //     good.innerText = out;
    //     return alert("Your number isn't a valid, Input a valid number");
    // }

    return inputValue;

}

// -------------------------------------input-Itext-function----------------------------------
function getText(jan) {
    const textValue = document.getElementById(jan + '-money')
    return textValue;
}

// -------------------------------------------calculate -Button----------------------------
document.getElementById('calculate-btn').addEventListener('click',
    function () {
        let out = 00;
        const income = getinput('income');
        const food = getinput('food');
        const rent = getinput('rent');
        const clothes = getinput('clothes');
        const total = food + rent + clothes;
        const useMoney = getText('totalExpence')


        if (useMoney.innerText > income) {
            alert('Your Expence is more then Income, Try to expence less then income');
        }
        else if (isNaN(food) || food < 0 || food == '') {
            useMoney.innerText = 0;
            return alert("Your number isn't a valid, Input a valid number");

        }

        else if (useMoney.innerText > income) {
            alert('Your Expence is more then Income, Try to expence less then income');
        }
        // else if (useMoney.innerText > income) {
        //     alert('Your Expence is more then Income, Try to expence less then income');
        // }
        else {
            useMoney.innerText = total;
            let avilableMoney = getText('avilable');
            const avilable = income - total;
            avilableMoney.innerText = avilable
        }

    })
//   --------------------------------------------------save -Button---------------------------------
document.getElementById('save-btn').addEventListener('click',
    function () {
        let moneyValue = 00;
        let avilableMoney = getText('avilable');
        const income = getinput('income');
        const saveInput = getinput('save');
        const savingAmountValue = income * saveInput / 100;
        const savingAmount = getText('saving')
        savingAmount.innerText = savingAmountValue;
        const remainingAmount = getText('remaiening');

        if (avilableMoney.innerText < savingAmount.innerText) {
            remainingAmount.innerText = moneyValue;
            savingAmount.innerText = moneyValue;
            return alert("You don't have enough money to saving");
        }
        else {
            remainingAmount.innerText = avilableMoney.innerText - savingAmount.innerText;
        }
    })


