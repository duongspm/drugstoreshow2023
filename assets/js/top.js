$('.navTab li[id^="nav"]').on('click', function() {
    $('[id^="tab"]').hide();
    $('#tab' + this.id.slice(3)).show();
    $(this).addClass('active');
    $('.navTab li').not(this).removeClass('active');
});