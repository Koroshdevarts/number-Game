let form = document.getElementById("form")
let submitBtn = document.getElementById("submitBtn")
let restartBtn = document.getElementById("restartBtn")
let spanNumber = document.getElementById("spanNumber")



spanNumber.textContent = "??"
let systemNumber = Math.floor(Math.random() * 100)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userGues = Number(e.target.inputForm.value)
    if (systemNumber > userGues) {
        alert("عددت کوچکتره بیشتر تلاش کن")
    }
    else if (systemNumber < userGues) {
        alert("عددت بزرگتره بیشتر تلاش کن")
    }
    else if (systemNumber === userGues) {
        alert("افرین تو بردی")
        spanNumber.textContent = systemNumber;
        submitBtn.disabled = true;
        restartBtn.classList.add("display")
        restartBtn.classList.remove("button1")
        submitBtn.classList.add("button1")
        submitBtn.classList.remove("input2")
    }
    e.target.inputForm.value = "";
})
restartBtn.addEventListener("click", () => {
    location.reload();
})
