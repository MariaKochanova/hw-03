const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', () => {
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;

    if (!isValidNumber(width) || !isValidNumber(height)) {
        displayResult("One or both inputs are not valid numbers.");
    } else {
        const widthNum = parseInt(width);
        const heightNum = parseInt(height);

        if (isInRange(widthNum) && isInRange(heightNum)) {
            const imageUrl = `https://picsum.photos/${widthNum}/${heightNum}`;
            displayImage(imageUrl);
        } else {
            displayResult("One or both numbers are not in the range from 100 to 300.");
        }
    }
});

function isValidNumber(value) {
    return !isNaN(value) && value.trim() !== '';
}

function isInRange(num) {
    return num >= 100 && num <= 300;
}

function displayResult(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${message}</p>`;
    clearImage();
}

function displayImage(imageUrl) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<img src="${imageUrl}" alt="Image">`;
}

function clearImage() {
    const resultDiv = document.getElementById('result');
    const imgElement = resultDiv.querySelector('img');
    if (imgElement) {
        imgElement.remove();
    }
}
