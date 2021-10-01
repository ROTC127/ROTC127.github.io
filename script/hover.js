$(".sample1").mouseover(function () {
    $(".img-size1").css("display", "none");
    $(".img-size2").css("display", "block");
    $(".img-size2").stop().animate(
        {
            width: "100%",
            height: "100%",
        },
        300
    );
});

$(".sample1").mouseout(function () {
    $(".img-size1").css("display", "block");
    $(".img-size2").css("display", "none");
    $(".img-size2").stop().animate(
        {
            width: "0%",
            height: "0%",
        },
        500
    );
});
// ------------------------------------------------------------
$(".sample2").mouseover(function () {
    $(".img-size1").css("display", "none");
    $(".img-size3").css("display", "block");
    $(".img-size3").stop().animate(
        {
            width: "100%",
            height: "100%",
        },
        300
    );
});

$(".sample2").mouseout(function () {
    $(".img-size1").css("display", "block");
    $(".img-size3").css("display", "none");
    $(".img-size3").stop().animate(
        {
            width: "0%",
            height: "0%",
        },
        500
    );
});
// ------------------------------------------------------------
$(".sample3").mouseover(function () {
    $(".img-size1").css("display", "none");
    $(".img-size4").css("display", "block");
    $(".img-size4").stop().animate(
        {
            width: "100%",
            height: "100%",
        },
        300
    );
});

$(".sample3").mouseout(function () {
    $(".img-size1").css("display", "block");
    $(".img-size4").css("display", "none");
    $(".img-size4").stop().animate(
        {
            width: "0%",
            height: "0%",
        },
        500
    );
});
// ------------------------------------------------------------
$(".sample4").mouseover(function () {
    $(".img-size1").css("display", "none");
    $(".img-size5").css("display", "block");
    $(".img-size5").stop().animate(
        {
            width: "100%",
            height: "100%",
        },
        300
    );
});

$(".sample4").mouseout(function () {
    $(".img-size1").css("display", "block");
    $(".img-size5").css("display", "none");
    $(".img-size5").stop().animate(
        {
            width: "0%",
            height: "0%",
        },
        500
    );
});
