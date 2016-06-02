$(document).ready(function() {
    $("button[name=grade1]").click(function() {
        $("button[name=grade1]").attr("class","Right-word1");
        $("#Reading").css("display","none");
        $("button[name=read]").attr("class","Right-word");
        $("#Reading1").css("display","block");
    });

    $("button[name=read]").click(function() {
        $("button[name=grade1]").attr("class","Right-word");
        $("#Reading1").css("display","none");
        $("button[name=read]").attr("class","Right-word1");
        $("#Reading").css("display","block");
    });

    $("button[name=grade2]").click(function() {
        $("button[name=grade2]").attr("class","Right-word1");
        $("#Watching").css("display","none");
        $("button[name=watch]").attr("class","Right-word");
        $("#Watching1").css("display","block");
    });

    $("button[name=watch]").click(function() {
        $("button[name=grade2]").attr("class","Right-word");
        $("#Watching1").css("display","none");
        $("button[name=watch]").attr("class","Right-word1");
        $("#Watching").css("display","block");
    });

    $("button[name=grade3]").click(function() {
        $("button[name=grade3]").attr("class","Right-word1");
        $("#Playing").css("display","none");
        $("button[name=play]").attr("class","Right-word");
        $("#Playing1").css("display","block");
    });

    $("button[name=play]").click(function() {
        $("button[name=grade3]").attr("class","Right-word");
        $("#Playing1").css("display","none");
        $("button[name=play]").attr("class","Right-word1");
        $("#Playing").css("display","block");
    });

    $(".Line1").click(function() {
        $(".Line1").css("display","none");
        $("#adv-book").css("display","none");
    });

    $(".Line2").click(function() {
        $(".Line2").css("display","none");
        $("#adv-video").css("display","none");
    });

    $(".Line3").click(function() {
        $(".Line3").css("display","none");
        $("#adv-music").css("display","none");
    });

    $(".glyphicon-star-empty").click(function() {
        $(this).removeClass("glyphicon-star-empty").addClass("glyphicon-star");
        alert("收藏成功!");
    });

    $('.carousel').carousel({
        interval: 2000
    });

});