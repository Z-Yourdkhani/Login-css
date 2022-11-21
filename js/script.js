const input1 = document.querySelector(".hideShowInput1");
const hideShow1 = document.querySelector(".hideShowSpan1");
const input2 = document.querySelector(".hideShowInput2");
const hideShow2 = document.querySelector(".hideShowSpan2");

// ------- singIn hide Show ----------
hideShow1.addEventListener("click", function () {
  if (input1.type == "password") {
    input1.type = "text";
    hideShow1.style.textDecoration = "line-through";
  } else if (input1.type == "text") {
    input1.type = "password";
    hideShow1.style.textDecoration = "none";
  }
});

// ------- singUp hide Show ----------
hideShow2.addEventListener("click", function () {
  if (input2.type == "password") {
    input2.type = "text";
    hideShow2.style.textDecoration = "line-through";
  } else if (input2.type == "text") {
    input2.type = "password";
    hideShow2.style.textDecoration = "none";
  }
});
