import * as VARS from "./variables.js";

export function hideButton(){
    VARS.firstButton.style.display = 'none';
    VARS.secondButton.style.display = 'none';
    VARS.thirdButton.style.display = 'none';
    VARS.fourthButton.style.display = 'none';
}
export function updatePar(newText = "Error: No text received!", textArea = VARS.textField){
    textArea.innerText += "  " + newText;
    console.log(newText);
}
export function clearPar(textArea = VARS.textField){
    console.log(`Cleared "${textArea.innerText}" from the text area.`)
    textArea.innerText = "";
}
export function promptReturn(string1, string2 = "here"){
    let number = prompt(string1, string2);
    return number;
}
export function checkForInt(number){
    if (Number.parseInt(number) === 0){
        return true;
    }
    else if (number === null || number === "" || !(Number.parseInt(number) % number === 0)) {
        return false;
    }
    else {
        return true;
    }
}