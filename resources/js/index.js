var i = 0;
var txt = 'Proxy Tunnel Initializing...';
var speed = 0;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("user_input").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function unhide_group_1_3() {
  document.getElementById("unhide_1").innerHTML = "Destination: www.justinkrumlauf.me";
  document.getElementById("unhide_2").innerHTML = "SK41JStQAqVgrT7abK41965DzO0WPAfX1JsXKp4Yfp4";
  document.getElementById("unhide_3").innerHTML = "uH0CWPhackingmainframe.execa4DSK41JStQAqVgRVzfX1Js6JkR";
}

function unhide_group_4_5(){
  document.getElementById("unhide_4").innerHTML = "965DzO0rT7abK41JStQIAqVgRVmainframebreachedXKp4YfRvH";
  document.getElementById("unhide_5").innerHTML = "OQIAqVgRT7abK4cGjca4DAfX1JsXKsmXKp41JStQIAqVgRVmai";
}

function unhide_group_6_8(){
  document.getElementById("unhide_6").innerHTML = "************ACCESS GRANTED************";
  document.getElementById("unhide_7").innerHTML = "WELCOME TO www.justinkrumlauf.me";
  document.getElementById("unhide_8").innerHTML = "C:\\Users\\user\\website\\justinkrumlauf.me>";
}

function maintainence(){
  document.getElementById("unhide_9").innerHTML = "ERROR: www.justinkrumlauf.me is currently down for maintainence";
  document.getElementById("unhide_10").innerHTML = "***Apologies for the Inconvience***";
  document.getElementById("unhide_11").innerHTML = "C:\\Users\\user\\website\\justinkrumlauf.me\\maintainence_error> _";
}
