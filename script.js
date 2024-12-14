function convertToCelsius() {
    const temperatureInput = document.getElementById('temperature').value;
    const temperature = parseFloat(temperatureInput);

    if (isNaN(temperature)) { 
        document.getElementById('result').innerText = "Por favor, insira um número válido.";
        return; 
    }

    const celsius = (temperature - 32) * 5/9; 
    document.getElementById('result').innerText = `${temperature} °F é igual a ${celsius.toFixed(2)} °C`; 
}

function convertToFahrenheit() {
    const temperatureInput = document.getElementById('temperature').value; 
    const temperature = parseFloat(temperatureInput); 

    if (isNaN(temperature)) { 
        document.getElementById('result').innerText = "Por favor, insira um número válido."; 
        return;
    }

    const fahrenheit = (temperature * 9/5) + 32; 
    document.getElementById('result').innerText = `${temperature} °C é igual a ${fahrenheit.toFixed(2)} °F`; 
}