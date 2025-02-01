document.addEventListener('DOMContentLoaded', function () {
    function updateTemperatureBar(temp) {
        // Get the elements
        let bar = document.querySelector(".temp-bar");
        let tempDisplay = document.querySelector("#temperature-value");

        // Calculate percentage for the bar width
        let percent = Math.min(100, (temp / 50) * 100); // Assuming 50°C is max

        // Update the temperature bar width
        bar.style.width = percent + "%";

        // Update the text content of the temperature display
        tempDisplay.textContent = `${temp}° C`; // This updates the text of the temperature
    }

    // Example: Update the temperature to 43°C
    updateTemperatureBar(43); 
});


// document.addEventListener("DOMContentLoaded", function () {
//     const gaugeElement = document.querySelector(".gauge");

//     if (gaugeElement) { // Ensure the gauge exists
//         function setGaugeValue(gauge, value) {
//             if (value < 0 || value > 1) return;

//             gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
//             gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}%`;
//         }

//         setGaugeValue(gaugeElement, 0.1); 
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    function updateHumidityBar(humidity) {
        // Get the elements
        let bar = document.querySelector(".humidity-bar");
        let humidityDisplay = document.querySelector("#humidity-value");

        // Calculate percentage for the bar width
        let percent = Math.min(100, humidity); // Assuming 100% is max

        // Update the humidity bar width
        bar.style.width = percent + "%";

        // Update the text content of the humidity display
        humidityDisplay.textContent = `${humidity}%`; // This updates the text
    }

    // Example: Update the humidity to 50%
    updateHumidityBar(82);
});



function updateLightIntensity(value) {
    const lightBar = document.getElementById('light-bar');
    
    // Update the width of the light bar based on the intensity (percentage)
    lightBar.style.width = `${value}%`;
    
    // Update the light intensity value displayed below the bar
    document.getElementById('light-value').innerText = value + '%';
}

// Example: Setting light intensity to 75%
let lightIntensity = 50; // Change this to any percentage value
updateLightIntensity(lightIntensity);


document.addEventListener("DOMContentLoaded", function () {
    const densityGauge = document.querySelector(".density-gauge");

    if (densityGauge) { // Ensure the gauge exists
        function setDensityValue(gauge, value) {
            if (value < 0 || value > 1) return;

            gauge.querySelector(".density-gauge__fill").style.transform = `rotate(${value / 2}turn)`;
            gauge.querySelector(".density-gauge__cover").textContent = `${Math.round(value * 100)}%`;
        }

        setDensityValue(densityGauge, 1); 
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const mistToggle = document.getElementById("mist-toggle");
    const fanToggle = document.getElementById("fan-toggle");

    function updateStatus(toggle, label) {
        toggle.addEventListener("change", function () {
            if (this.checked) {
                console.log(`${label} is ON`);
            } else {
                console.log(`${label} is OFF`);
            }
        });
    }

    if (mistToggle) updateStatus(mistToggle, "Mist");
    if (fanToggle) updateStatus(fanToggle, "Fan");
});
