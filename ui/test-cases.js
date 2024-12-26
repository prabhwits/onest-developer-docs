function renderDropdownCases(filteredData){
    console.log(filteredData)
    filteredData?.forEach(function (item) {
      var option = document.createElement("option");
      const fileName = item?.split('.md')[0];
      option.text = fileName;
    });
    renderCases(filteredData[0]?.split('.md')[0]);
}

function renderCases(file) {
fetch(
  `../api/components/docs/${file}.md`
)
.then((response) => response.text())
.then((text) => {
  const html = marked.parse(text);
  document.getElementById("testcases-container").innerHTML = html;
});
}