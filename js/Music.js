$(document).ready(function() {
    $('.carousel').carousel({
        interval: 2500
    });

    $("#change1-1,#change2-1").mouseover(function() {
        $("#change2-1").css("display","block");
    });
    $("#change1-1,#change2-1").mouseout(function() {
        $("#change2-1").css("display","none");
    });

    $("#change1-2,#change2-2").mouseover(function() {
        $("#change2-2").css("display","block");
    });
    $("#change1-2,#change2-2").mouseout(function() {
        $("#change2-2").css("display","none");
    });

    $("#change1-3,#change2-3").mouseover(function() {
        $("#change2-3").css("display","block");
    });
    $("#change1-3,#change2-3").mouseout(function() {
        $("#change2-3").css("display","none");
    });

    $("#change1-4,#change2-4").mouseover(function() {
        $("#change2-4").css("display","block");
    });
    $("#change1-4,#change2-4").mouseout(function() {
        $("#change2-4").css("display","none");
    });

    $("#change5-1,#change6-1").mouseover(function() {
        $("#change6-1").css("display","block");
    });
    $("#change5-1,#change6-1").mouseout(function() {
        $("#change6-1").css("display","none");
    });

    $("#change5-2,#change6-2").mouseover(function() {
        $("#change6-2").css("display","block");
    });
    $("#change5-2,#change6-2").mouseout(function() {
        $("#change6-2").css("display","none");
    });

    $("#change5-3,#change6-3").mouseover(function() {
        $("#change6-3").css("display","block");
    });
    $("#change5-3,#change6-3").mouseout(function() {
        $("#change6-3").css("display","none");
    });

    $("#change5-4,#change6-4").mouseover(function() {
        $("#change6-4").css("display","block");
    });
    $("#change5-4,#change6-4").mouseout(function() {
        $("#change6-4").css("display","none");
    });
});