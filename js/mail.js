// Send Mail Ajax

$(function() {
    $('.form').submit(function(e) {
      var $form = $(this);
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize()
      }).done(function() {
        console.log('success');
        $(".overflow").addClass("overflow_visible");
        setTimeout(function() {$(".overflow").css({"opacity":"1"})}, 100);
        setTimeout(function() {$(".overflow").css({"opacity":"0"})}, 3500);
        setTimeout(function() {$(".overflow").removeClass("overflow_visible")}, 5000);
      }).fail(function() {
        console.log('fail');
      });
      //отмена действия по умолчанию для кнопки submit
      e.preventDefault(); 
    });
});