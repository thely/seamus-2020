console.log("Huzzah, it works!");

// instantiate the scrollama
const scroller = scrollama();

function handleStepEnter(response) {
  console.log(response);
  var el = document.querySelector("[data-step='"+response.index+"']");
  for (var e of document.querySelectorAll("[data-step]")) {
     e.classList.remove("active");
  }
  el.classList.add('active');
}

function alterPieceDisplay() {
  var list = document.querySelectorAll("#concerts-section a");
  for (var el of list) {
    var pieceInfo = el.innerHTML.split(" :: ");
    if (pieceInfo.length == 1) continue;
    
    el.innerHTML = "<span class='composer'>"+pieceInfo[0]+"</span><span class='piece'>"+pieceInfo[1]+"</span>";
  }
}

alterPieceDisplay();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".small-section", // was h2, h3
    // debug: true,
    offset: 0.1
  })
  .onStepEnter(handleStepEnter);

// setup resize event
window.addEventListener("resize", scroller.resize);

