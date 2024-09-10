
// ------ Menu icon -------
$('.icon-click').on('click', function(){
    $('.icons').toggleClass('icons-active')
    $('.nav').toggleClass('nav-active')
    $('.icon-button').toggleClass('icon-button-active')
    if($('.services').hasClass('services-active')){
        $('.services').removeClass('services-active')
        $('.li-services div i').removeClass('icon-active')
    }
    if ($('.portfolio').hasClass('portfolio-active')){
        $('.portfolio').removeClass('portfolio-active')
        $('.li-portfolio div i').removeClass('icon-active')
    }
})

// ------ Services click -------
$('.li-services div').on('click', function(){
    $('.services').toggleClass('services-active')
    $('.li-services div i').toggleClass('icon-active')
})

// ------ Portfolio click -------
$('.li-portfolio div').on('click', function(){
    $('.portfolio').toggleClass('portfolio-active')
    $('.li-portfolio div i').toggleClass('icon-active')
})