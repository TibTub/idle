var points = 0;
var pps = 0;
var ug1owned = 0;
var ug2owned = 0;
var pdisplay = $(".points").text();
$(".points").html(points);
function ug1buyable(points) {
    $(".buyug1").click(function() {
      console.log("buy function!");
      if (points < 0) {
        points = 0;
      }
      if (points >= 5) {
        points = points - 5;
        $("#ug1").css({"color":"","pointer":"","font-weight":""});
        ug1owned = ug1owned + 1;
      }
      else {
        return;
      }
      var pdisplay = $(".points").text();
      $(".points").html(points);
    });
}
$(".pointbutton").click(function() {
    /*point maker*/
    points++;
    var pdisplay = $(".points").text();
    $(".points").html(points);
    if (points >= 5) {
        $("#ug1, .buyug1").css({"color":"black", "cursor":"pointer", "font-weight":"bold"});
        ug1buyable(points);
    }
    if (points >= 50) {
        $("#ug2, .buyug2").css({"color":"black", "cursor":"pointer", "font-weight":"bold"});
    }
    else {
      return;
    }
});


console.log('main loaded')
