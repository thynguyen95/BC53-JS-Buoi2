function tinhTienTip(event) {
  event.preventDefault();
  var money = +document.getElementById("money").value;
  console.log("money: ", money);
  var percent = +document.getElementById("percent").value;
  console.log("percent: ", percent);
  var person = +document.getElementById("person").value;
  console.log("person: ", person);

  var resultEx = (money * percent) / person;
  console.log("resultEx: ", resultEx);

  var resultExHTML = document.getElementById("resultEx");
  resultExHTML.innerHTML = `
    <p>TIP AMOUT</p>
    <p><sup>$</sup>${resultEx}</p>
    <p>mỗi người</p>
  `;
}
