const pageNumberInput = document.getElementById('pageNumberInput');
const limitInput = document.getElementById('limitInput');
const requestButton = document.getElementById('requestButton');
const imageList = document.getElementById('imageList');

function makeRequest(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('lastRequestData', JSON.stringify(data)); // Save data to localStorage
            displayImages(data);
        })
        .catch(error => console.error('Error fetching images:', error));
}

function displayImages(images) {
    imageList.innerHTML = '';
    images.forEach(image => {
        const imgItem = document.createElement('img');
        imgItem.classList.add('img-item');
        imgItem.src = image.download_url;
        imageList.appendChild(imgItem);
    });
}

requestButton.addEventListener('click', () => {
    const pageNumber = parseInt(pageNumberInput.value);
    const limit = parseInt(limitInput.value);

    if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
        alert('Номер страницы вне диапазона от 1 до 10');
    } else if (isNaN(limit) || limit < 1 || limit > 10) {
        alert('Лимит вне диапазона от 1 до 10');
    } else {
        makeRequest(pageNumber, limit);
    }
});

const lastRequestData = localStorage.getItem('lastRequestData');
if (lastRequestData) {
    displayImages(JSON.parse(lastRequestData));
}
