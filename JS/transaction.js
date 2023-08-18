// Shared Functions
function getValueById (inputId){
    const getElemnet = document.getElementById(inputId);
    const getValue = getElemnet.value;
    const newValue = parseFloat(getValue);
    getElemnet.value = ''
    return newValue;
}
function getInnerTextById (inputId) {
    const getElemnet = document.getElementById(inputId);
    const getInnerText = getElemnet.innerText;
    const oldValue = parseFloat(getInnerText);
    return oldValue;
}
function setValue(elemnetId, value){
    const getElemnet = document.getElementById(elemnetId);
    getElemnet.innerText = value;
}
//deposit money
document.getElementById('deposit_btn').addEventListener('click', function(){
        const newValue = getValueById ('new-deposit');
        if (isNaN(newValue)) {
           return alert ('Please Insert a valid number');
        }
        else if (newValue < 0){
            return alert ('Please Insert a positive number')
        }
        const oldValue = getInnerTextById ('old-deposit');
        const depositTotal = oldValue + newValue;
        setValue ('old-deposit', depositTotal)
        const oldTotal = getInnerTextById ('total-balance');
        const newTotal = oldTotal + newValue;
        setValue ('total-balance', newTotal);
})
// deposit with enter btn
document.getElementById("new-deposit").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        const newValue = getValueById ('new-deposit');
        if (isNaN(newValue)) {
           return alert ('Please Insert a valid number');
        }
        else if (newValue < 0){
            return alert ('Please Insert a positive number')
        }
        const oldValue = getInnerTextById ('old-deposit');
        const depositTotal = oldValue + newValue;
        setValue ('old-deposit', depositTotal)
        const oldTotal = getInnerTextById ('total-balance');
        const newTotal = oldTotal + newValue;
        setValue ('total-balance', newTotal);
    }
})
// Withdraw money 
document.getElementById('withdraw_btn').addEventListener('click', function(){
    const newValue = getValueById ('new-withdraw');
    if (isNaN(newValue)) {
        return alert ('Please Insert a valid number');
     }
    else if (newValue < 0){
        return alert ('Please Insert a positive number')
    }
    const oldValue = getInnerTextById ('old-withdraw');
    const withdrawTotal = oldValue + newValue;

    const oldTotal = getInnerTextById ('total-balance');
    if (oldTotal < newValue) {
        return alert('Can not withdraw more then Balance')
    }
    const newTotal = oldTotal - newValue;
    setValue ('old-withdraw', withdrawTotal); 
    setValue ('total-balance', newTotal);
})
// withdraw with enter btn 
document.getElementById("new-withdraw").addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        const newValue = getValueById ('new-withdraw');
    if (isNaN(newValue)) {
        return alert ('Please Insert a valid number');
     }
    else if (newValue < 0){
        return alert ('Please Insert a positive number')
    }
    const oldValue = getInnerTextById ('old-withdraw');
    const withdrawTotal = oldValue + newValue;

    const oldTotal = getInnerTextById ('total-balance');
    if (oldTotal < newValue) {
        return alert('Can not withdraw more then Balance')
    }
    const newTotal = oldTotal - newValue;
    setValue ('old-withdraw', withdrawTotal); 
    setValue ('total-balance', newTotal);
    }
})