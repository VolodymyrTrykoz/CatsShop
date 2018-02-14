/*
var dataArr = document.querySelectorAll('[data-modal]');
var modal = document.querySelector('.modal-container');
var modalSignIn = document.querySelector('[data-modal-body="sign_in"]');
var modalSignUp = document.querySelector('[data-modal-body="sign_up"]');
var close = document.querySelector('.menu-m__close');
var wrapper = document.querySelector('.body__wrapper');

for(i = 0; i < dataArr.length; i++){

  dataArr[i].addEventListener('click', function(e){
      e.preventDefault();
      var link  = this;
      var linkAttr = link.getAttribute('data-modal');
      if (linkAttr == 'sign_in'){
        modal.classList.remove('close');
        modalSignIn.style.display = 'block';
        
        wrapper.classList.add('blur');
      }

      else {
        modal.classList.remove('close');
        modalSignUp.style.display = 'block';
        wrapper.classList.add('blur');
      }
      
  });
}


close.addEventListener('click', function(e){
  e.preventDefault();
  modal.classList.add('close');
  modalSignIn.style.display = 'none';
  modalSignUp.style.display = 'none';
  wrapper.classList.remove('blur');
})
*/






// window.onscroll = function() {
//   var square = document.querySelector('.square');
//   var squareOffset = square.offsetTop;
//   var squareAttrOffset = square.getAttribute('data-offset');
//   var newOffs = squareOffset + parseInt(squareAttrOffset);
  
//   if (window.scrollY > newOffs) {
//     square.classList.add('squareChanged');
//   }
//   else {
//     square.classList.remove('squareChanged');
//   }
// }

// var scrollMagicMate = {
   
//     className: document.querySelector('.js-scrollmagic'),
   
//     init: function(){
//       this.className.className;
//     },
//     addClass: function(){
//      this.className.classList.add('squareChanged');
//      console.log(this);
//     },
//   }

// vovka = {
//   className: 'vovka'
// }
//   scrollMagicMate.init(vovka);
//   scrollMagicMate.addClass();




  

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

      // request.onerror = function() {
      //   // There was a connection error of some sort
      // };

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







