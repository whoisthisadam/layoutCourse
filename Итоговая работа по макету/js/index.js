let menuBtn = document.querySelector('.mobile-menu-icon');
let menu = document.querySelector('.mobile-menu');
let navSection=document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  navSection.classList.toggle('mobile-menu-active');
  icon.classList.toggle('cross');
})
document.getElementById('mobile-menu-icon').onclick = function() {
  if(!document.getElementById('box-image').hidden){
    document.getElementById('box-image').hidden = true;
  }
  else if(document.getElementById('box-image').hidden){
    document.getElementById('box-image').hidden=false;
  }
  if(!document.getElementById('number-box').hidden){
    document.getElementById('number-box').hidden=true;
  }
  else if(document.getElementById('number-box').hidden){
    document.getElementById('number-box').hidden=false;
  }
}

