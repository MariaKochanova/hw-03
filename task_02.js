const jsonString = `{
  "list": [
    {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
    },
    {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
    }
  ]
}`;

try {
  const jsObject = JSON.parse(jsonString);
  console.log(jsObject);
} catch (error) {
  console.error('Ошибка при парсинге JSON:', error);
}
