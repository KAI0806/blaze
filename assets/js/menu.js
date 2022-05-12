function hamburger(){
    document.getElementById('ladder').classList.toggle('ladder_white');
    document.getElementById('nav').classList.toggle('in');
    document.getElementById('logo').classList.toggle('white');
};

function slideup01(){
  document.getElementById('slide_img1').classList.toggle('slide_active');
};
function slideup02(){
  document.getElementById('slide_img2').classList.toggle('slide_active');
};
function slideup03(){
  document.getElementById('slide_img3').classList.toggle('slide_active');
};
function slideup04(){
  document.getElementById('slide_img4').classList.toggle('slide_active');
};

document.getElementById('hamburger').addEventListener('click',function(){
  hamburger();
});
document.getElementById('nav').addEventListener('click',function(){
  hamburger();
});

document.getElementsByClassName('slideup1').addEventListener('click',function(){
  slideup01();
});

document.getElementsByClassName('slideup2').addEventListener('click',function(){
  slideup02();
});

document.getElementsByClassName('slideup3').addEventListener('click',function(){
  slideup03();
});

document.getElementsByClassName('slideup4').addEventListener('click',function(){
  slideup04();
});