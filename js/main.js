var points = 0;
var pointsPerSecond = 0;

var pointDisplay = $(".points").text();

var upgrades = {
    pointCollector: { name: "Point Collector", cost: 30, owned: 0, limit: -1 },
    pointPump: { name: "Point Pump", cost: 50, owned: 0, limit: -1 },
}

function buyUpgrade(id, count) {
    var upgradeToBuy = upgrades[id];
    var fullCost = upgradeToBuy.cost * count;

    if (points >= fullCost) {
        if (upgradeToBuy.limit == -1 || upgradeToBuy.owned + count <= upgradeToBuy.limit) {
            upgradeToBuy.owned += count;
            points -= fullCost;
        }
    }
}

$('.upgradeButton').click(function() {
    var upgradeToBuy = $(this).data('upgrade');
    var countToBuy = $(this).data('count');

    buyUpgrade(upgradeToBuy, countToBuy);

    updateDisplay();
});

$('.pointButton').click(function() {
    points++;

    updateDisplay();
});

function updateDisplay() {
    $("#points").html(points);
    $("#pointsPerSecond").html(pointsPerSecond);

    $('.upgradeButton').each(function() {
        var upgradeName = $(this).data("upgrade");
        var upgrade = upgrades[upgradeName];

        var count = $(this).data('count');
        var cost = upgrade.cost;

        var fullCost = cost * count;

        if (points >= fullCost) {
            $(this).prop("disabled", false);
        } else {
            $(this).prop("disabled", true);
        }
    });
}

//DEMO UPGRADE CODE - NOT ACTUALLY EXACTLY HOW I WOULD DO IT
function upgradeTimer() {
    setInterval(function() {
        pointsPerSecond = 0;  //VERY FLAWED TEMPORARY WAY OF CALCULATING PPS

        pointCollectorUpgrade();
        pointPumpUpgrade();

        updateDisplay();
    }, 1000);
}

function pointCollectorUpgrade() {
    var pointsToAdd = upgrades["pointCollector"].owned / 2;

    points += pointsToAdd;
    pointsPerSecond += pointsToAdd; //VERY FLAWED TEMPORARY WAY OF CALCULATING PPS
}

function pointPumpUpgrade() {
    var pointsToAdd = upgrades["pointPump"].owned;

    points += pointsToAdd;
    pointsPerSecond += pointsToAdd; //VERY FLAWED TEMPORARY WAY OF CALCULATING PPS
}

$(document).ready(function() {
    updateDisplay();
    upgradeTimer();
    console.log("main loaded");
});
