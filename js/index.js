
const noakhaliInput = document.getElementById('noakhali-donate-btn')
noakhaliInput.addEventListener("click", function () {


    const noakhalidonateInput = parseFloat(document.getElementById("noakhali-donate-input").value);


    if (noakhalidonateInput <= 0 || isNaN(noakhalidonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        noakhaliInput.setAttribute("onclick", "my_modal_4.showModal()");
    }


    const noakhalidonateAmount = parseFloat(document.getElementById("noakhali-donate-amount").innerText);

    const noaNewDonate = noakhalidonateInput + noakhalidonateAmount;

    document.getElementById("noakhali-donate-amount").innerText = noaNewDonate;


    const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

    const newdonateBalance = donateBalance - noaNewDonate;

    document.getElementById('donat-balance').innerText = newdonateBalance;



})



const feniInput = document.getElementById('feni-btn')
feniInput.addEventListener("click", function () {

    const fenidonateInput = parseFloat(document.getElementById('feni-input').value)

    if (fenidonateInput <= 0 || isNaN(fenidonateInput)) {
        alert('Invailed Input');
        return;
    }

    const feniAmount = parseFloat(document.getElementById('feni-amount').innerText)

    const feninewbalance = fenidonateInput + feniAmount;

    document.getElementById('feni-amount').innerText = feninewbalance;

    const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

    const newdonateBalance = donateBalance - feninewbalance;

    document.getElementById('donat-balance').innerText = newdonateBalance;


})

const quotaInput = document.getElementById('quota-btn')
quotaInput.addEventListener("click", function () {

    const quotadonateInput = parseFloat(document.getElementById('quota-input').value)

    if (quotadonateInput <= 0 || isNaN(quotadonateInput)) {
        alert('Invailed Input');
        return;
    }


    console.log(quotadonateInput)

    const quotaAmount = parseFloat(document.getElementById('quota-amount').innerText)

    const quotanewbalance = quotadonateInput + quotaAmount;

    document.getElementById('quota-amount').innerText = quotanewbalance;

    const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

    const newdonateBalance = donateBalance - quotanewbalance;

    document.getElementById('donat-balance').innerText = newdonateBalance;



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