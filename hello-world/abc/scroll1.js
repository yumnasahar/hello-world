$(document).ready(function () {
    var num_li = $('.container > div').length // container containing div or not

    //move divs bottom top
    
    n = 1;    //represent no of div

    moving = 0; 
    $(window).mousewheel(function (e) {
        $("html,body").stop()
        if (moving == 0) {
            moving = 1
            if (e.deltaY == -1) {
                if (n < num_li) {
                    n++
                    
                }
            } else {
                if (n > 1) {
                    n--
                }
            }
        }
        $("html,body").animate({ "scrollTop": $(".p0" + n).offset().top }, function () { moving = 0 })
        console.log(n)
    })
})