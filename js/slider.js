const minRange = document.getElementById("min-range");
const maxRange = document.getElementById("max-range");
const minValue = document.getElementById("min-value");
const maxValue = document.getElementById("max-value");
const sliderRange = document.querySelector(".slider-range");

function updateSlider() {
    const minVal = parseInt(minRange.value);
    const maxVal = parseInt(maxRange.value);

    if (maxVal - minVal < 5) {
        if (event.target.id === "min-range") {
            minRange.value = maxVal - 5;
        } else {
            maxRange.value = minVal + 5;
        }
    }

    minValue.textContent = minRange.value;
    maxValue.textContent = maxRange.value;

    const thumbWidth = 40; 
    const trackWidth = 556; 
    const offset = (thumbWidth / trackWidth) * 100 / 2;

    const percent1 = (minRange.value / minRange.max) * 100;
    const percent2 = (maxRange.value / maxRange.max) * 100;

    sliderRange.style.left = `calc(${percent1}%`;
    sliderRange.style.right = `calc(${100 - percent2}%`;
}

minRange.addEventListener("input", updateSlider);
maxRange.addEventListener("input", updateSlider);

updateSlider();