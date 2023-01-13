var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

$('.lightButSets').click(function() {
    $('.lightWindow').toggleClass("showWindow").css("transition", "0.5s");
    });

  $('.mode').click(function() {
    $('body').toggleClass("dark");
    $(this).toggleClass("active");
    $('.lightSets').toggleClass("darkSets");
    $('.lightWindow').toggleClass("darkWindow");
    $('.lightButSets').toggleClass("darkButSets");
    $('.lightMenu').toggleClass("darkMenu");
    $('.lightScratch').toggleClass("darkScratch");
    $('.lightCloud').toggleClass("darkCloud");
  });

  $('.language').click(function() {
    $(this).toggleClass("langActive");
  });

  $('.home').click(function() {
    $('.first').addClass("activateChapter");
    $('.second').removeClass("activateChapter");
    $('#third').css("opacity", 0);
    $('#fourth').css("opacity", 0);
  });

  $('.projects').click(function() {
    $('.first').removeClass("activateChapter");
    $('.second').addClass("activateChapter");
    $('#third').css("opacity", 0);
    $('#fourth').css("opacity", 0);
  });

  window.onload = function() {
    $('.first').addClass("activateChapter");
  }