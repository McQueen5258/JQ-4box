$(".top-left").click(function(){
    $(".clickBox").text("谢谢您单击我！");
    $(".top-left").css("background-color","green")
})

$(".top-right").dblclick(function(){
    $(".dblClickBox").text("谢谢您双击我！");
    $(".top-right").css("background-color","blue")
})

$(".bottom-left").hover(function(){
    $(".hoverBox").text("谢谢您在我身上徘徊！");
    $(".bottom-left").css("background-color","yellow")
})

$(".bottom-right").mouseenter(function(){
    $(".mouseOnBox").text("谢谢您的光临！");
    $(".bottom-right").css("background-color","white")
})
$(".bottom-right").mouseleave(function(){
    $(".mouseOnBox").text("很快再来！");
    $(".bottom-right").css("background-color","red")
})