
// Noakhali section 
const noakhaliInput = document.getElementById('noakhali-donate-btn')
noakhaliInput.addEventListener("click", function () {


    const noakhalidonateInput = parseFloat(document.getElementById("noakhali-donate-input").value);


    if (noakhalidonateInput <= 0 || isNaN(noakhalidonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        const noakhalidonateAmount = parseFloat(document.getElementById("noakhali-donate-amount").innerText);

        const noaNewDonate = noakhalidonateInput + noakhalidonateAmount;

        document.getElementById("noakhali-donate-amount").innerText = noaNewDonate;


        const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

        const newdonateBalance = donateBalance - noaNewDonate;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        const historysection = document.createElement("div")
        historysection.className = ' w-[100%] justify-center max-[576px]:w-[100%] gap-6 p-6 justify-items-center border-2 border-gray-300 rounded-2xl mx-auto max-[576px]:flex-col'

        historysection.innerHTML = `
        <h1 class="text-lg font-semibold">${noakhalidonateInput} Taka is Donated for famine-2024 at Noakhali, Bangladesh</h1>
        <p>Date & Time: ${new Date()}</p>
        `

        const historydonatelist = document.getElementById('history-section')
        historydonatelist.insertBefore(historysection, historydonatelist.firstChild)

        const modal = document.getElementById('my_modal_4');
        modal.showModal() = noakhaliInput;

    }

})


// Feni section

const feniInput = document.getElementById('feni-btn')
feniInput.addEventListener("click", function () {

    const fenidonateInput = parseFloat(document.getElementById('feni-input').value)

    if (fenidonateInput <= 0 || isNaN(fenidonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        const feniAmount = parseFloat(document.getElementById('feni-amount').innerText)

        const feninewbalance = fenidonateInput + feniAmount;

        document.getElementById('feni-amount').innerText = feninewbalance;

        const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

        const newdonateBalance = donateBalance - feninewbalance;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        const historysection = document.createElement("div")
        historysection.className = ' w-[100%] justify-center max-[576px]:w-[100%] gap-6 p-6 justify-items-center border-2 border-gray-300 rounded-2xl mx-auto max-[576px]:flex-col'

        historysection.innerHTML = `
        <h1 class="text-lg font-semibold">${fenidonateInput} Taka is Donated for Flood Relief in Feni,Bangladesh</h1>
        <p>Date & Time: ${new Date()}</p>
        `


        const historydonatelist = document.getElementById('history-section')
        historydonatelist.insertBefore(historysection, historydonatelist.firstChild)


        //----- modal ----
        const modal = document.getElementById('my_modal_4');
        modal.showModal() = feniInput;
    }







})

// Quata Movment 

const quotaInput = document.getElementById('quota-btn')
quotaInput.addEventListener("click", function () {

    const quotadonateInput = parseFloat(document.getElementById('quota-input').value)

    if (quotadonateInput <= 0 || isNaN(quotadonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        
        const quotaAmount = parseFloat(document.getElementById('quota-amount').innerText)

        const quotanewbalance = quotadonateInput + quotaAmount;

        document.getElementById('quota-amount').innerText = quotanewbalance;

        const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

        const newdonateBalance = donateBalance - quotanewbalance;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        const historysection = document.createElement("div")
        historysection.className = ' w-[100%] justify-center max-[576px]:w-[100%] gap-6 p-6 justify-items-center border-2 border-gray-300 rounded-2xl mx-auto max-[576px]:flex-col'

        historysection.innerHTML = `
        <h1 class="text-lg font-semibold">${quotadonateInput} 15500 Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h1>
        <p>Date & Time: ${new Date()}</p>
        `


        const historydonatelist = document.getElementById('history-section')
        historydonatelist.insertBefore(historysection, historydonatelist.firstChild)

        //----- modal ----
        const modal = document.getElementById('my_modal_4');
        modal.showModal() = feniInput;
    }




})

const historyButton = document.getElementById('history-btn')

historyButton.addEventListener("click", function () {

    historyButton.classList.add(
        "btn",
        "bg-[#B4F461]",
        "text-xl",
        "border-none",
        "px-6");
    donateButton.classList.remove("bg-[#B4F461]")

    document.getElementById('donation-section').classList.add("hidden")
    document.getElementById('history-section').classList.remove("hidden")

})

const donateButton = document.getElementById('donate-btn')
donateButton.addEventListener("click", function () {

    donateButton.classList.add(
        "btn",
        "bg-[#B4F461]",
        "text-xl",
        "border-none",
        "px-6"
    )
    historyButton.classList.remove("bg-[#B4F461]")

    document.getElementById('donation-section').classList.remove("hidden")
})