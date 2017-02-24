
var pointstimer = setInterval(pointstimer, 1000);
function upgrade1(pps, ug1owned){
    pps = pps + ug1owned/2;
}
function upgrade2(pps, ug2owned){
  pps = pps + ug2owned;
}
if (pointstimer == 0){
  function pointspersecond(points, pps){
      points = points + pps;
  }
}

console.log("upgrades loaded")
