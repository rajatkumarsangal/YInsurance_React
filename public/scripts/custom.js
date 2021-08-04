jQuery(document).ready(function ($) {
    $(window).load(function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    });
});
$(window).scroll(function () {
    if ($(this).scrollTop() >= $('.why_us').position().top && $('.why_us, .playground').is(':visible')) {
        if ($(window).width() >= 992) {
            // $('.pol').slideDown("fast");
        }
		
		else {
			
            // $('.pol-icon').slideDown("fast");
            // $('.pol-icon').find("p i").removeClass('fa-minus');
            // $('.pol-icon').find("p i").addClass('fa-plus');

}
    } else {
        if ($(window).width() >= 992) {
            // $('.policies_drop_section').slideUp("fast");			
        } else {
            // $('.pol-icon').slideUp("fast");
            // $('.policies_drop_section').slideUp("fast");
        }
    }

    if ($(this).scrollTop() >= $('footer').position().top - 250 && $(window).width() <= 1599) {
        $('.why_us,.playground').slideDown("slow");
		
    }
    if ($(this).scrollTop() >= $('footer').position().top - 350 && $(window).width() >= 1600) {
        $('.why_us,.playground').slideDown("slow");

    }
    if ($('.why_us,.playground').is(':visible')) {
        if ($(this).scrollTop() >= $('footer').position().top - 550 && $(window).width() <= 1599) {
            $('.knowledge').slideDown("slow");
			
        }
        if ($(this).scrollTop() >= $('footer').position().top - 350 && $(window).width() >= 1600) {
            $('.knowledge').slideDown("slow");
        }
    }	
    if ($('.knowledge').is(':visible')) {
        if ($(this).scrollTop() >= $('footer').position().top - 250 && $(window).width() <= 1599) {
            $('.instant_call_back').slideDown("slow");
        }
        if ($(this).scrollTop() >= $('footer').position().top - 320 && $(window).width() >= 1600) {
            $('.instant_call_back').slideDown("slow");
        }
    }
    if ($('.instant_call_back').is(':visible')) {
        if ($(this).scrollTop() >= $('footer').position().top - 260 && $(window).width() <= 1599) {
            $('.newsletter_section').slideDown("slow");
        }
        if ($(this).scrollTop() >= $('footer').position().top - 360 && $(window).width() >= 1600) {
            $('.newsletter_section').slideDown("slow");
        }
    }
    if ($('.newsletter_section').is(':visible')) {
        if ($(this).scrollTop() >= $('footer').position().top - 230 && $(window).width() <= 1599) {
            $('.testimonials').slideDown("slow");
        }
        if ($(this).scrollTop() >= $('footer').position().top - 330 && $(window).width() >= 1600) {
            $('.testimonials').slideDown("slow");
        }
    }
    if ($('.testimonials').is(':visible')) {
        if ($(this).scrollTop() >= $('footer').position().top - 320 && $(window).width() <= 1599) {
            $('.our_partners, .tabs').slideDown("slow");
        }
        if ($(this).scrollTop() >= $('footer').position().top - 420 && $(window).width() >= 1600) {
            $('.our_partners, .tabs').slideDown("slow");
        }
    }
    $('.car_one').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass("adding_animation_class_one");
        }
    });
    $('.car_two').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 300) {
            $(this).addClass("adding_animation_class_two");
        }
    });
    $('.car_three').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("adding_animation_class_three");
        }
    });
    $('.left_play').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("fadeInLeft_one");
        }
    });
    $('.right_play').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("fadeInLeft_two");
        }
    });
    $('.bottom_play').each(function () {
        var imagePos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow + 350) {
            $(this).addClass("fadeInLeft_three");
        }
    });
});

