$(document).ready(function () {
    $(window).scroll(function () {
        var s = $(window).scrollTop();
//        console.log(s);
        //                for background1 and slide1
        if (s <= 600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (s / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (s / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (s / 3) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (s / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (s / 3) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[0]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide1
        if (s > 600 && s <= 1000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (0 * 600 + 600 / 3 + s - 600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (0 * 600 + 600 / 3 + s - 600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (0 * 600 + 600 / 3 + s - 600) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (0 * 600 + 600 / 3 + s - 600) + 'px');
            $('#background').css('transform', 'translateY(-' + (0 * 600 + 600 / 3 + s - 600) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[1]).attr("src", "img/blue-button.png");
        }
        //                for background2 and slide2
        if (s > 1000 && s <= 1600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (1 * 600 + (s - 1000) / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (1 * 600 + (s - 1000) / 3) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (1 * 600 + (s - 1000) / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (1 * 600 + (s - 1000) / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (1 * 600 + (s - 1000) / 3) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[1]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide2
        if (s > 1600 && s <= 2000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (1 * 600 + 600 / 3 + s - 1600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (1 * 600 + 600 / 3 + s - 1600) + 'px');
            $('#background').css('-p-transform', 'translateY(-' + (1 * 600 + 600 / 3 + s - 1600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (1 * 600 + 600 / 3 + s - 1600) + 'px');
            $('#background').css('transform', 'translateY(-' + (1 * 600 + 600 / 3 + s - 1600) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[2]).attr("src", "img/blue-button.png");
        }
        //                for background3 and slide3
        if (s > 2000 && s <= 2600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (2 * 600 + (s - 2000) / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (2 * 600 + (s - 2000) / 3) + 'px');
            $('#background').css('-p-transform', 'translateY(-' + (2 * 600 + (s - 2000) / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (2 * 600 + (s - 2000) / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (2 * 600 + (s - 2000) / 3) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[2]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide3
        if (s > 2600 && s <= 3000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (2 * 600 + 600 / 3 + s - 2600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (2 * 600 + 600 / 3 + s - 2600) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (2 * 600 + 600 / 3 + s - 2600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (2 * 600 + 600 / 3 + s - 2600) + 'px');
            $('#background').css('transform', 'translateY(-' + (2 * 600 + 600 / 3 + s - 2600) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[3]).attr("src", "img/blue-button.png");
        }
        //                for background4 and slide4
        if (s > 3000 && s <= 3600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (3 * 600 + (s - 3000) / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (3 * 600 + (s - 3000) / 3) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (3 * 600 + (s - 3000) / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (3 * 600 + (s - 3000) / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (3 * 600 + (s - 3000) / 3) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[3]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide4
        if (s > 3600 && s <= 4000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (3 * 600 + 600 / 3 + s - 3600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (3 * 600 + 600 / 3 + s - 3600) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (3 * 600 + 600 / 3 + s - 3600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (3 * 600 + 600 / 3 + s - 3600) + 'px');
            $('#background').css('transform', 'translateY(-' + (3 * 600 + 600 / 3 + s - 3600) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[4]).attr("src", "img/blue-button.png");
        }
        //                for background5 and slide5
        if (s > 4000 && s <= 4600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (4 * 600 + (s - 4000) / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (4 * 600 + (s - 4000) / 3) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (4 * 600 + (s - 4000) / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (4 * 600 + (s - 4000) / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (4 * 600 + (s - 4000) / 3) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[4]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide5
        if (s > 4600 && s <= 5000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (4 * 600 + 600 / 3 + s - 4600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (4 * 600 + 600 / 3 + s - 4600) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (4 * 600 + 600 / 3 + s - 4600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (4 * 600 + 600 / 3 + s - 4600) + 'px');
            $('#background').css('transform', 'translateY(-' + (4 * 600 + 600 / 3 + s - 4600) + 'px');
            
            greyAll();
            $($('#slidenav ul li a img')[5]).attr("src", "img/blue-button.png");
        }
        //                for background6 and slide6
        if (s > 5000 && s <= 5600) {
            $('#background').css('-webkit-transform', 'translateY(-' + (5 * 600 + (s - 5000) / 3) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (5 * 600 + (s - 5000) / 3) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (5 * 600 + (s - 5000) / 3) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (5 * 600 + (s - 5000) / 3) + 'px');
            $('#background').css('transform', 'translateY(-' + (5 * 600 + (s - 5000) / 3) + 'px');
            greyAll();
            $($('#slidenav ul li a img')[5]).attr("src", "img/blue-button.png");
        }
        //                for emptyslide after slide6
        if (s > 5600 && s <= 6000) {
            $('#background').css('-webkit-transform', 'translateY(-' + (5 * 600 + 600 / 3 + s - 5600) + 'px');
            $('#background').css('-moz-transform', 'translateY(-' + (5 * 600 + 600 / 3 + s - 5600) + 'px');
            $('#background').css('-o-transform', 'translateY(-' + (5 * 600 + 600 / 3 + s - 5600) + 'px');
            $('#background').css('-ms-transform', 'translateY(-' + (5 * 600 + 600 / 3 + s - 5600) + 'px');
            $('#background').css('transform', 'translateY(-' + (5 * 600 + 600 / 3 + s - 5600) + 'px');
        }


        //        Animation of images within slides
        if (s <= 750) {
            $('#slide1>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide1>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide1>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide1>.steptext').addClass('animate-away').removeClass('animate-back');
        }

        if (s <= 1750) {
            $('#slide2>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide2>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide2>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide2>.steptext').addClass('animate-away').removeClass('animate-back');
        }

        if (s <= 2750) {
            $('#slide3>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide3>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide3>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide3>.steptext').addClass('animate-away').removeClass('animate-back');
        }

        if (s <= 3750) {
            $('#slide4>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide4>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide4>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide4>.steptext').addClass('animate-away').removeClass('animate-back');
        }

        if (s <= 4750) {
            $('#slide5>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide5>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide5>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide5>.steptext').addClass('animate-away').removeClass('animate-back');
        }

        if (s <= 5750) {
            $('#slide6>.stepimage').removeClass('animate-away').addClass('animate-back');
            $('#slide6>.steptext').removeClass('animate-away').addClass('animate-back');
        } else {
            $('#slide6>.stepimage').addClass('animate-away').removeClass('animate-back');
            $('#slide6>.steptext').addClass('animate-away').removeClass('animate-back');
        }
    });
    
    
    //for smooth scrolling
    
    // slow scroll to a specific target in the web page.
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        var hash = this.hash;
        var $destination = $(hash);
        // You can change the delay parameter
        $('html, body').stop().animate({
            // Stop it find HTML Tag or BODY tag
            'scrollTop': $destination.offset().top
        }, 2000, 'swing', function () {
            window.location.hash = hash;
        });

    });
    
    function greyAll(){
      $('#slidenav ul li a img').each(function(){
            $(this).attr("src", "img/grey-button.png");
        });
    }
});
