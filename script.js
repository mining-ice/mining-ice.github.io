//header animation
const divs = document.getElementsByClassName("info")
const texts = ["Loading User: Ethan_Jang", "Sex = \"M\"", "Class = 2027", "Eye_Color = \"Brown\"", "Showered_Yesterday = True"];
let randomTexts = ["Showered_Yesterday = True", "Favorite_Artist = \"NewJeans\"", "numAlarmsNeededToWakeUp = 20", "currGPA = \":(\""];

function textTypingEffect(elements, texts, i=0, j=0) {
    elements[j].textContent += texts[j][i];
    if(i === texts[j].length - 1) {
        if(j === texts.length - 1) {
            return;
        }
        setTimeout(() => textTypingEffect(elements, texts, 0, j+1), 500);
        divs[j].appendChild(texts[j]);
        return;
    }
    setTimeout(() => textTypingEffect(elements, texts, i+1, j), 50);
}

textTypingEffect(divs, texts)

//button
const element = document.getElementById("_World");

// Initially hide the element (if it's not already hidden)
element.style.display = "none";

// Set a timeout to make the element appear after 3 seconds (3000 milliseconds)
setTimeout(() => {
  element.style.display = "block";
}, 9000); 

//circle
const abtButton = document.getElementById("abt");
abtButton.addEventListener("mouseover", () => {
    document.getElementById("circle").innerHTML = "<h2>'A little bit about me!'</h2>";
})
abtButton.addEventListener("mouseout", () => {
    document.getElementById("circle").innerHTML = "";
})

const expButton = document.getElementById("exp");
expButton.addEventListener("mouseover", () => {
    document.getElementById("circle").innerHTML = "<h2>'Proof that I am an industry warrior'</h2>";
})
expButton.addEventListener("mouseout", () => {
    document.getElementById("circle").innerHTML = "";
})

const projButton = document.getElementById("proj");
projButton.addEventListener("mouseover", () => {
    document.getElementById("circle").innerHTML = "<h2>'A quantifiable metric for how I've been spending my time!'</h2>";
})
projButton.addEventListener("mouseout", () => {
    document.getElementById("circle").innerHTML = "";
})