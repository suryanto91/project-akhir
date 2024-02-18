//Slider Menu
new Splide( '.splide', {
    type: 'loop',
    perPage: 4,
    autoplay: false,
    interval: 5000,
    breakpoints: {
        768: {
            perPage: 2,
        },
        480: {
            perPage: 1,
        },
    },
}).mount();

//SHOW HIDE MENU
$('#btnToggle').click(function(){
    $('.list-menu-wrap').toggle()
    if($(this).html() == '<i class="bi bi-list"></i>'){
        (this).html('<i class="bi bi-x-lg"></i>')
    }else{
        $(this).html('S<i class="bi bi-list"></i>')
    }
})
