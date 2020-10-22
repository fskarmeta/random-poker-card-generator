let cardN = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let cardT = ["hearts", "spades", "clubs", "#9830"]

let r = (arr) => Math.floor(Math.random() * arr.length)

console.log(cardN[r(cardN)] + " " + cardT[r(cardT)]) 

window.onload = function(){
    let randomN = cardN[r(cardN)]
    let randomT = cardT[r(cardT)]
    let icon1 = document.getElementById("icon1")
    let icon2 = document.getElementById("icon2")

    let number = document.getElementById("number")
    number.innerHTML = '<p class="number">' +  randomN + '</p>'

    if (randomT === "hearts" || randomT === "#9830") {
        icon1.innerHTML = '<span class="icon  red" id="icon1">&' + randomT + ';</span>'
        icon2.innerHTML = '<span class="icon  red" id="icon1">&' + randomT + ';</span>'
    } else {
        icon1.innerHTML = '<span class="icon " id="icon1">&' + randomT + ';</span>'
        icon2.innerHTML = '<span class="icon " id="icon1">&' + randomT + ';</span>'
    }
   
}

