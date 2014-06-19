

$().ready(function () {

    var side = 1;

    setInterval(function () {

        var s = side;

        while (s === side) {
            s = getRandomInt(1, 6);
        }

        side = s;

        var transform = "";
        switch(s) {
            case 1: transform = "rotateY(90deg)"; break;
            case 2: transform = "rotateY(-90deg)"; break;
            case 3: transform = "rotateX(90deg)"; break;
            case 4: transform = "rotateX(-90deg)"; break;
            case 5: transform = "rotateY(180deg)"; break;
            case 6: transform = "rotate(0)"; break;
        }

        $(".cube").css("transform", transform);
    }, 3000);

});

// http://stackoverflow.com/a/1527820/486434
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}