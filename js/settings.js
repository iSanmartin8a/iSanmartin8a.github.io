var script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.3.min.js"; // Check https://jquery.com/ for the current version
document.getElementsByTagName("head")[0].appendChild(script);

$(".lightButSets").click(function () {
  $(".lightWindow").toggleClass("showWindow").css("transition", "0.5s");
});

$(".mode").click(function () {
  $("body").toggleClass("dark");
  $(this).toggleClass("active");
  $(".lightSets").toggleClass("darkSets");
  $(".lightWindow").toggleClass("darkWindow");
  $(".lightButSets").toggleClass("darkButSets");
  $(".lightMenu").toggleClass("darkMenu");
  $(".lightScratch").toggleClass("darkScratch");
  $(".lightCloud").toggleClass("darkCloud");
  $(".icon").toggleClass("darkIcon");
});

$(".language").click(function () {
  $(this).toggleClass("langActive");
});

$(".home").click(function () {
  $(".first").addClass("activateChapter");
  $(".second").removeClass("activateChapter");
  $("#third").css("opacity", 0);
  $("#fourth").css("opacity", 0);
});

$(".projects").click(function () {
  $(".first").removeClass("activateChapter");
  $(".second").addClass("activateChapter");
  $("#third").css("opacity", 0);
  $("#fourth").css("opacity", 0);
});

window.onload = function () {
  setTimeout(function () {
    $(".first").addClass("activateChapter");
  }, 100);
};

function cloudTransition() {
  $("#cloud").css("animation", "cloudIn 2.5s ease");
  $(".first").removeClass("activateChapter");
  $("#menu").css("display", "none");
  setTimeout(function () {
    $("#summary").addClass("activateChapter");
  }, 1000);
}

// $("#chatterInfo").css("left", $("#chatter").css("right"));
// $("#radarfiInfo").css("left", $("#radarfi").css("right"));
$("#chatterInfo").css("left", "10rem");
$(document).on("mousemove",".projectCard",function(e){ 

  var y = e.clientY;  
  var chatterY = y - 440; 
  $("#chatterInfo").css("transform","translate3d("+"0,"+chatterY+"px,0px)");
  var radarfiY = y - 706; 
  $("#radarfiInfo").css("transform","translate3d(" + "0,"+radarfiY+"px,0px)");
});