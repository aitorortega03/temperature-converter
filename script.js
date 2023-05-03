const TEMPERATURE_TYPES = Object.freeze({
    CELSIUS: 'celsius',
    FAHRENHEIT: 'fahrenheit',
    KELVIN: 'kelvin'
})

const buttonConvert = document.getElementById('convert');
const tempFromValue = document.getElementById('temp-from');
const tempToValue = document.getElementById('temp-to');
const tempToConvertString = document.getElementById('temp-input').value.replace(',', '.');
const tempToConvert = Number(tempToConvertString);

buttonConvert.addEventListener('click', () =>{
    
    

});