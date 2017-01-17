var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 250,
  'tolerance': 70
});

document.querySelector('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});