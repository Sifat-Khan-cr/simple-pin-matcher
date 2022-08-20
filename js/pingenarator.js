function getPin() {
    const pin = Math.round(Math.random() * 10000);
    if (pin < 1000) {
        return getPin();
    } else {
        return pin;
    }
}
function getId(data) {
    return document.getElementById(data);
}


getId("pin-gen-btn").addEventListener('click', function () {
    getId("wrong").style.display = 'none';
    getId("right").style.display = 'none';
    getId("pin-gen-display").value = getPin();
})
document.getElementById("cal-body").addEventListener('click', function (event) {
    const field = getId("cal-display");
    const prevNumber = getId("cal-display").value;
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number === 'C') {
            field.value = '';
        }
        else if (number === '<') {
            const digits = prevNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            field.value = remainingDigits;
        }
    }
    else {
        const newTypedNumber = prevNumber + number;
        field.value = newTypedNumber;
    }

})
getId("submit-btn").addEventListener('click', function () {
    if (getId("pin-gen-display").value === getId("cal-display").value) {
        getId("wrong").style.display = 'none';
        getId("right").style.display = 'block';
        getId("pin-gen-display").value = "";
        getId("cal-display").value = "";
    } else {
        getId("right").style.display = 'none';
        getId("wrong").style.display = 'block';
        getId("pin-gen-display").value = "";
        getId("cal-display").value = "";

    }
})