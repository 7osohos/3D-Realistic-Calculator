let calc_screen = document.querySelector(".screenContainer .screen");
document.addEventListener("click", function (e) {
  if (e.target.id == "power") {
    if(    document.querySelector(".screenContainer").classList.contains("on")){
      document.querySelector(".screenContainer").classList.remove("on");
      
    }else{
      document.querySelector(".screenContainer").classList.add("on");
      calc_screen.innerHTML = 0;
  
    }
  }
});

document.querySelectorAll(".buttons span").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id == "del") {
      calc_screen.innerHTML = calc_screen.innerHTML.slice(0, -1);
    } else if (btn.id == "clear") {
      calc_screen.innerHTML = 0;
    }

    if (calc_screen.innerHTML.length <= 11) {
      if (calc_screen.innerHTML == 0) {
        calc_screen.innerHTML = "";
      }

      if (btn.id == "minus") {
        calc_screen.innerHTML += "-";
      } else if (btn.id == "plus") {
        calc_screen.innerHTML += "+";
      } else if (btn.id == "multiply") {
        calc_screen.innerHTML += "*";
      } else if (btn.id == "divide") {
        calc_screen.innerHTML += "/";
      } else if (btn.id == "clear") {
        calc_screen.innerHTML = "0";
      } else if (btn.id == "equal") {
        if (eval(calc_screen.innerHTML) !== undefined){

            calc_screen.innerHTML = eval(calc_screen.innerHTML);
        }
      } else if (btn.id == "del" || btn.id == "power") {
        return;
      } else {
        calc_screen.innerHTML += btn.innerHTML;
      }
    }
  });
});
