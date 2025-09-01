let form = document.getElementById("form")
let submitBtn = document.getElementById("submitBtn")
let restartBtn = document.getElementById("restartBtn")
let spanNumber = document.getElementById("spanNumber")
let input = document.getElementById("input")



let health = 7
spanNumber.textContent = "??"
let systemNumber = Math.floor(Math.random() * 100)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const userGues = Number(e.target.inputForm.value)
    if (systemNumber > userGues) {
        health--
        alert(" عددت کوچکتره بیشتر تلاش کن جون های باقیمانده :" + health)
    }
    else if (systemNumber < userGues) {
        alert(" عددت بزرگتره بیشتر تلاش کن جون های باقیمانده :" + health)
        health--
    }
    else if (systemNumber === userGues) {
        alert("افرین تو بردی")
        spanNumber.textContent = systemNumber;
        submitBtn.disabled = true;
        restartBtn.classList.add("display")
        restartBtn.classList.remove("button1")
        submitBtn.classList.add("button1")
        submitBtn.classList.remove("input2")
        input.classList.add("button1")
        input.classList.remove("input1")
    }
    healthLog(health);
    e.target.inputForm.value = "";
})
restartBtn.addEventListener("click", () => {
    location.reload();
})
function healthLog(health) {
    if (health === 0) {
        alert("ببخشید جون هات تموم شدن . دوباره شروع کن")
        restartBtn.classList.add("display")
        restartBtn.classList.remove("button1")
        submitBtn.classList.add("button1")
        submitBtn.classList.remove("input2")
        input.classList.add("button1")
        input.classList.remove("input1")
        spanNumber.textContent = systemNumber;
    }
}
healthLog(health);
