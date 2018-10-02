/* THIS FUNCTION MUST:
- take the input from the search form
- change to different html page
- display any items with related keyword
*/
var keyword = ""
var unfound = 0
function search(){
  $.get("http://api.csgo.steamlytics.xyz/v1/items?key=362cfd59e37c1c6768c2e28c7b7f7f82", function(data){
    wds = data
    keyword = document.getElementById("form").value
    var foundArr = []
    var idx = 0;
    for(i = 0; i <= wds.num_items - 1; i++){
      var temp = wds.items[i].market_name
      var check = temp.includes(keyword)
      if (check == true) {
        obj = {itm_name: wds.items[i].market_name, itm_qual: wds.items[i].quality_color, itm_url: wds.items[i].icon_url}
        foundArr.push(obj)
        idx++
      }
      else {
        unfound++
      }
    }
    //hide the timer and unhide the contents in the container
    //show how many results were found from the counter
    var counter = 0
    for(i = 0; i <= foundArr.length - 1; i++){
      var createDiv = document.createElement("div");

      var item = foundArr[i]

      var node = document.createTextNode(item)
      createDiv.appendChild(node)

      var element = document.getElementById("foundDivs")
      var newEle = element.appendChild(createDiv)
      newEle.setAttribute("id", i)

      document.getElementById(i).innerHTML = foundArr[i].itm_name
      counter++
    }

    document.getElementById("count").innerHTML = counter;

    if (foundArr.length > 0) {
      document.getElementById("loading").style.display = "none";
      document.getElementById("grid_container").style.visibility = "visible";
    }
    console.log(foundArr)
  });
}

function changeTab(url){
  var win = window.open(url,"_blank");
  win.focus();
}

function constructor(object){
  this.object = object
}
