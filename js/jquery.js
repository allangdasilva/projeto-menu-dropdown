$(window).on('load', function(){

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

    // ------ Visible Hidden -------
    let alternate=()=>{
        if($('#txt-01').hasClass('is-visible')){
            $('#txt-01').removeClass('is-visible').addClass('is-hidden')
            $('#txt-02').removeClass('is-hidden').addClass('is-visible')
        }else if ($('#txt-02').hasClass('is-visible')){
            $('#txt-01').removeClass('is-hidden').addClass('is-visible')
            $('#txt-02').removeClass('is-visible').addClass('is-hidden')
        }
    }
    setInterval(() => {
        alternate()
    }, 4000);
    
})
