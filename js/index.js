
const NoakhaliInput = document.getElementById('noakhali-donate-btn')
NoakhaliInput.addEventListener("click", function(){
    
    const NoakhalidonateInput = parseFloat(document.getElementById("noakhali-donate-input").value)
    
    const NoakhalidonateAmount = parseFloat(document.getElementById("noakhali-donate-amount").innerText)
        
    const noaNewDonate = NoakhalidonateInput + NoakhalidonateAmount;

    document.getElementById("noakhali-donate-amount").innerText = noaNewDonate;


    const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

    const newdonateBalance = donateBalance - noaNewDonate;
    
    console.log(newdonateBalance);
    
    document.getElementById('donat-balance').innerText = newdonateBalance;
        
    })