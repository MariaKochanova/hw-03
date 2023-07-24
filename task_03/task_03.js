function makeXHRRequest() {
  const inputElement = document.getElementById('numberInput');
  const value = parseInt(inputElement.value, 10);
  const imageContainer = document.getElementById('imageContainer');

  // Проверка на валидность введенного числа
  if (isNaN(value) || value < 1 || value > 10) {
    imageContainer.innerHTML = 'Число вне диапазона от 1 до 10';
    return;
  }

  const xhr = new XMLHttpRequest();
  const url = `https://picsum.photos/v2/list?limit=${value}`;

  xhr.open('GET', url, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const responseData = JSON.parse(xhr.responseText);
      displayImages(responseData, imageContainer);
    } else {
      imageContainer.innerHTML = 'Ошибка при загрузке данных';
    }
  };

  xhr.onerror = function () {
    imageContainer.innerHTML = 'Ошибка при выполнении запроса';
  };

  xhr.send();
}

function displayImages(data, container) {
  container.innerHTML = ''; // Очистка контейнера перед отображением новых картинок
  data.forEach(function (item) {
    const imageElement = document.createElement('img');
    imageElement.src = item.download_url;
    imageElement.alt = item.author;
    container.appendChild(imageElement);
  });
}
