let display = document.getElementById("display");

function appendValue(value) {
    const operators = ["+", "-", "*", "/"];
    const lastChar = display.value.slice(-1);

    // Prevent multiple operators in a row
    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        if (display.value === "") return;

        // Prevent expression ending with operator
        const lastChar = display.value.slice(-1);
        if (["+", "-", "*", "/"].includes(lastChar)) {
            display.value = "Error";
            return;
        }

        display.value = Function('"use strict"; return (' + display.value + ')')();
    } catch (error) {
        display.value = "Error";
    }
}
