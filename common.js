
var product = document.querySelector('.product');
var btn = document.querySelector('.btn');
var tmpl = document.getElementById('tmpl');
var count = 1;
var color = ['#f274e9', '#42a1a1', '#fef192', '#ff9c62', '#e7ff62', '#63c7d7', '#b89ed9', '#ffb4f2'];



window.addEventListener('scroll', function(){
        if (window.scrollY + window.innerHeight >  btn.offsetTop){
            
          var request = new XMLHttpRequest();
          request.open('GET', 'https://ma-cats-api.herokuapp.com/api/cats?page=' + count + '&per_page=20', true);
            
          request.onload = function() {

            if (request.status >= 200 && request.status < 400) {

              // Success!
              var data = JSON.parse(request.responseText);

              renderHTML(data);

              var figure = document.querySelectorAll('figure');
              

              for( i = 0; i < figure.length; i++){
                  figure[i].style.background = color[getRandomInt(0, 7)]
              }

              function getRandomInt(min, max) {
                  return Math.floor(Math.random() * (max - min + 1)) + min;
              }

              count++;  

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

              span[0].innerHTML = cat.name;
              span[1].innerHTML = cat.category;
              span[2].innerHTML = cat.available; 
              price.innerHTML = 'Price ' + cat.price;
              img.src= innerHTML = cat.img_url; 
              tmpl.parentNode.appendChild(clone);
            }
          } 

      }

     
     
});

