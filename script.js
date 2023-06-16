var buttons = document.getElementsByClassName("row");
var display = document.getElementById("display");
var cleararea = document.getElementById("clear-button");
var operand1 = 0;
var operand2 = 0;
var operator = null;
var flag = false;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        if (flag) {
            display.innerText = "";
            flag = false;
        }
        var value = this.getAttribute("data-value");
        if (value == "+") {
            operator = "+";
            operand1 = parseFloat(display.textContent);
            flag = true;
        } else if (value == "+/-") {
            if (display.textContent[0] == "-") {
                display.textContent = display.textContent.slice(1);
            } else {
                display.textContent = "-" + display.textContent;
            }
        } else if (value == "%") {
            operator = "%";
            operand1 = parseFloat(display.textContent);
            flag = true;
        } else if (value == "-") {
            operator = "-";
            operand1 = parseFloat(display.textContent);
            flag = true;
        } else if (value == "*") {
            operator = "*";
            operand1 = parseFloat(display.textContent);
            flag = true;
        } else if (value == "/") {
            operator = "/";
            operand1 = parseFloat(display.textContent);
            flag = true;
        } else if (value == "=") {
            operand2 = parseFloat(display.textContent);
            // use eval
            var val = 0;
            switch (operator) {
                case "+":
                    val = eval(operand1 + operand2);
                    break;
                case "-":
                    val = eval(operand1 - operand2);
                    break;
                case "*":
                    val = eval(operand1 * operand2);
                    break;
                case "%":
                    val = eval(operand1 % operand2);
                    break;
                case "/":
                    if (operand2 == 0) {
                        val = "Error";
                        break;
                    }
                    val = eval(operand1 / operand2);
                    break;
                default:
            }
            // show result on display
            display.innerText = val;
        } else {
            display.innerText += value;
        }
    });
}

document.addEventListener("keyup",event=>{
    const keypressed = String.fromCharCode(event.keyCode);
    if (flag) {
        display.innerText = "";
        flag = false;
    }
    display.innerText += keypressed;
});


cleararea.addEventListener("click", function () {
    display.innerText = "";
});
