$(document).on('turbolinks:load', function() {
  var userList = $("#user-search-result");
  var addList = $("#user-add-list");

// 検索結果の表示
  function appendUser(user){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">
                    ${user.name}
                  </p>
                  <p class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">
                    追加
                  </p>
                </div>`
    userList.append(html);
  };

// ユーザー名が見つからないとき
  function appendErrMsg(msg){
    var html = `<div class='chat-group-user clearfix'>
                  ${ msg }
                </div>`
    userList.append(html);
  }

// ユーザーが追加されたとき
  function deleteUser(id, name){
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>
                    ${name}
                  </p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>
                    削除
                  </div>
                </div>`
    addList.append(html);
  };

// 検索
  $("#user-search-field").on("keyup", function(){
    var select = $(this).val();
    console.log(select);
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: select},
      dataType: 'json'
    })
    .done(function(select_user){
      $("#user-search-result").empty();
      if (select_user.length !== 0 && select.length !== 0){
        select_user.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        appendErrMsg('一致するユーザーはいません')
      }
    })
    .fail(function(){
      alert('ユーザー検索に失敗しました');
    });
  });

  $("#user-search-result").on('click', '.user-search-add', function(){
    var userId = $(this).data('user-id');
    var userName = $(this).data('user-name');
    $(this).parent().remove();
    deleteUser(userId, userName);
  });

  $("#user-add-list").on('click','.user-search-remove',function(){
    $(this).parent().remove();
  });

});