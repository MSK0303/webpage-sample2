$(function(){
    $('.nav-btn').on("click",function(){
        $(this).toggleClass('open');
        $('#nav').toggleClass('open');
    });
});

$(function(){
    $('.navigation-group li a').on("click",
    function(){
        console.log("click");
        $('.nav-btn').toggleClass('open');
        $('#nav').toggleClass('open');
    });
});