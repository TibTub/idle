var points = 0;
var pointsPerSecond = 0;
var upgradeOneOwned = 0;
var upgradeTwoOwned = 0;
var pointDisplay = $(".points").text();
$(".points").html(points);
function upgradeOwnBuy(points) {
    $(".buyug1").click(function() {
      console.log("buy function!");
      if (points < 0) {
        points = 0;
      }
      if (points >= 5) {
        points = points - 5;
        $("#ug1").css({"color":"","pointer":"","font-weight":""});
        upgradeOneOwned = upgradeOneOwnedowned + 1;
      }
      else {
        return;
      }
      var pointsDisplay = $(".points").text();
      $(".points").html(points);
    });
}
$(".pointbutton").click(function() {
    /*point maker*/
    points++;
    var pointsDisplay = $(".points").text();
    $(".points").html(points);
    if (points >= 5) {
        $("#ug1, .buyug1").css({"color":"black", "cursor":"pointer", "font-weight":"bold"});
        upgradeOneBuy(points);
    }
    if (points >= 50) {
        $("#ug2, .buyug2").css({"color":"black", "cursor":"pointer", "font-weight":"bold"});
    }
    else {
      return;
    }
});


console.log('main loaded')
