
// ------ Menu icon -------
$('.icon-click').on('click', function(){
    $('.icons').toggleClass('icons-active')
    $('.nav').toggleClass('nav-active')
    $('.icon-button').toggleClass('icon-button-active')
})

// ------ Services click -------
$('.li-services').on('click', function(){
    $('.services').toggleClass('services-active')
})

// ------ Portfolio click -------
$('.li-portfolio').on('click', function(){
    $('.portfolio').toggleClass('portfolio-active')
})