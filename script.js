var colors= ["pink","blue","orange","red","light blue","fireBrick","yellow","darkgreen"]

$(document).ready(function() {
    $("button").click(function(){
      $("body").css("background-color", colors[i]);
     i++
    });
});