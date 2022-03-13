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

