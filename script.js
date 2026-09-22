document.querySelectorAll('.nav-item').forEach(function (item) {
  item.addEventListener('click', function () {
    document.querySelectorAll('.nav-item').forEach(function (i) { i.classList.remove('active'); });
    document.querySelectorAll('.materia-panel').forEach(function (p) { p.classList.remove('active'); });
    item.classList.add('active');
    document.getElementById('panel-' + item.dataset.target).classList.add('active');
  });
});