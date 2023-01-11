var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$('.lightButSets').click(function() {
    $('.lightWindow').toggleClass("showWindow");
    });

  $('.mode').click(function() {
    $('body').toggleClass("dark");
    $(this).toggleClass("active");
    $('.lightSets').toggleClass("darkSets");
    $('.lightWindow').toggleClass("darkWindow").css("transition", "5s");
    $('.lightButSets').toggleClass("darkButSets");
  });

  $('.language').click(function() {
    $(this).toggleClass("langActive");
  });