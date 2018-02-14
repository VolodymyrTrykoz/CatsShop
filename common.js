
var product = document.querySelector('.product');
var btn = document.querySelector('.btn');
var tmpl = document.getElementById('tmpl');

btn.addEventListener('click', function(){
      var request = new XMLHttpRequest();
      request.open('GET', 'https://ma-cats-api.herokuapp.com/api/cats', true);

      request.onload = function() {

        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
           console.log(data.cats.length);
          renderHTML(data);
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
          var cat = data.cats[i];//50 objects
          
          var clone = tmpl.content.cloneNode(true);
          var span = clone.querySelectorAll('span');
          var price = clone.querySelector('.item__price');
          var img = clone.querySelector('img');

          span[0].innerHTML = cat.name;
          span[1].innerHTML = cat.category;
          span[2].innerHTML = cat.available; 
          price.innerHTML = cat.price;
          img.src=innerHTML = cat.img_url; 
          tmpl.parentNode.appendChild(clone);
        }
      }
});







