(function ($) {
    "use strict";


    /*--
		Header Sticky
更多精品模板：Http://www.bootstrapMB.com
    -----------------------------------*/
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll <= 100) {
            $(".header-main").removeClass("sticky");
        } else{
            $(".header-main").addClass("sticky");
        }
	});
    

    /*--
		Menu Active
    -----------------------------------*/
    $(function () {
    var url = window.location.pathname; 
    var activePage = url.substring(url.lastIndexOf('/') + 1); 
        $('.nav-menu li a').each(function () { 
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); 
    
            if (activePage == linkPage) { 
                $(this).closest("li").addClass("active"); 
            }
        });
    });


    /*--
		Menu Script
	-----------------------------------*/

    function menuScript() {

        $('.menu-toggle').on('click', function(){
            $('.mobile-menu').addClass('open')
            $('.overlay').addClass('open')
        });
        
        $('.menu-close').on('click', function(){
            $('.mobile-menu').removeClass('open')
            $('.overlay').removeClass('open')
        });
        
        $('.overlay').on('click', function(){
            $('.mobile-menu').removeClass('open')
            $('.overlay').removeClass('open')
        });
        
        /*Variables*/
        var $offCanvasNav = $('.mobile-menu-items'),
        $offCanvasNavSubMenu = $offCanvasNav.find('.sub-menu');

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="mobile-menu-expand"></span>');

        /*Close Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.slideUp();

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, li .mobile-menu-expand, li .menu-title', function(e) {
            var $this = $(this);
            if (($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('mobile-menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active-expand');
                    $this.siblings('ul').slideUp();
                } else {
                    $this.parent('li').addClass('active-expand');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.closest('li').siblings('li').removeClass('active-expand');
                    $this.siblings('ul').slideDown();
                }
            }
        });

        $( ".sub-menu" ).parent( "li" ).addClass( "menu-item-has-children" );
    }
    menuScript();

    /*--
        Magnific Popup Activation
    -----------------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
        // other options
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        gallery:{
          enabled:true
        }
    });


    /*--
        Courses Tabs Menu
    -----------------------------------*/
    var edule = new Swiper('.courses-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,        
        navigation: {
            nextEl: '.courses-active .swiper-button-next',
            prevEl: '.courses-active .swiper-button-prev',
        },       
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 2,
            },  
            768: {
                slidesPerView: 3,
            },            
            992: {
                slidesPerView: 4,
            },            
            1200: {
                slidesPerView: 5,
            }
        },
    });


    /*--
        Testimonial
    -----------------------------------*/
    var edule = new Swiper('.testimonial-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,        
        pagination: {
            el: '.testimonial-active .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },  
            768: {
                slidesPerView: 1,
            },            
            992: {
                slidesPerView: 2,
            }
        },
    });


    /*--
        Brand
    -----------------------------------*/
    var edule = new Swiper('.brand-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 20,
            },  
            576: {
                slidesPerView: 3,
            },  
            768: {
                slidesPerView: 4,
            },            
            992: {
                slidesPerView: 5,
                spaceBetween: 45,
            },            
            1200: {
                slidesPerView: 5,
                spaceBetween: 85,
            }
        },
        autoplay: {
            delay: 8000,
        },
    });


    /*--
        Reviews
    -----------------------------------*/
    var edule = new Swiper('.reviews-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,
        loop: true,  
        pagination: {
            el: '.reviews-active .swiper-pagination',
            clickable: true,
        },      
        autoplay: {
            delay: 8000,
        },
    });


    /*--
        Student's
    -----------------------------------*/
    var edule = new Swiper('.students-active .swiper-container', {
        speed: 600,
        spaceBetween: 30,        
        navigation: {
            nextEl: '.students-active .swiper-button-next',
            prevEl: '.students-active .swiper-button-prev',
        },       
        breakpoints: {
            0: {
                slidesPerView: 1,
            },  
            768: {
                slidesPerView: 2,
            },
            1600: {
                slidesPerView: 3,
            }
        },
    });


    /*--
		Rating Script
	-----------------------------------*/

	$("#rating li").on('mouseover', function(){
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.add('hover')
			} else {
				child.classList.remove('hover')
			}
		})
	})

	$("#rating").on('mouseleave', function(){
		var child = $(this).find('li.star i');
		Array.from(child, function(item){
			item.classList.remove('hover');
		})
	})

	
	$('#rating li').on('click', function(e) {
		var onStar = parseInt($(this).data('value'), 10);
		var siblings = $(this).parent().children('li.star');
		Array.from(siblings, function(item){
			var value = item.dataset.value;
			var child = item.firstChild;
			if(value <= onStar){
				child.classList.remove('hover', 'fa-star-o');
				child.classList.add('star')
			} else {
				child.classList.remove('star');
				child.classList.add('fa-star-o')
			}
		})
	}) 


    /*--
		Video Active
	-----------------------------------*/
    $('.video-playlist .link').on('click', function (event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /*--
        Nice Select
	-----------------------------------*/
    $('select').niceSelect();


    /*--
		Back to top Script
	-----------------------------------*/
    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
    event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    
})(jQuery);




  
