$(document).ready(function () {
    alert("jQuery")
});

$("nav").click(function () {
    $("nav").css("color", "white");
    $("nav").css("background-color", "red");
});

type = "text/javascript" >
        $(document).ready(function () {
    $("#ev0").click(function () {
        $("#id0").hide();
    });

    $("#ev1").click(function () {
        $("#id0").show();
    });

    $("body").css("background-color", "#088A68");
    $("body").css("font-family", "sans-serif");
    $("body").css("color", "#EDEFEE");

});

type = "text/javascript" >
        $(document).ready(function () {
    $("#ev2").click(function () {
        $("#id1").hide(1000);//"easing"
    });

    $("#ev3").click(function () {
        $("#id1").show(1000);//"easing"
    });
});

type = "text/javascript" >
        $(document).ready(function () {
    $("#ev5").click(function () {
        $("#id3").toggle(1000);
    });
});