


function deposit(){
    let depositValue = document.getElementById('deposit-value');
    let depositOutput = document.getElementById('deposit-output');
    let balanceOutput = document.getElementById('balance-output');

    depositOutput.innerText = parseInt(depositOutput.innerText) + parseInt(depositValue.value); 
    balanceOutput.innerText = parseInt(balanceOutput.innerText) + parseInt(depositValue.value); 
    depositValue.value = '';
}


function withdraw() {
    let withdrawValue =  document.getElementById('withdraw-value');
    let withdrawOutput =  document.getElementById('withdraw-output');
    let balanceOutput = document.getElementById('balance-output');


    withdrawOutput.innerText = parseInt(withdrawOutput.innerText) + parseInt (withdrawValue.value);
    balanceOutput.innerText = parseInt(balanceOutput.innerText) - parseInt(withdrawValue.value);
    withdrawValue.value = '';
    
}