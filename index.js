taskInput = document.getElementsByClassName("inputTask")[0];
btnadd = document.getElementsByClassName("btnadd")[0];
ulList = document.getElementById("ulList");

btnadd.addEventListener("click", () => {
  if (taskInput.value != "") {
    addTask();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code == "NumpadEnter" || e.code == "Enter") {
    if (taskInput.value != "") {
      addTask();
    }
  }
});

function addTask() {
  liElement = document.createElement("li");

  inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.setAttribute("onchange", "doneTask(this)");

  spanElemet = document.createElement("span");
  spanElemet.setAttribute("class", "trash");
  spanElemet.setAttribute(
    "onclick",
    "this.parentElement.remove(),taskInput.focus()"
  );
  spanElemet.innerText = "🗑";

  liElement.append(inputElement);
  liElement.append(taskInput.value);
  liElement.append(spanElemet);
  ulList.append(liElement);

  taskInput.value = "";
  taskInput.focus();
}
function doneTask(element) {
  if (element.checked) {
    liElement = element.parentElement;
    liElement.setAttribute("class", "liDone");
    liText = liElement.childNodes[1].data;
    liElement.childNodes[1].data = "";
    sElement = document.createElement("s");
    sElement.innerText = liText;
    liElement.childNodes[0].parentNode.insertBefore(
      sElement,
      liElement.childNodes[0].nextSibling
    );
  } else {
    liElement.removeAttribute("class", "liDone");
    sText = sElement.innerText;
    sElement.remove();
    liElement.childNodes[1].data = sText;
  }
}
