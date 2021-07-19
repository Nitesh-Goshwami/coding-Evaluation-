var data_div = document.getElementById("data");
var count_span = document.getElementById("count");
var count = 0;
var total = 0;
function addProducts(el) {
  var div = document.createElement("div");
  let p_name = document.createElement("p");
  p_name.innerHTML = el.name;

  let p_price = document.createElement("p");
  p_price.innerHTML = el.price;
  total += el.price;
  let img = document.createElement("img");
  img.src = el.image;

  let h_2 = document.createElement("p");
  
  div.append(img,p_name, p_price);
  div.style.border = "5px solid rgb(206, 154, 154)"
  h_2.append(count);
  count_span.innerHTML = null;
  count_span.append(h_2)
  data_div.append(div);
}

function cart() {
  let data = JSON.parse(localStorage.getItem("added"));
  data_div.innerHTML = null;
  data.forEach(function (el) {
    count++;
    addProducts(el);
  });
}

cart();
