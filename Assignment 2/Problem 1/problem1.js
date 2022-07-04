let screen = document.getElementById("screen");
const button = document.querySelectorAll("button");
let screenvalue = "";

for (const elements of button) {

    elements.addEventListener("click", (e) => {
        var showbtntext = e.target.innerText;
        if (showbtntext == "x") {
            showbtntext = "*"
            screenvalue += showbtntext
            screen.value = showbtntext

        }

        else if (showbtntext == "C") {
            screenvalue = "";
            screen.value = screenvalue

        }
        else if (showbtntext == "=") {
            screen.value = eval(screenvalue)
        }
        else {
            screenvalue += showbtntext
            screen.value = screenvalue
        }
    })
}
