const levelSelect = document.getElementById("level");
let paras = {
    beginner: "Typing is a useful skill. Practice every day to get faster and more accurate.",
    intermediate: "Learning to type quickly takes patience and consistency. The more you practice, the better your speed and accuracy will become over time.",
    advanced: "Mastering typing speed requires discipline, focus, and repetition. As you improve, your brain begins to process words faster than your fingers can respond, creating a smooth and efficient workflow.",
}

let selectLevel = document.getElementById("level")
let paragraph = document.getElementById("paragraph")
selectLevel.addEventListener("change", (event)=>{
    let selectedLevel = event.target.value;
    let paragraphText = paras[selectedLevel]
    paragraphText.split("").forEach(Char => {
        let span = document.createElement("span")
        span.innerText = Char
        paragraph.appendChild(span)
        
    });
})

