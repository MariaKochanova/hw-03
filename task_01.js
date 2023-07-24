const xml = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parseXMLToJS = (xml) => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");

  const students = xmlDoc.getElementsByTagName("student");
  const result = { list: [] };

  for (const student of students) {
    const nameElem = student.getElementsByTagName("name")[0];
    const lang = nameElem.getAttribute("lang");
    const firstName = nameElem.getElementsByTagName("first")[0].textContent;
    const lastName = nameElem.getElementsByTagName("second")[0].textContent;

    const age = parseInt(student.getElementsByTagName("age")[0].textContent, 10);
    const prof = student.getElementsByTagName("prof")[0].textContent;

    result.list.push({
      name: `${firstName} ${lastName}`,
      age,
      prof,
      lang,
    });
  }

  return result;
};

const jsObject = parseXMLToJS(xml);
console.log(jsObject);
