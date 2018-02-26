
var btn = document.querySelector('.btn');
var tmpl = document.getElementById('tmpl');
var pageCounter = 1;
var color = ['#f274e9', '#42a1a1', '#fef192', '#ff9c62', '#e7ff62', '#63c7d7', '#b89ed9', '#ffb4f2'];
var cacheRandom = null;
var successRequest = true;


window.addEventListener('scroll', showCats);
btn.addEventListener('click', showCats);





function showCats(){
  if (!successRequest) {
    return;
  }
  if (window.scrollY + window.innerHeight >  btn.offsetTop){
    successRequest = false;
    var request = new XMLHttpRequest();
    request.open('GET', 'https://ma-cats-api.herokuapp.com/api/cats?page=' + pageCounter + '&per_page=20', true);
    
    request.onload = function() {
      
      if (request.status >= 200 && request.status < 400) {

        // Success!
        var data = JSON.parse(request.responseText);

        renderHTML(data);
        cartProductsCounter();

        var figure = document.querySelectorAll('figure');
  
      } else {
        // We reached our target server, but it returned an error

      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
    };

    request.send();

    function renderHTML(data){
      
      for(var i = 0; i < data.cats.length; i++){
        var cat = data.cats[i];
        
        var clone = tmpl.content.cloneNode(true);
        var span = clone.querySelectorAll('span');
        var price = clone.querySelector('.item__price');
        var img = clone.querySelector('img');
        var figure = clone.querySelector('figure');

        span[0].innerHTML = cat.name;
        span[1].innerHTML = cat.category;
        span[2].innerHTML = cat.available; 
        price.innerHTML = 'Price ' + cat.price;

        img.src= cat.img_url; 

        figure.style.background = color[randomizer(0, 7)];
        
        tmpl.parentNode.appendChild(clone);
      }
      successRequest = true;
    } 

    function randomizer(a, b) {
      let random = Math.random() * (b - a);
      random = Math.floor(random) + a;
      if (random != cacheRandom) {
          cacheRandom = random;
          return random;
      } else {
          return randomizer(a, b);
      }
    }
    
    pageCounter++;   
  }

}


var cartCounter = 0;




function cartProductsCounter(){
  var products = document.querySelectorAll('.product__item img');  
  

  for(var i = 0; i < products.length; i++){
    products[i].addEventListener('click', increaseCartItems);
  }  
   function increaseCartItems(){
        var item = document.querySelector('.cart__number');
        cartCounter++;
        item.innerHTML = cartCounter;                
    }; 
   
}

    
var plus = document.querySelector('.btn1');
plus.addEventListener('click', increaseCartItems);

   function increaseCartItems(){
        var item = document.querySelector('.cart__number');
        cartCounter++;
        item.innerHTML = cartCounter;                
    }; 



var minus = document.querySelector('.btn2');
minus.addEventListener('click', decreaseCartItems);

   function decreaseCartItems(){
        var item = document.querySelector('.cart__number');
        cartCounter--;
        item.innerHTML = cartCounter;                
    }; 
console.log(cartCounter);
























var cat = document.querySelector('.product__item');
console.log(cat);
cat.addEventListener('click', callback);

function callback(event) {
  let currentCat = event.currentTarget;
  console.log(currentCat);
}