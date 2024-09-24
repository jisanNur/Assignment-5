// Input Value function 

function inputValueElemnt(id) {
    const inputValue = parseFloat(document.getElementById(id).value)
    return inputValue;
}

// Text Value function
function textValueElemnt(id) {
    const textValue = parseFloat(document.getElementById(id).innerHTML)
    return textValue;
}


// Create Element function 
function createElement(noakhalidonateInput, title) {

    const historysection = document.createElement("div");
    historysection.className = ' w-[100%] justify-center max-[576px]:w-[100%] gap-6 p-6 justify-items-center border-2 border-gray-300 rounded-2xl mx-auto max-[576px]:flex-col'

    historysection.innerHTML = `
        <h1 class="text-lg font-semibold">${noakhalidonateInput} ${title}</h1>
        <p>Date & Time: ${new Date()}</p>
        `
        console.log(noakhalidonateInput)

    const historydonatelist = document.getElementById('history-section');
    historydonatelist.insertBefore(historysection, historydonatelist.firstChild);

}

// Input reset clear function 
function clear(id){
    document.getElementById(id).value = '';
}