const box = document.getElementById("box");


box.addEventListener("mouseover", function () {
  box.innerHTML = "Mouse is over me!";
});


box.addEventListener("mouseout", function () {
  box.innerHTML = "마우스 is 아웃!";
});


box.addEventListener("click", function () {
  box.innerHTML = "클릭되었습니다!";
});


box.addEventListener("dblclick", function () {
  box.innerHTML = "더블클릭되었습니다!";
});