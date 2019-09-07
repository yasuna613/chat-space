$(document).on('turbolinks:load', function() {
  function buildPost(message){
    var image = message.image.url? `<img class="message__bottom__image" src="${message.image.url}">`: "";
    var html = `<div class="message__box" data-message-id="${message.id}">
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
      $('.form__box__send__btn').attr('disabled', false);
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
    })
    .fail(function(){
      alert('エラー');
    });

  });

  var reloadMessages = function() {
    last_message_id = $('.message__box:last').data('message-id')
    $.ajax({
      url: 'api/messages',
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      messages.forEach(function(message){
        insertHTML = buildPost(message);
        $('.message').append(insertHTML);
      });
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast');
    })
    .fail(function() {
      alert('error');
    });
  };

  if (document.URL.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 5000);
  }
});