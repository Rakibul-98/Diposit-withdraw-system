function handleLogin() {
    document.getElementById("login-sec").style.display='none';
    document.getElementById("transaction-sec").style.display='block';
}

function handleDepositWithdraw(type,isDeposit) {
    const typedAmount = document.getElementById(type+"-amount");
    const typedNumber = parseInt(typedAmount.value);
    const amountValue = document.getElementById(type + "-total");
    const amountNumber = parseInt(amountValue.innerText);
    const totalInput = typedNumber + amountNumber;
    document.getElementById(type + "-total").innerText=totalInput;
    document.getElementById(type + "-amount").value='';
    const balance=document.getElementById("balance");
    const balanceNumber = parseInt(balance.innerText);
    if (isDeposit == 'true') {
        const newBalance = balanceNumber+typedNumber;
        document.getElementById("balance").innerText=newBalance;
    }
    else if(isDeposit == 'false'){
        const newBalance = balanceNumber-typedNumber;
        document.getElementById("balance").innerText=newBalance;
    }
}