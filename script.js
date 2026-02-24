let display = document.getElementById("display");

function appendValue(value) {
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
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function calcLog() {
    try {
        let value = parseFloat(display.value);

        if (value <= 0 || isNaN(value)) {
            display.value = "Error";
            return;
        }

        display.value = Math.log10(value);
    } catch {
        display.value = "Error";
    }
}
