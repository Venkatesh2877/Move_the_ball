import "./styles.css";
//to identify the window height
const wid = window.innerWidth - 55;
const hgt = window.innerHeight - 57;

//eventlistener on keypress
document.addEventListener("keypress", function (event) {
  // Code to handle the keypress event
  var ball = document.getElementById("ball");
  var pos = ball.getBoundingClientRect();

  //On press "a"
  if (event.key == "a") {
    if (pos.left >= 10) {
      var l = pos.left;
      ball.style.left = l - 10 + "px";
      console.log("sucessfull");
      return;
    }
    alert("Cannot move further left");
  }

  //on press "w"
  else if (event.key == "w") {
    if (pos.top >= 10) {
      var t = pos.top;
      ball.style.top = t - 10 + "px";
      console.log("sucessfull");
      return;
    }
    alert("Cannot move further top");
  }

  //on press "d"
  else if (event.key == "d") {
    if (pos.left <= wid) {
      var l = pos.left;
      ball.style.left = l + 10 + "px";
      console.log("sucessfull");
      return;
    }
    alert("Cannot move further right");
  }

  //on press "s"
  else if (event.key == "s") {
    if (pos.top <= hgt) {
      var t = pos.top;
      ball.style.top = t + 10 + "px";
      console.log("sucessfull");
      return;
    }
    alert("Cannot move further botton");
  }
});
