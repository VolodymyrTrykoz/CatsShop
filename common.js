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

var test = document.querySelector('.test');

var request = new XMLHttpRequest();
request.open('GET', 'cat.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
    console.log(data);
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
    console.log(data.cats[i].name);
    
  }


}