document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const text = document.getElementById("new-task-description");
  const submit = document.querySelector("input[type=submit]");
  const ul = document.getElementById("tasks");
  let totalList = [];

  //eventlistener
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newLi = document.createElement("li"); 
    const button = document.createElement("button"); 
    button.innerHTML = "X"; 
    button.addEventListener("click", () => {
     
      newLi.remove();
    });
    newLi.innerHTML = text.value; 
    newLi.appendChild(button); 
    ul.appendChild(newLi); 
    totalList.push(newLi); 
    console.log(totalList); 
    text.value = ""; 
  });
});


