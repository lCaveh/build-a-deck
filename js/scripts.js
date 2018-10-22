$(document).ready(function() {
  $("button#deck").click(function(event) {
    var kinds = ["diamond","club","heart","spade"]
    var shapes = ["ace","2","3","4","5","6","7","8","9","10","jack","queen","king"]
    kinds.forEach(function(kind){
      shapes.forEach(function(shape){
        $("#story").append ("<p>"+shape+" of "+kind+"</p>");
      });
    });
    $("#story").show();
    event.preventDefault();
  });
});
