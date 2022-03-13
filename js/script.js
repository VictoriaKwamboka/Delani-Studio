$(document).ready(function () {
    $("#wwd-design-image").click(function () {
        $("#wwd-design-image").fadeIn("slow", "linear").hide();
        $("#wwd-design").show();
    });
    $("#wwd-design").click(function () {
        $("#wwd-design").fadeOut("swing");
        $("#wwd-design-image").fadeIn("slow", "swing");
    })
});

$(document).ready(function () {
    $("#dev-image").click(function () {
        $("#dev-image").fadeIn("slow", "linear").hide();
        $("#wwd-development").show();
    });
    $("#wwd-development").click(function () {
        $("#wwd-development").fadeOut("swing");
        $("#dev-image").fadeIn("slow", "swing");
    });
});
$(document).ready(function () {
    $("#mgt-image").click(function () {
        $("#mgt-image").fadeIn("slow", "linear").hide();
        $("#wwd-management").show();
    });
    $("#wwd-management").click(function () {
        $("#wwd-management").fadeOut("swing");
        $("#mgt-image").fadeIn("slow", "swing");
    });
});

$(document).ready(function () {
    let works = ['work1', 'work2', 'work3', 'work4', 'work5', 'work6', 'work7', 'work8'];
    works.forEach(function (work, index) {
        $('#' + work).mouseover(function(){
            $('#textHover' + (index + 1)).show();
        }).mouseout(function(){
            $('#textHover' + (index + 1)).hide();
        })
       
    })

})



// let textHovers = ['textHover1', 'textHover2', 'textHover3', 'textHover4', 'textHover5', 'textHover6', 'textHover7', 'textHover8'];
// textHovers.forEach(function (textHover) {
//     $("#" + work).mouseover(function () {
//         $('#' + textHover).show();
//     }).mouseout(function () {
//         $('#' + textHover).hide()
//     })

// })