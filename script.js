const TEMPERATURE_TYPES = Object.freeze({
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit',
    KELVIN: 'kelvin'
})

const buttonConvert = document.getElementById('convert');

buttonConvert.addEventListener('click', () => {

    const tempFromValue = document.getElementById("temp-from").value;
    const tempToValue = document.getElementById("temp-to").value;
    const tempToConvertString = document
      .getElementById("temp-input")
      .value.replace(",", ".");
    const tempToConvert = Number(tempToConvertString);

    let tempConverted = 0;
    
    if (tempFromValue === TEMPERATURE_TYPES.CELSIUS && tempToValue === TEMPERATURE_TYPES.FAHRENHEIT) {
        tempConverted = (tempToConvert * 9 / 5) + 32;
    }

    if (tempFromValue === TEMPERATURE_TYPES.FAHRENHEIT && tempToValue === TEMPERATURE_TYPES.CELSIUS) {
        tempConverted = (tempToConvert - 32) * 5 / 9;
    }

    if (tempFromValue === TEMPERATURE_TYPES.CELSIUS && tempToValue === TEMPERATURE_TYPES.KELVIN) {
        tempConverted = tempToConvert + 273;
    }

    if (tempFromValue === TEMPERATURE_TYPES.KELVIN && tempToValue === TEMPERATURE_TYPES.CELSIUS) {
        tempConverted = tempToConvert - 273;
    }

    if (tempFromValue === TEMPERATURE_TYPES.FAHRENHEIT && tempToValue === TEMPERATURE_TYPES.KELVIN) {
        tempConverted = (tempToConvert - 32) * 5 / 9 + 273
    }

    if (tempFromValue === TEMPERATURE_TYPES.KELVIN && tempToValue === TEMPERATURE_TYPES.FAHRENHEIT) {
        tempConverted = (tempToConvert - 273) * 9 / 5 + 32;
    }

    if (tempFromValue === tempToValue) {
        tempConverted = tempToConvert;
    }

    document.getElementById('result-text').textContent = tempConverted + " " + tempToValue[0].toUpperCase();

});