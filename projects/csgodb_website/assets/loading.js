function loading(){
  document.getElementById("loading").style.visibility = "visible";

  var originalText = $("#loading").text(),
      i  = 0;
  setInterval(function() {
      $("#loading").append(".");
      i++;
      if(i == 4){
          $("#loading").html(originalText);
          i = 0;
      }
    }, 500);
}
