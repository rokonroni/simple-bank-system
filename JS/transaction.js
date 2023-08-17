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
    const oldValue = getInnerTextById ('old-deposit');
    const depositTotal = oldValue + newValue;
    setValue ('old-deposit', depositTotal)
    const oldTotal = getInnerTextById ('total-balance');
    const newTotal = oldTotal + newValue;
    setValue ('total-balance', newTotal);
   
})
// Withdraw money 
document.getElementById('withdraw_btn').addEventListener('click', function(){
    const newValue = getValueById ('new-withdraw');
    const oldValue = getInnerTextById ('old-withdraw');
    const withdrawTotal = oldValue + newValue;
    setValue ('old-withdraw', withdrawTotal); 

    const oldTotal = getInnerTextById ('total-balance');
    const newTotal = oldTotal - newValue;
    setValue ('total-balance', newTotal);
})