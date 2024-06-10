/*

1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5 also make sure to convert the input into a number by using parseFloat
3.get previous withdraw total
4. calculate total withdraw amount
4.5 set total withdraw amount 
5. get the previous balance total
6. calculate new balance total
6.5 set the new balance to total
7. last-step: clera the input field

*/


// Step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('you get it');

    // step-2 
    const withdrawfield = document.getElementById('withdraw-field');

    const newWithdrawAmountString = withdrawfield.value;

    const newwithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newwithdrawAmount);

    // 7. last-step
    withdrawfield.value = '';


    if (isNaN(newwithdrawAmount)) {
        alert('Plesae Provide Numbers');
        return;
    }

    // step-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');

    const previouswithdrawTotalstring = withdrawTotalElement.innerText;

    const previouswithdrawTotal = parseFloat(previouswithdrawTotalstring);

    // console.log(previouswithdrawTotal); 

    // // step-4 
    // const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;

    // withdrawTotalElement.innerText = currentwithdrawTotal;

    // step-5
    const balanceTotalelement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalelement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // console.log(previousBalanceTotal);


    if (newwithdrawAmount > previousBalanceTotal) {
        alert('You can not withdraw')
        return;
    }
    // step-4 
    const currentwithdrawTotal = previouswithdrawTotal + newwithdrawAmount;

    withdrawTotalElement.innerText = currentwithdrawTotal;


    // step-6
    const newBalanceTotal = previousBalanceTotal - newwithdrawAmount;

    balanceTotalelement.innerText = newBalanceTotal;




})
