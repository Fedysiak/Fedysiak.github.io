

let cursor = document.getElementById("cursor");
let circle = document.querySelector(".cursor-circle");

let setCursorPosition = function(e) {
  let xPosition = e.clientX - cursor.clientWidth / 2 + "px";
  let yPosition = e.clientY - cursor.clientHeight / 2 + "px";
  cursor.style.transform =
    "translate(" + xPosition + "," + yPosition + ") scale(1)";
  return {
    x: xPosition,
    y: yPosition
  };
};

document.addEventListener("mousemove", e => setCursorPosition(e));
let scaleCursor = function(e, scale) {
  setCursorPosition(e);
  cursor.style.transform =
    "translate(" +
    setCursorPosition(e).x +
    "," +
    setCursorPosition(e).y +
    ") scale(" +
    scale +
    ")";
};

document.addEventListener("mousedown", function(e) {
  scaleCursor(e, 0.8);
  circle.classList.add("animate");
});
document.addEventListener("mouseup", function(e) {
  scaleCursor(e, 1);
  circle.classList.remove("animate");
});



/*var images = '.image-container',
    slide = $(images+' img').innerWidth();

function append(){$(images+' img').first().appendTo($(images));}
function prepend(){$(images+' img').last().prependTo($(images));}

$('.prev').click(function(){ prepend(); });
$('.next').click(function(){ append();  });
*/
