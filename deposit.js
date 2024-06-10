// step - 1: add event listener to button 

document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('clicked');

    //step-2: get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);


    // console.log(depositAmount);

    // step-3: get the deposit current total amount
    // for non-input(element other than input, textarea)use innerText to get the text

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // console.log(depositTotal);

    const previousDepositTotal = parseFloat(previousDepositTotalString);


    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    // Set the deposit total
    depositTotalElement.innerText = currentDepositTotal;


    // Step-5: get balance current total
    const balanceTotalelement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalelement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // Step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

    //set the balance total
    balanceTotalelement.innerText = currentBalanceTotal;


    // Step-last: clear the input field
    depositField.value = '';

})