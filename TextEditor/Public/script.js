let isBold = false;
let isItalic = false;
let isUnderline = false;
let fontSize = 3;
document.getElementById("fontSizeVar").innerHTML = fontSize
function bold() {
    if (!isBold) {
        isBold = true;
        document.getElementById("bold").style.backgroundColor = "#7b6c6c20";
        document.getElementById("bold").style.borderColor = "#7b6c6c20";
        document.execCommand("bold")
    }
    else {
        document.getElementById("bold").style.backgroundColor = "#cdcbcb";
        document.getElementById("bold").style.borderColor = "#cdcbcb";
        document.execCommand("bold")
    }
}
function italic() {
    if (!isItalic) {
        isItalic = true
        document.getElementById("italic").style.backgroundColor = "#7b6c6c20";
        document.getElementById("italic").style.borderColor = "#7b6c6c20";
        document.execCommand("italic")
    }
    else {
        isItalic = false
        document.getElementById("italic").style.backgroundColor = "#cdcbcb";
        document.getElementById("italic").style.borderColor = "#cdcbcb";
        document.execCommand("italic")
    }
}
function Underline() {
    if (!isUnderline) {
        document.getElementById("Underline").style.backgroundColor = "#7b6c6c20"
        document.getElementById("Underline").style.borderColor = "#7b6c6c20"
        document.execCommand("underline")
    }
    else {
        document.getElementById("Underline").style.backgroundColor = "#cdcbcb"
        document.getElementById("Underline").style.borderColor = "#cdcbcb"
        document.execCommand("underline")
    }
}
function sizeS() {
    fontSize = fontSize - 1
    if (fontSize == 0 || fontSize < 0) {
        fontSize = 1
    }
    document.execCommand("fontSize", false, fontSize)
    document.getElementById("fontSizeVar").innerHTML = fontSize
}
function sizeB() {
    fontSize = fontSize + 1
    if (fontSize > 7) {
        fontSize = 7
    }
    document.execCommand("fontSize", false, fontSize)
    document.getElementById("fontSizeVar").innerHTML = fontSize
}
function TextColor() {
    let TColor = document.getElementById("textColor").value
    document.getElementById("textColorButton").style.color = TColor
    document.execCommand("foreColor", false, TColor)
}
function alignLeft() {
    document.execCommand("justifyLeft");
}
function alignRight() {
    document.execCommand("justifyRight");
}
function alignCenter() {
    document.execCommand("justifyCenter");
}



