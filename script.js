//header animation
const divs = document.getElementsByClassName("info")
const texts = ["Loading User: Ethan_Jang", "Sex = \"M\""];
//Sex = "M"
function textTypingEffect(elements, texts, i=0, j=0) {
    elements[j].textContent += texts[j][i];
    if(i === texts.length - 1) {
        if(j === divs.length - 1) {
            return;
        }
        setTimeout(() => textTypingEffect(elements, texts, 0, j+1), 500);
    }
    setTimeout(() => textTypingEffect(elements, texts, i+1, j), 500);
}

textTypingEffect(divs, texts)