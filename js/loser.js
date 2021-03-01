$(document).ready(function () {
    $('.drop-menu, .writing').click(function (event) {
        event.preventDefault()
    })

    //---------------------------------for drop-menu--------------------------------------
    $('.drop-menu').click(function (event) {
        $('.drop-menu').toggleClass('active');
        $('.drop-content').stop().slideToggle();
    })
    //-----------------------------------------------------------------------------------------
    //-------------------some animation when changing pages---------------
    //Home page//
    $('.main').addClass('goin');
    //only for menu since it's special
    $('.menu').toggleClass('show');
    $('.back a').click(function (event) {
        event.preventDefault();
        history.go(-1);

    })

    //writing-notes page//
    //$('.notes').click(function (event) {
    //    $('.main, .main2').slideUp('slow');
    //    $('.main3').show('slow');
    //    $('.drop-content').slideUp('slow');
    //    $('.drop-menu').removeClass('active');
    //})
    //-----------------------------------------------------------------------------------------

    //----------------------------for email contact-----------------------------------
    $('.contact').click(function (event) {
        $('.contact').attr('href', 'mailto:metalraccoon@gmail.com');
        $('.drop-content').slideUp("slow");
        $('.drop-menu').removeClass('active');
    })




	//for both menu and .right div//
	$(".menu a:contains('Home')").addClass("fas fa-home");
	$(".menu a:contains('About')").addClass("far fa-comment-dots");
    $(".menu a:contains('Writing')").addClass("fas fa-pen-nib");
    $(".menu a:contains('Contact')").addClass("fas fa-envelope");
    $(".menu a:contains('Translate'), .right span:contains('Translating')").addClass("fas fa-language");
    $(".right span:contains('Learning'), .menu li a:contains('Notes')").addClass("fas fa-book-open");
    $(".right span:contains('Movie'), .menu li a:contains('Movie')").addClass("fas fa-film");
    $(".right span:contains('Game'), .menu  li a:contains('Game')").addClass("fas fa-gamepad");
    $(".right span:contains('Working')").addClass("fas fa-stream");

    //just for fun//
    $('.typing').html('<p>�︹���\�Ф@�Ӧ��b�x�����ּ֪��v�A���b�V�O��¾�A�ؼЬO��b����a��u�@QQ</p>')
    $('.typing ').animate({ 'width': '100%' }, 2500);

    //swiper//
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        //navigation: {
        //    nextEl: '.swiper-button-next',
        //    prevEl: '.swiper-button-prev',
        //},

      
    })
});
