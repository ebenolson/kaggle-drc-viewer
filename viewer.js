var filenames = {};

function buildViewer() {
  $('.buttonbar').each(function() {
    for (var i=0; i<=4; i++) {
      var el = $('<a class="btn btn-default level'+i+'" href="#" role="button">Level '+i+'</a>');
      el.click(function(i) { return function() {
        changeLevel($(this).parents('.viewport'), i);
      }
      }(i));
      $(this).append(el);
    }
  });

  $('.viewport').data('index', 0);
  $('.viewport').each(function () {
    changeLevel(this, 0);
  });


  $('.viewport').mousewheel(function(event) {
    var delta = -1 * event.deltaY;
    if (delta > 1) { delta = 1; }
    if (delta < -1) { delta = -1; }

    changeImage(this, delta);
    event.preventDefault();
  });   
}

function changeLevel(viewport, level) {
  el = $(viewport);
  el.data('level', level);
  el.data('index', 0);
  el.find('.buttonbar > .btn').removeClass('btn-primary').addClass('btn-default');
  el.find('.level'+level).removeClass('btn-default').addClass('btn-primary');
  changeImage(el, 0);
}

function changeImage(viewport, delta) {
  el = $(viewport);
  el.data('index', el.data('index')+delta);
  console.log(el.data('level'));
  if (el.data('index') < 0) el.data('index', 0);
  if (el.data('index') >= filenames[el.data('level')].length) {
    el.data('index', filenames[el.data('level')].length);
  }

  var filename = filenames[el.data('level')][el.data('index')];
  el.find('img').attr('src', '../'+filename);
  el.find('.filename').text(filename);
  el.find('.filenumber').text('File '+el.data('index')+' of '+filenames[el.data('level')].length);
}

$( document ).ready(function() {
  $.getJSON("filenames.json", function(json) {
    filenames = json;

    buildViewer();
  });

});