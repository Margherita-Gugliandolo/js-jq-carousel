$(document).ready(function (){

var next = $('.next');
var prev = $('.prev');

console.log(next);

next.click(function(){
 nextImg();
});

prev.click(function(){
 prevImg();
 });
});

// Funzioni

function nextImg(){
  var imgActive = $('.album img.active');
  var pointer = $('.nav i.active');

  imgActive.removeClass('active');
  imgActive.next().addClass('active');

  pointer.removeClass('active');
  pointer.next().addClass('active');

  if(imgActive.hasClass('last') == true){
  $('.album img.first').addClass('active');
  $('.nav i.first').addClass('active');
  }else{
    imgActive.next().addClass('active');
    pointer.next().addClass('active');
  }
}

function prevImg(){
  var imgActive = $('.album img.active');
  var pointer = $('.nav i.active');

  imgActive.removeClass('active');
  imgActive.prev().addClass('active');

  pointer.removeClass('active');
  pointer.prev().addClass('active');

  if(imgActive.hasClass('first') == true){
  $('.album img.last').addClass('active');
  $('.nav i.last').addClass('active');
  }else{
    imgActive.prev().addClass('active');
    pointer.prev().addClass('active');
  }
}
