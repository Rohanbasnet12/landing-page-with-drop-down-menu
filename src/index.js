let showBtn = $('#open-menu');
let hideBtn = $('#close-menu');

showBtn.on('click', () => {
    showBtn.hide();
    hideBtn.show();
    $('#sideBarMenu').addClass('show-sideBar');
    $('.ham-list').css('display', 'block');
})

hideBtn.on('click', () => {
    showBtn.show();
    hideBtn.hide();
    $('#sideBarMenu').removeClass('show-sideBar');
    $('.ham-list').css('display', 'none');
})