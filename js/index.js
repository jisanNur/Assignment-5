
// Noakhali section 
const noakhaliInput = document.getElementById('noakhali-donate-btn');
noakhaliInput.addEventListener("click", function () {

    const noakhalidonateInput = inputValueElemnt("noakhali-donate-input")

    if (noakhalidonateInput <= 0 || isNaN(noakhalidonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        const noakhalidonateAmount = textValueElemnt("noakhali-donate-amount");

        const noaNewDonate = noakhalidonateInput + noakhalidonateAmount;

        document.getElementById("noakhali-donate-amount").innerText = noaNewDonate;

        const donateBalance = textValueElemnt("donat-balance");

        const newdonateBalance = donateBalance - noaNewDonate;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        createElement(noakhalidonateInput, "Donate for Flood at Noakhali, Bangladesh")


        //----- modal ----
        const modal = document.getElementById('my_modal_4');
        modal.showModal();

        clearInput('noakhali-donate-btn')
    }

    
    
})


// Feni section

const feniInput = document.getElementById('feni-btn');
feniInput.addEventListener("click", function () {

    const fenidonateInput = parseFloat(document.getElementById('feni-input').value);

    if (fenidonateInput <= 0 || isNaN(fenidonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {
        const feniAmount = parseFloat(document.getElementById('feni-amount').innerText);

        const feninewbalance = fenidonateInput + feniAmount;

        document.getElementById('feni-amount').innerText = feninewbalance;

        const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

        const newdonateBalance = donateBalance - feninewbalance;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        createElement(fenidonateInput, "Taka Donate for Flood Relief in Feni,Bangladesh")

        //----- modal ----
        const modal = document.getElementById('my_modal_4');
        modal.showModal() = feniInput;
    }

})

// Quata Movment 

const quotaInput = document.getElementById('quota-btn');
quotaInput.addEventListener("click", function () {

    const quotadonateInput = parseFloat(document.getElementById('quota-input').value);

    if (quotadonateInput <= 0 || isNaN(quotadonateInput)) {
        alert('Invailed Input');
        return;
    }
    else {

        const quotaAmount = parseFloat(document.getElementById('quota-amount').innerText);

        const quotanewbalance = quotadonateInput + quotaAmount;

        document.getElementById('quota-amount').innerText = quotanewbalance;

        const donateBalance = parseFloat(document.getElementById('donat-balance').innerText);

        const newdonateBalance = donateBalance - quotanewbalance;

        document.getElementById('donat-balance').innerText = newdonateBalance;

        createElement(quotadonateInput, "Taka Aid for Injured in the Quota Movement");

        //----- modal ----
        const modal = document.getElementById('my_modal_4');
        modal.showModal() = feniInput;

        clearInput('quota-input')
    }




})

const historyButton = document.getElementById('history-btn');

historyButton.addEventListener("click", function () {

    historyButton.classList.add(
        "btn",
        "bg-[#B4F461]",
        "text-xl",
        "border-none",
        "px-6");
    donateButton.classList.remove("bg-[#B4F461]");

    document.getElementById('donation-section').classList.add("hidden");
    document.getElementById('history-section').classList.remove("hidden");

})

const donateButton = document.getElementById('donate-btn');
donateButton.addEventListener("click", function () {

    donateButton.classList.add(
        "btn",
        "bg-[#B4F461]",
        "text-xl",
        "border-none",
        "px-6"
    )
    historyButton.classList.remove("bg-[#B4F461]");

    document.getElementById('donation-section').classList.remove("hidden");
    document.getElementById('history-section').classList.add("hidden");

})

const blogBtn = document.getElementById('blog-btn')
blogBtn.addEventListener("click", function () {
    window.location.href = "./blog.html";

})

