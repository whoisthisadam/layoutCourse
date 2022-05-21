let menuBtn = document.querySelector('.mobile-menu-icon');
let menu = document.querySelector('.mobile-menu');
let navSection=document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  navSection.classList.toggle('mobile-menu-active');
  icon.classList.toggle('cross');
})