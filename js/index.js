var test = document.getElementById("test");
console.log("test: ", test);

test.innerHTML = "chưa";
test.innerText = "rồi";

var name = document.getElementById("name").value;
console.log("name: ", name);

var answer = document.getElementById("answer");
answer.innerHTML = "bài gì mà hoc";
// .classList.add: add class vào thẻ được dom tới
// .classList.remove: xoá class ở thẻ được dom tới
// answer.classList.add('d-block');
answer.classList.remove("d-none");

// .style.thuoctinh: thay đổi style của thẻ
// font-size => fontSize
answer.style.color = "red";
answer.style.fontSize = "40px";

// answer.style.cssText = "display: block; position: absolute; color: red; font-size: 40px";

var den = document.getElementById("den");
function batDen() {
  den.src = "./images/pic_bulbon.gif";
}

function tatDen() {
  den.src = "./images/pic_bulboff.gif";
}

// innerText: chỉ in nội dung text ra màn hình.
// innerHTML: in nội dung và thẻ html

//------------------------------------
// addEventListener: lắng nghe sự kiện cần thực hiện. bên trong cặp ngoặc tròn chứa sự kiện và hàm xử lý sự kiện
document.getElementById("login").addEventListener("click", function () {
  console.log("ok");
  var taiKhoan = document.getElementById("taiKhoan").value;
  var matKhau = document.getElementById("matKhau").value;
  var result = document.getElementById("result");
  // result.innerHTML = "Tài khoản : " + taiKhoan + " .Mật khẩu : " + matKhau;
  result.innerHTML = `
    <p>Tài khoản: ${taiKhoan}</p>
    <p>Mật khẩu: ${matKhau}</p>
  `;
});

var number = document.querySelector(".number");
console.log("number: ", number);
var number2 = document.getElementsByClassName("number").innerText;
console.log("number2: ", number2);

var number3 = document.getElementsByClassName("number")[0].innerText;
console.log("number3: ", number3);

var tagName = document.getElementsByTagName("div");
console.log("tagName: ", tagName);

function disable(e) {
  e.preventDefault();
  console.log("run submit");
}
