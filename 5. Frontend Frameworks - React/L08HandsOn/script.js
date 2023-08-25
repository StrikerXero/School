
/*
jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.
*/

$(document).ready(function () {
    $("header").hover(function () {
        $(this).css("color", "teal");
    }, function () {
        $(this).css("color", "black");
    });
});
$(document).ready(function () {
    $('p').click(function () {
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
});
$(document).ready(function () {
    $("li").dblclick(function () {
        $(this).hide();
    });
});
$(document).ready(function () {
    $(input).keydown(function(){
        $(this).toggleClass("input");
    });
});

/* FROM JQUERY EXAMPLES 
$(document).ready(function(){F
    $(".p1").hover(function(){
        $(this).css("font-family", "Times New Roman");
    }, function(){
        $(this).css("font-family", "Georgia");
    });
});
*/

/*
$(document).ready(function()){
    $(header).hover(function(){
        $(this).toggleClass("classType")
    });

};
*/


/*
$(document).ready(function()){
$('.something').hover(function () {
    $('body').css({
        background: 'blue'
    })
}, function () {
    $('body').css({
        background: 'white'});
    };
*/

