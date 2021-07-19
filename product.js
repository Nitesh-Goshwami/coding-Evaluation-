var data_div = document.getElementById("data");

function createNewProduct() {
  let form = document.getElementById("Eform");
  let name = form.name.value;
  let price = form.price.value;
  let image = form.img.value;

  let product = {
    name,
    price,
    image,
  };

  let arr;
  arr = localStorage.getItem("cart");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("cart"));
  }
  arr.push(product);
  localStorage.setItem("cart", JSON.stringify(arr));
  showCart();
}

function addProducts(el) {
  var div = document.createElement("div");

  let p_name = document.createElement("p");

  p_name.innerHTML = el.name;

  let p_price = document.createElement("p");

  p_price.innerHTML = el.price;

  let img = document.createElement("img");

  img.src = el.image;

  let btn = document.createElement("button");
  btn.textContent = "Add to Cart";

  btn.addEventListener("click", function () {
    addtoCart(el);
  });
  img.addEventListener("click", function (event) {
    event.target.scr = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF5GocfAQpQ7c1R026ECBLysWA7-3ajLk5Den2XSpIiF_bo8lhoTVgUjwcKFk2mecGkz0&usqp=CAU"
  });

  btn.style.display = "block";
  btn.style.marginLeft = "70px";
  btn.style.backgroundColor = "black";
  btn.style.color = "white";

  div.append(img, p_name, p_price, btn);

  data_div.append(div);
}

function showCart() {
  let data = JSON.parse(localStorage.getItem("cart"));
  data_div.innerHTML = null;
  data.forEach(function (el) {
    addProducts(el);
  });
}

showCart();

function addtoCart(obj) {
  let arr;
  arr = localStorage.getItem("added");
  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("added"));
  }

  arr.push(obj);
  localStorage.setItem("added", JSON.stringify(arr));
}

function cart() {
  window.location.href = "cart.html";
}
