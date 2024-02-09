let showBtn = $('#open-menu');
let hideBtn = $('#close-menu');

showBtn.on('click', () => {
    showBtn.hide();
    hideBtn.show();
})

hideBtn.on('click', () => {
    showBtn.show();
    hideBtn.hide();
})