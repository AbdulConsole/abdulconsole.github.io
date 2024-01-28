let password = document.querySelector('#password');
let toggle = document.querySelector('#toggle');
let reqList = document.querySelectorAll(".reqList li");
const requirments = [
  {regrex: /.{8,}/, index: 0},
  {regrex: /[0-9]/, index: 1},
  {regrex: /[a-z]/, index: 2},
  {regrex: /[^A-Za-z0-9]/, index: 3},
  {regrex: /[A-Z]/, index: 4},
];
let checker = [0,0,0,0,0];

password.addEventListener("keyup", (e) => {
  requirments.forEach(item => {
    const isValid =  item.regrex.test(e.target.value);
    const reqItem = reqList[item.index];
    if (isValid) {
      reqItem.firstElementChild.className = "fa-solid fa-check";
    } else {
      reqItem.firstElementChild.className = "fa-solid fa-circle";
    }
    
  })
});

function showHide() {
    if (password.type == "password") {
        password.setAttribute('type', 'text');
        toggle.classList.add("hide");
    } else {
        password.setAttribute('type', 'password');
        toggle.classList.remove("hide");
    }
}
 