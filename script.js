let TimeLeft = 60
let started = false
let input = document.getElementById("input")
const levelSelect = document.getElementById("level");
let timer;
let Time = document.getElementById("Time")
let accuracy = document.getElementById("Accuracy")
let paras = {
    beginner: "Typing is a useful skill. Practice every day to get faster and more accurate.",
    intermediate: "Learning to type quickly takes patience and consistency. The more you practice, the better your speed and accuracy will become over time.",
    advanced: "Mastering typing speed requires discipline, focus, and repetition. As you improve, your brain begins to process words faster than your fingers can respond, creating a smooth and efficient workflow.",
}
let message = "You completed the typing speed test!"
let correctLetters = 0


let selectLevel = document.getElementById("level")
let paragraph = document.getElementById("paragraph")
function StartTimer() {
    timer = setInterval(() => {
        TimeLeft--;
        Time.innerText = TimeLeft;
        if (TimeLeft <= 0) {
            clearInterval(timer);
            input.disabled = true;
            started = false
        }
        

    }, 1000)
}
function ShowWinMessage() {
    clearInterval(timer);
    input.disabled = true;
    started = false
    alert(message);

}
selectLevel.addEventListener("change", (event) => {
    let selectedLevel = event.target.value;
    let paragraphText = paras[selectedLevel]
    paragraphText.split("").forEach(Char => {
        let span = document.createElement("span")
        span.innerText = Char
        paragraph.appendChild(span)

    });
})

input.addEventListener("input", () => {
    if (!started) {
        StartTimer();
        started = true
    }
    correctLetters = 0

    let typedText = input.value.split("")
    let spans = paragraph.querySelectorAll("span")
    spans.forEach((span, index) => {
        let typedChar = typedText[index];
        console.log(typedChar)
        if (!typedChar) {
            span.classList.remove("correct", "incorrect")
        }
        else if (typedChar == span.innerText) {
            span.classList.add("correct")
            span.classList.remove("incorrect")
            correctLetters++
        }
        else {
            span.classList.add("incorrect")
            span.classList.remove("correct")
        }


    })
    calculateAccuracy()
    if (input.value == paragraph.textContent) {
        ShowWinMessage()
    }
})
function restartTest(){
    clearInterval(timer);
    started = false;
    TimeLeft = 60;
    input.value = ""
    paragraph.innerText = ""
    Time.innerText = TimeLeft
    selectLevel.value = ""
}
function calculateAccuracy(){
    let totalTyped = input.value.length
    if (totalTyped == 0){
        accuracy.innerText = "0";


    }
    console.log (correctLetters)
    console.log (totalTyped)
    let percentage = (correctLetters / totalTyped) * 100;
    accuracy.innerText = percentage.toFixed(2)


}


