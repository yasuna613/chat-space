$(function(){
  function buildPost(message){
    var image = message.image.url? `<img class="message__bottom__image" src="${message.image.url}">`: "";
    var html = `<div class="message__box">
                  <div class="message__top">
                    <p class="message__top__user">
                      ${message.name}
                    </p>
                    <p class="message__top__created-at">
                      ${message.created_at}
                    </p>
                  </div>
                  <div class="message__bottom">
                    <p class="message__bottom__text">
                      ${message.text}
                    </p>
                    ${image}
                  </div>
                </div>`
               
    return html;
  }
  $("#new_message").on('submit',function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      type: 'POST',
      url: url,
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildPost(message);
      $('.message').append(html);
      $('.form__box__message__text').val('');
      $('.form__box__send__btn').attr('disabled', false);
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('エラー');
    });

  });
});