function convertTemperature(event) {
    
    if (event) {
        event.preventDefault();
    }

    const degreesInput = document.getElementById('degrees').value;
    const unit = document.getElementById('unit').value;
    const resultBox = document.getElementById('result-box');
    const outputList = document.getElementById('output-list');
    const errorBox = document.getElementById('error-box');

    resultBox.classList.add('hidden');
    errorBox.classList.add('hidden');
    outputList.innerHTML = '';

    const inputVal = parseFloat(degreesInput);

    if (isNaN(inputVal)) {
        errorBox.textContent = 'Please enter a valid numeric value.';
        errorBox.classList.remove('hidden');
        return;
    }

    let c, f, k;

    if (unit === 'celsius') {
        c = inputVal;
        f = (c * 9/5) + 32;
        k = c + 273.15;
    } else if (unit === 'fahrenheit') {
        f = inputVal;
        c = (f - 32) * 5/9;
        k = c + 273.15;
    } else if (unit === 'kelvin') {
        k = inputVal;
        c = k - 273.15;
        f = (c * 9/5) + 32;
    }

    if (c < -273.15) {
        errorBox.textContent = 'Invalid input: Temperature cannot be below Absolute Zero (-273.15°C / 0 K).';
        errorBox.classList.remove('hidden');
        return;
    }

    if (unit !== 'celsius') {
        outputList.innerHTML += `<p>${c.toFixed(2)} °C</p>`;
    }
    if (unit !== 'fahrenheit') {
        outputList.innerHTML += `<p>${f.toFixed(2)} °F</p>`;
    }
    if (unit !== 'kelvin') {
        outputList.innerHTML += `<p>${k.toFixed(2)} K</p>`;
    }

    resultBox.classList.remove('hidden');
}