$(document).on('click', 'a.scroll', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
$(document).ready(function () {

    $("#owl-demo-customers").owlCarousel({
        items: 2, //2 items above 1000px browser width
        itemsDesktop: [1000, 2], //2 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        lazyLoad: true,
        navigation: true,
        lazyLoad: true,
        autoplay: false,
        navigationText: [
		  "<i className='left_customers fa fa-angle-left' aria-hidden='true'></i>",
		  "<i className='right_customers fa fa-angle-right' aria-hidden='true'></i>"
		  ]
    });
    $("#owl-demo-articles").owlCarousel({
        items: 1, //2 items above 1000px browser width
        itemsDesktop: [1000, 1], //2 items between 1000px and 901px
        itemsDesktopSmall: [900, 1], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
        lazyLoad: true,
        navigation: true,
        lazyLoad: true,
        autoplay: false,
        navigationText: [
		  "<i className='left_customers fa fa-angle-left' aria-hidden='true'></i>",
		  "<i className='right_customers fa fa-angle-right' aria-hidden='true'></i>"
		  ]
    });

    // APPENDING FORM-INLINE
    $(".add_family_son").click(function () {
        $(this).parent().append("<div className='form-inline'><span className='pull-right'><a className='close_it' href='javascript:void(0);>'<i className='fa fa-close'></i></a></span><label>Son</label><select className='form-control modal_select' name=''><option value='0' selected>age</option><option value='option1'>Option1</option><option value='option2'>Option2</option><option value='option3'>Option3</option></select></div>");
    });
    $(".add_family_daughter").click(function () {
        $(this).parent().append("<div className='form-inline close_it'><label>Daughter</label><select className='form-control modal_select' name=''><option value='0' selected>age</option><option value='option1'>Option1</option><option value='option2'>Option2</option><option value='option3'>Option3</option></select></div>");
    });

    $(".close_it").click(function () {
        $(this).hide();
    });
    // Triggering Animations
    $('.section').hover(function () {
        $(this).fadeIn('slow');
    });
    $('.first_block').hover(function () {
        $(this).find('.top_left').toggleClass('anime_top_left');
    });
    $('.second_block').hover(function () {
        $(this).find('.top_right').toggleClass('anime_top_right');
    });
    $('.third_block').hover(function () {
        $(this).find('.top_left, .bottom_left').toggleClass('anime_top_left');
    });
    $('.fourth_block').hover(function () {
        $(this).find('.left_top').toggleClass('anime_left_top');
    });
    $('.fifth_block').hover(function () {
        $(this).find('.top_left').toggleClass('anime_top_left');
    });
    $('.six_block').hover(function () {
        $(this).find('.left_top').toggleClass('anime_left_top');
    });    
	$('.seven_block').hover(function () {
        $(this).find('.left_top').toggleClass('anime_left_top');
    });
	$('.eight_block').hover(function () {
        $(this).find('.left_top').toggleClass('anime_left_top');
    });
	$('.nine_block').hover(function () {
        $(this).find('.right_bottom').toggleClass('anime_right_bottom');
    });
	$('.ten_block').hover(function () {
        $(this).find('.right_bottom').toggleClass('anime_right_bottom');
    });
	$('.eleven_block').hover(function () {
        $(this).find('.right_bottom').toggleClass('anime_right_bottom');
    });
	$('.twelve_block').hover(function () {
        $(this).find('.bottom_left').toggleClass('anime_bottom_left');
    });
	$('.thirteen_block').hover(function () {
        $(this).find('.bottom_right').toggleClass('anime_bottom_right');
    });

    // triggering hamburger icon
    $('.nav-icon').click(function () {
        $(this).toggleClass('open');
        if ($('.center_area').is(":visible")) {
            $('.center_area').hide('fast');
        }
        $('.navigation ul').slideToggle('slow');
    });

    // triggering hamburger icon
    $('.lang-icon').click(function () {
        if ($(this).find("p i").hasClass('fa-plus')) {
            $(this).find("p i").removeClass('fa-plus');
            $(this).find("p i").addClass('fa-minus');
        }
        else {
            $(this).find("p i").addClass('fa-plus');
            $(this).find("p i").removeClass('fa-minus');
        }
        if ($('.navigation ul').is(":visible")) {
            $('.navigation ul').hide('fast');
        }
        $('.center_area').slideToggle('slow');
    });
    $('.pol-icon').click(function () {
        if ($(this).find("p i").hasClass('fa-plus')) {
            $(this).find("p i").removeClass('fa-plus');
            $(this).find("p i").addClass('fa-minus');
        }
        else {
            $(this).find("p i").addClass('fa-plus');
            $(this).find("p i").removeClass('fa-minus');
        }
        if ($('.navigation ul, .center_area').is(":visible")) {
            $('.navigation ul, .center_area').hide('fast');
        }
        // $('.policies_drop_section ').slideToggle('fast');
    });

    // triggering owl carousel partners
    var owl = $("#owl-demo");
    owl.owlCarousel({
        center: true,
        items: 10, //10 items above 1000px browser width
        itemsDesktop: [1000, 6], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        stopOnHover: true,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });
    // triggering owl carousel testimonials
    var owl = $("#owl-demo-testimonials");
    owl.owlCarousel({
        center: true,
        items: 3, //10 items above 1000px browser width
        itemsDesktop: [1000, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        stopOnHover: true,
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
    });

    // Article Carousel
    owl.trigger('owl.play', 2500); //owl.play event accept autoPlay speed as second parameter	
    $("#owl-demo-article").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        stopOnHover: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    // Custom Navigation Events
    $(".next").click(function () {
        $("#owl-demo-article").trigger('owl.next');
    })
    $(".prev").click(function () {
        $("#owl-demo-article").trigger('owl.prev');
    })

    // Video Carousel
    $("#owl-demo-video").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds
        items: 3,
        stopOnHover: true,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3]
    });
    // Custom Navigation Events for Video
    $(".nextv").click(function () {
        $("#owl-demo-video").trigger('owl.next');
    })
    $(".prevv").click(function () {
        $("#owl-demo-video").trigger('owl.prev');
    })

    // Check-parent Carousel
    $("#owl-demo-check-parent").owlCarousel({
        autoPlay: false,
        singleItem: true,
        touchDrag: false,
        autoHeight: true,
        mouseDrag: false,
        // disabling next and previous buttons and get quotes
        afterAction: function (e) {

            if (this.itemsAmount > this.visibleItems.length) {
                $('.submit_button').addClass('invisible');
                if (this.currentItem == 0) {
                    $('.nextp').show();
                    $('.prevp').hide();
                    $('.submit_button').addClass('invisible');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.nextp').hide();
                    $('.prevp').show();
                    $('.submit_button').removeClass('invisible');
                }
            } else {
                $('.nextp').hide();
                $('.prevp').hide();
                $('.submit_button').addClass('invisible');
            }
        }
    });
    $("#owl-demo-check-parent-2").owlCarousel({
        autoPlay: false,
        touchDrag: false,
        singleItem: true,
        autoHeight: true,
        mouseDrag: false,
        // disabling next and previous buttons and get quotes
        afterAction: function (e) {

            if (this.itemsAmount > this.visibleItems.length) {
                $('.submit_button').addClass('invisible');
                $('.nextp2').show();
                $('.prevp2').show();
                if (this.currentItem == 0) {
                    $('.nextp2').show();
                    $('.prevp2').hide();
                    $('.submit_button').addClass('invisible');
                }
                if (this.currentItem == this.maximumItem) {
                    $('.nextp2').hide();
                    $('.prevp2').show();
                    $('.submit_button').removeClass('invisible');
                }
            } else {
                $('.nextp2').hide();
                $('.prevp2').hide();
                $('.submit_button').addClass('invisible');
            }
        }
    });
    // Custom Navigation Events and validating the form
    // validating on next button
    $(".nextp").click(function () {
        if ($(".form-control, .input__field").val() == "" || $("select[name=option]").val() == 0 || $("select[name=option2]").val() == 0) {
            if ($('.form-r').val() == "") {
                $(".helper_r").addClass("visible");
            }
            if ($('.form-r').val() == "") {
                $(".helper_rr").addClass("visible");
            }
            if ($("select[name=option]").val() == 0) {
                $(".helper_o").addClass("visible");
            }
            if ($("select[name=option2]").val() == 0) {
                $(".helper_o2").addClass("visible");
            }

        } else {
            $(".helper_r").removeClass("visible");
            if ($("select[name=option], select[name=option2]").val() != 0) {
                $("#owl-demo-check-parent").trigger("owl.next");
            }
        }
    });
    $(".nextp2").click(function () {
        if ($(".form-control, .input__field").val() == "") {
            if ($('.form-r').val() == "") {
                $(".helper_r").addClass("visible");
            }
            if ($("select[name=option]").val() == 0) {
                $(".helper_o").addClass("visible");
            }
            if ($("select[name=option2]").val() == 0) {
                $(".helper_o2").addClass("visible");
            }

        } else {
            $(".helper_r").removeClass("visible");
            if ($("select[name=option], select[name=option2]").val() != 0) {
                $("#owl-demo-check-parent-2").trigger("owl.next");
            }
        }
    });

    $(".form-control, input[name=optradio]").change(function () {
        if ($(this).val() == "" || $(this).val() == 0) {
            $(this).next().addClass("visible");
            $(this).removeClass("opaqueit");
        } else {
            $(this).next().removeClass("visible");
            $(this).addClass("opaqueit");
        }
        if ($('input[name=optradio]:checked').length > 0) {
            $(".helper_c").removeClass("visible");
        }
    });
    // validating on submit
    $(".submit_button").click(function (e) {
        if ($("input[placeholder=enter]").val() == "" || $("input[placeholder=id]").val() == "" || $("input[placeholder=number]").val() == "") {
            e.preventDefault();
            if ($("input[placeholder=enter]").val() == "") {
                $(".helper_i").addClass("visible");
            }
            if ($("input[placeholder=number]").val() == "") {
                $(".helper_j").addClass("visible");
            }
            if ($("input[placeholder=id]").val() == "") {
                $(".helper_k").addClass("visible");
            }
        } else {
            $(".helper_i, .helper_j, .helper_k").removeClass("visible");
        }
    });
    $("input[placeholder=enter]").change(function () {
        if ($(this).val() == "") {
            $(this).next().addClass("visible");
        } else {
            $(this).next().removeClass("visible");
        }
    });

    $(".prevp").click(function () {
        $("#owl-demo-check-parent").trigger("owl.prev");
    });
    $(".prevp2, .b_d").click(function () {
        $("#owl-demo-check-parent-2").trigger("owl.prev");
    });

    // Check Carousel
    $("#owl-demo-check").owlCarousel({
        autoPlay: false,
        items: 4,
        center: false,
        itemsDesktop: [1000, 4], //4 items between 1000px and 901px
        itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        itemsTablet: [600, 2], //2 items between 600 and 0
        itemsMobile: [360, 1],
        navigation: true,
        navigationText: [
				"<i className='fa fa-angle-left prevc' aria-hidden='true'></i>",
				"<i className='fa fa-angle-right nextc' aria-hidden='true'></i>"
		  ]
    });

    //  Addition cover toggle check boxes
    $(".add_cover .cover_acc li").click(function () {
        if ($(this).find('.fa_circle').hasClass('fa-circle-o')) {
            $(this).find('.fa_circle').removeClass('fa-circle-o');
            $(this).find('.fa_circle').addClass('fa-check-circle-o');
        }
        else {
            $(this).find('.fa_circle').removeClass('fa-check-circle-o');
            $(this).find('.fa_circle').addClass('fa-circle-o');
        }
    });

    // Triggering Compare blocks
    $('.logo_clickable').click(function () {
        $(this).next().toggleClass('logo_clicked');
        if ($('.compare_block').hasClass('selected_block')) {
            $('.compare_button').show();
        }
        else {
            $('.compare_button').hide();
        }
        $(this).closest('.compare_block').toggleClass('selected_block');
        $(this).closest('.compare_block').find('.rupee_color').toggleClass('selected_text');
    });
    $('.compare_button a').click(function (e) {
        e.preventDefault();
        $('.compare_button').hide();
        $('.compare_block').removeClass('selected_block');
        $('.logo_clickable').next().removeClass('logo_clicked');
    });

    // Triggering Plus and Minus FAQ
	
   $('.box1 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-1_plus").hide();
            $("icon-1_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-1_plus").hide();
        }

    });

    $('.box1 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-1_minus").hide();
            $(".icon-1_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-1_minus").hide();
        }

    });	
   $('.box2 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-2_plus").hide();
            $("icon-2_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-2_plus").hide();
        }

    });

    $('.box2 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-2_minus").hide();
            $(".icon-2_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-2_minus").hide();
        }

    });	  $('.box3 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-3_plus").hide();
            $("icon-3_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-3_plus").hide();
        }

    });

    $('.box3 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-3_minus").hide();
            $(".icon-3_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-3_minus").hide();
        }

    });	  $('.box4 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-4_plus").hide();
            $("icon-4_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-4_plus").hide();
        }

    });

    $('.box4 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-4_minus").hide();
            $(".icon-4_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-4_minus").hide();
        }

    });	  $('.box5 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-5_plus").hide();
            $("icon-5_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-5_plus").hide();
        }

    });

    $('.box5 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-5_minus").hide();
            $(".icon-5_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-5_minus").hide();
        }

    });	  $('.box6 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-6_plus").hide();
            $("icon-6_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-6_plus").hide();
        }

    });

    $('.box6 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-6_minus").hide();
            $(".icon-6_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-6_minus").hide();
        }

    });	  $('.box7 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-7_plus").hide();
            $("icon-7_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-7_plus").hide();
        }

    });

    $('.box7 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-7_minus").hide();
            $(".icon-7_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-7_minus").hide();
        }

    });	  $('.box8 .icon_toggle').click(function(){   
   if($(this).attr("aria-expanded")=="true"){
            $("icon-8_plus").hide();
            $("icon-8_plus").show();
        }
        if($(this).attr("aria-expanded")=="false"){
            $("icon-8_plus").hide();
        }

    });

    $('.box8 .icon_toggle').click(function(){
        if($(this).attr("aria-expanded")=="false"){
            $(".icon-8_minus").hide();
            $(".icon-8_minus").show();
        }
        if($(this).attr("aria-expanded")=="true"){
            $(".icon-8_minus").hide();
        }

    });	  
	
	});	
