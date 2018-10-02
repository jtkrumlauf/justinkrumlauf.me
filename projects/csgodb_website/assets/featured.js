var price_url = "";

function featured(){
  $.get("http://api.csgo.steamlytics.xyz/v1/items?key=362cfd59e37c1c6768c2e28c7b7f7f82", function(data){
      wds = data

      item_index = Math.floor(Math.random() * wds.items.length + 1) //The random index used in the featured item
      featured_image = wds.items[item_index].icon_url

      console.log(wds.items[item_index].quality_color)
      document.getElementById("item_name").innerHTML = wds.items[item_index].market_hash_name
      document.getElementById("featured_image").src = "https:" + featured_image
      str = document.getElementById("item_name").innerHTML
      result = str.fontcolor(wds.items[item_index].quality_color)
      document.getElementById("item_name").innerHTML = result

      price_url = "http://api.csgo.steamlytics.xyz/v1/prices/" + wds.items[item_index].market_hash_name + "?key=362cfd59e37c1c6768c2e28c7b7f7f82"
      price_url = price_url.replace(/\s+/g, "%20");
      price_url = price_url.replace(/\|/g, "%7C")
      featured_price(item_index)
    })
}
function featured_price(item_index){
  $.get(price_url, function(data){
    wds = data

    document.getElementById("featured_item_price").innerHTML = "Average Price: $" + wds.average_price
    console.log("The Average Price: "+ item_index)
  })
}

function popular(){
  $.get("http://api.csgo.steamlytics.xyz/v1/items/popular?key=362cfd59e37c1c6768c2e28c7b7f7f82", function(data){
    wds = data;

    document.getElementById("button").style.visibility = "hidden"

    document.getElementById("p_item1").innerHTML = wds.items[0].market_hash_name + ": " + wds.items[0].volume + " units"
    document.getElementById("p_item2").innerHTML = wds.items[1].market_hash_name + ": " + wds.items[1].volume + " units"
    document.getElementById("p_item3").innerHTML = wds.items[2].market_hash_name + ": " + wds.items[2].volume + " units"
    document.getElementById("p_item4").innerHTML = wds.items[3].market_hash_name + ": " + wds.items[3].volume + " units"
    document.getElementById("p_item5").innerHTML = wds.items[4].market_hash_name + ": " + wds.items[4].volume + " units"
    document.getElementById("p_item6").innerHTML = wds.items[5].market_hash_name + ": " + wds.items[5].volume + " units"
    document.getElementById("p_item7").innerHTML = wds.items[6].market_hash_name + ": " + wds.items[6].volume + " units"
    document.getElementById("p_item8").innerHTML = wds.items[7].market_hash_name + ": " + wds.items[7].volume + " units"
    document.getElementById("p_item9").innerHTML = wds.items[8].market_hash_name + ": " + wds.items[8].volume + " units"
    document.getElementById("p_item10").innerHTML = wds.items[9].market_hash_name + ": " + wds.items[9].volume + " units"
  });
}
