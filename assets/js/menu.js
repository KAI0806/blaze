function hamburger(){
    document.getElementById('ladder').classList.toggle('ladder_white');
    document.getElementById('nav').classList.toggle('in');
    document.getElementById('logo').classList.toggle('white');
  };
  document.getElementById('hamburger').addEventListener('click',function(){
    hamburger();
  });
  document.getElementById('nav').addEventListener('click',function(){
    hamburger();
  });