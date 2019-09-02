$(function(){
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
                </div>`Last login: Sat Aug 24 15:54:19 on ttys000
yasuna-2:chat-space yasuna$ source ~/.bashrc
~/project/chat-space $ bundle exec rspec spec/controllers/messages_controller_spec.rb

MessagesController
  #index
    log in
      assigns @message
      assigns @group
      redners index
    not log in
      redirects to new_user_session_path
  #create
    log in
      can save
        count up message
        redirects to group_messages_path
      can not save
        does not count up
        renders index
    not log in
      redirects to new_user_session_path

Finished in 1.64 seconds (files took 4.44 seconds to load)
9 examples, 0 failures

~/project/chat-space $ bundle exec rspec

MessagesController
  #index
    log in
      assigns @message
      assigns @group
      redners index
    not log in
      redirects to new_user_session_path
  #create
    log in
      can save
        count up message
        redirects to group_messages_path
      can not save
        does not count up
        renders index
    not log in
      redirects to new_user_session_path

Message
  #create
    can save
      is valid with content
      is valid with image (FAILED - 1)
      is valid with content and image
    can not save
      is invalid without content and image (FAILED - 2)
      is invalid without group_id
      is invaid without user_id

Failures:

  1) Message#create can save is valid with image
     Failure/Error: expect(build(:message, content: nil)).to be_valid
     
     NoMethodError:
       undefined method `content=' for #<Message:0x00007fdb2a147708>
     # ./spec/models/message_spec.rb:11:in `block (4 levels) in <top (required)>'

  2) Message#create can not save is invalid without content and image
     Failure/Error: message = build(:message, content: nil, image: nil)
     
     NoMethodError:
       undefined method `content=' for #<Message:0x00007fdb2ab26e90>
     # ./spec/models/message_spec.rb:21:in `block (4 levels) in <top (required)>'

Finished in 1.82 seconds (files took 2.76 seconds to load)
15 examples, 2 failures

Failed examples:

rspec ./spec/models/message_spec.rb:10 # Message#create can save is valid with image
rspec ./spec/models/message_spec.rb:20 # Message#create can not save is invalid without content and image

~/project/chat-space $ bundle exec rspec

MessagesController
  #index
    log in
      assigns @message
      assigns @group
      redners index
    not log in
      redirects to new_user_session_path
  #create
    log in
      can save
        count up message
        redirects to group_messages_path
      can not save
        does not count up
        renders index
    not log in
      redirects to new_user_session_path

Message
  #create
    can save
      is valid with text
      is valid with image
      is valid with text and image
    can not save
      is invalid without text and image
      is invalid without group_id
      is invaid without user_id

Finished in 1.61 seconds (files took 2.43 seconds to load)
15 examples, 0 failures

~/project/chat-space $ git commit --allow-empty -m "first commit"
[asynchronous 7814b03] first commit
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                          Controller#Action
        new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
            user_session POST   /users/sign_in(.:format)             devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)        devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
           user_password PATCH  /users/password(.:format)            devise/passwords#update
                         PUT    /users/password(.:format)            devise/passwords#update
                         POST   /users/password(.:format)            devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
       user_registration PATCH  /users(.:format)                     devise/registrations#update
                         PUT    /users(.:format)                     devise/registrations#update
                         DELETE /users(.:format)                     devise/registrations#destroy
                         POST   /users(.:format)                     devise/registrations#create
                    root GET    /                                    groups#index
               edit_user GET    /user/edit(.:format)                 users#edit
                    user PATCH  /user(.:format)                      users#update
                         PUT    /user(.:format)                      users#update
          group_messages GET    /groups/:group_id/messages(.:format) messages#index
                         POST   /groups/:group_id/messages(.:format) messages#create
                  groups POST   /groups(.:format)                    groups#create
               new_group GET    /groups/new(.:format)                groups#new
              edit_group GET    /groups/:id/edit(.:format)           groups#edit
                   group PATCH  /groups/:id(.:format)                groups#update
                         PUT    /groups/:id(.:format)                groups#update
~/project/chat-space $ rails ver
rails aborted!
Don't know how to build task 'ver' (See the list of available tasks with `rails --tasks`)
/Users/yasuna/project/chat-space/bin/rails:9:in `require'
/Users/yasuna/project/chat-space/bin/rails:9:in `<top (required)>'
/Users/yasuna/project/chat-space/bin/spring:15:in `<top (required)>'
bin/rails:3:in `load'
bin/rails:3:in `<main>'
(See full trace by running task with --trace)
~/project/chat-space $ rails -v
Rails 5.0.7.2
~/project/chat-space $ rails s
=> Booting Puma
=> Rails 5.0.7.2 application starting in development on http://localhost:3000
=> Run `rails server -h` for more startup options
A server is already running. Check /Users/yasuna/project/chat-space/tmp/pids/server.pid.
Exiting
~/project/chat-space $ rails c
Running via Spring preloader in process 14374
Loading development environment (Rails 5.0.7.2)
irb: warn: can't alias context from irb_context.
irb(main):001:0> message = Message.find(152)
  Message Load (0.4ms)  SELECT  `messages`.* FROM `messages` WHERE `messages`.`id` = 152 LIMIT 1
=> #<Message id: 152, text: "", image: "20190826042257.jpg", user_id: 1, group_id: 7, created_at: "2019-08-26 04:22:57", updated_at: "2019-08-26 04:22:57">
irb(main):002:0> message
=> #<Message id: 152, text: "", image: "20190826042257.jpg", user_id: 1, group_id: 7, created_at: "2019-08-26 04:22:57", updated_at: "2019-08-26 04:22:57">
irb(main):003:0> message.image
=> #<ImageUploader:0x00007fa55e47f350 @model=#<Message id: 152, text: "", image: "20190826042257.jpg", user_id: 1, group_id: 7, created_at: "2019-08-26 04:22:57", updated_at: "2019-08-26 04:22:57">, @mounted_as=:image, @file=#<CarrierWave::SanitizedFile:0x00007fa55f4d9890 @file="/Users/yasuna/project/chat-space/public/uploads/message/image/152/20190826042257.jpg", @original_filename=nil, @content_type=nil, @content=nil>, @filename=nil, @cache_id=nil, @versions={}, @format=nil, @storage=#<CarrierWave::Storage::File:0x00007fa55e47df28 @uploader=#<ImageUploader:0x00007fa55e47f350 ...>, @cache_called=nil>>
irb(main):004:0> message.id
=> 152
irb(main):005:0> message.text
=> ""
irb(main):006:0> message.image
=> #<ImageUploader:0x00007fa55e47f350 @model=#<Message id: 152, text: "", image: "20190826042257.jpg", user_id: 1, group_id: 7, created_at: "2019-08-26 04:22:57", updated_at: "2019-08-26 04:22:57">, @mounted_as=:image, @file=#<CarrierWave::SanitizedFile:0x00007fa55f4d9890 @file="/Users/yasuna/project/chat-space/public/uploads/message/image/152/20190826042257.jpg", @original_filename=nil, @content_type=nil, @content=nil>, @filename=nil, @cache_id=nil, @versions={}, @format=nil, @storage=#<CarrierWave::Storage::File:0x00007fa55e47df28 @uploader=#<ImageUploader:0x00007fa55e47f350 ...>, @cache_called=nil>>
irb(main):007:0> quit
~/project/chat-space $ git rm --cached public/uploads/*
fatal: not removing 'public/uploads/message' recursively without -r
~/project/chat-space $ git rm --cached -r public/uploads/*
rm 'public/uploads/message/image/104/20190825065446.jpg'
rm 'public/uploads/message/image/104/thumb_20190825065446.jpg'
rm 'public/uploads/message/image/105/20190825065511.jpg'
rm 'public/uploads/message/image/105/thumb_20190825065511.jpg'
rm 'public/uploads/message/image/11/20190811072337.jpg'
rm 'public/uploads/message/image/11/thumb_20190811072337.jpg'
rm 'public/uploads/message/image/13/20190811072811.jpg'
rm 'public/uploads/message/image/13/thumb_20190811072811.jpg'
rm 'public/uploads/message/image/14/20190811072824.jpg'
rm 'public/uploads/message/image/14/thumb_20190811072824.jpg'
rm 'public/uploads/message/image/141/20190825072629.jpg'
rm 'public/uploads/message/image/141/thumb_20190825072629.jpg'
rm 'public/uploads/message/image/142/20190825072706.jpg'
rm 'public/uploads/message/image/142/thumb_20190825072706.jpg'
rm 'public/uploads/message/image/143/20190825072719.jpg'
rm 'public/uploads/message/image/143/thumb_20190825072719.jpg'
rm 'public/uploads/message/image/144/20190825095152.jpg'
rm 'public/uploads/message/image/144/thumb_20190825095152.jpg'
rm 'public/uploads/message/image/145/20190825100024.jpg'
rm 'public/uploads/message/image/145/thumb_20190825100024.jpg'
rm 'public/uploads/message/image/149/20190826042147.jpg'
rm 'public/uploads/message/image/15/20190811073030.jpg'
rm 'public/uploads/message/image/15/thumb_20190811073030.jpg'
rm 'public/uploads/message/image/150/20190826042200.jpg'
rm 'public/uploads/message/image/151/20190826042240.jpg'
rm 'public/uploads/message/image/152/20190826042257.jpg'
rm 'public/uploads/message/image/153/20190826042717.jpg'
rm 'public/uploads/message/image/154/20190826043207.jpg'
rm 'public/uploads/message/image/155/20190826043459.jpg'
rm 'public/uploads/message/image/156/20190826043546.jpg'
rm 'public/uploads/message/image/157/20190826043712.jpg'
rm 'public/uploads/message/image/16/20190811073101.jpg'
rm 'public/uploads/message/image/16/thumb_20190811073101.jpg'
rm 'public/uploads/message/image/161/20190826044839.jpg'
rm 'public/uploads/message/image/17/20190811073109.jpg'
rm 'public/uploads/message/image/17/thumb_20190811073109.jpg'
rm 'public/uploads/message/image/194/20190827123042.jpg'
rm 'public/uploads/message/image/198/20190827123234.jpg'
rm 'public/uploads/message/image/199/20190827123242.jpg'
rm 'public/uploads/message/image/208/20190827123926.jpg'
rm 'public/uploads/message/image/209/20190827123934.jpg'
rm 'public/uploads/message/image/22/20190824130622.jpg'
rm 'public/uploads/message/image/22/thumb_20190824130622.jpg'
rm 'public/uploads/message/image/229/20190827134244.jpg'
rm 'public/uploads/message/image/233/20190827134326.jpg'
rm 'public/uploads/message/image/234/20190827134350.jpg'
rm 'public/uploads/message/image/236/20190827134418.jpg'
rm 'public/uploads/message/image/237/20190827134551.jpg'
rm 'public/uploads/message/image/238/20190827134551.jpg'
rm 'public/uploads/message/image/239/20190827134551.jpg'
rm 'public/uploads/message/image/240/20190827134552.jpg'
rm 'public/uploads/message/image/241/20190827134552.jpg'
rm 'public/uploads/message/image/242/20190827134552.jpg'
rm 'public/uploads/message/image/243/20190827134552.jpg'
rm 'public/uploads/message/image/244/20190827134552.jpg'
rm 'public/uploads/message/image/245/20190827134553.jpg'
rm 'public/uploads/message/image/246/20190827134553.jpg'
rm 'public/uploads/message/image/247/20190827134554.jpg'
rm 'public/uploads/message/image/248/20190827134554.jpg'
rm 'public/uploads/message/image/249/20190827134554.jpg'
rm 'public/uploads/message/image/250/20190827134555.jpg'
rm 'public/uploads/message/image/251/20190827134555.jpg'
rm 'public/uploads/message/image/252/20190827134555.jpg'
rm 'public/uploads/message/image/253/20190827134555.jpg'
rm 'public/uploads/message/image/254/20190827134556.jpg'
rm 'public/uploads/message/image/255/20190827134623.jpg'
rm 'public/uploads/message/image/256/20190827134625.jpg'
rm 'public/uploads/message/image/257/20190827134641.jpg'
rm 'public/uploads/message/image/258/20190827134642.jpg'
rm 'public/uploads/message/image/259/20190827134643.jpg'
rm 'public/uploads/message/image/260/20190827134643.jpg'
rm 'public/uploads/message/image/263/20190827134705.jpg'
rm 'public/uploads/message/image/264/20190827134707.jpg'
rm 'public/uploads/message/image/265/20190827134712.jpg'
rm 'public/uploads/message/image/266/20190827134726.jpg'
rm 'public/uploads/message/image/268/20190827135114.jpg'
rm 'public/uploads/message/image/6/20190810105305.jpg'
rm 'public/uploads/message/image/7/20190810115655.jpg'
rm 'public/uploads/message/image/7/thumb_20190810115655.jpg'
rm 'public/uploads/message/image/72/20190825061444.jpg'
rm 'public/uploads/message/image/72/thumb_20190825061444.jpg'
rm 'public/uploads/message/image/74/20190825061533.jpg'
rm 'public/uploads/message/image/74/thumb_20190825061533.jpg'
rm 'public/uploads/message/image/92/20190825064020.jpg'
rm 'public/uploads/message/image/92/thumb_20190825064020.jpg'
rm 'public/uploads/tmp/1565434330-55986-0003-8561/灰色の猫.jpg'
rm 'public/uploads/tmp/1565438072-57226-0003-3073/neko.jpg'
rm 'public/uploads/tmp/1565438150-57359-0001-2352/neko.jpg'
rm 'public/uploads/tmp/1566298642-1996-0001-1185/test_image.jpg'
rm 'public/uploads/tmp/1566298642-1996-0001-1185/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0002-6954/test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0002-6954/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0003-7911/test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0003-7911/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0004-5024/test_image.jpg'
rm 'public/uploads/tmp/1566298643-1996-0004-5024/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0001-0922/test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0001-0922/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0002-2252/test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0002-2252/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0003-1079/test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0003-1079/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0004-7633/test_image.jpg'
rm 'public/uploads/tmp/1566309291-2268-0004-7633/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651165-8338-0001-9753/test_image.jpg'
rm 'public/uploads/tmp/1566651165-8338-0001-9753/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651165-8338-0002-0877/test_image.jpg'
rm 'public/uploads/tmp/1566651165-8338-0002-0877/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651166-8338-0003-1813/test_image.jpg'
rm 'public/uploads/tmp/1566651166-8338-0003-1813/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651166-8338-0004-1193/test_image.jpg'
rm 'public/uploads/tmp/1566651166-8338-0004-1193/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0001-9836/test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0001-9836/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0002-7870/test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0002-7870/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0003-2466/test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0003-2466/thumb_test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0004-3615/test_image.jpg'
rm 'public/uploads/tmp/1566651367-8394-0004-3615/thumb_test_image.jpg'
~/project/chat-space $ git add .gitignore
~/project/chat-space $ git commit -m "追加 file to .gitignore"
[asynchronous 35d8b00] 追加 file to .gitignore
 120 files changed, 0 insertions(+), 0 deletions(-)
 delete mode 100644 public/uploads/message/image/104/20190825065446.jpg
 delete mode 100644 public/uploads/message/image/104/thumb_20190825065446.jpg
 delete mode 100644 public/uploads/message/image/105/20190825065511.jpg
 delete mode 100644 public/uploads/message/image/105/thumb_20190825065511.jpg
 delete mode 100644 public/uploads/message/image/11/20190811072337.jpg
 delete mode 100644 public/uploads/message/image/11/thumb_20190811072337.jpg
 delete mode 100644 public/uploads/message/image/13/20190811072811.jpg
 delete mode 100644 public/uploads/message/image/13/thumb_20190811072811.jpg
 delete mode 100644 public/uploads/message/image/14/20190811072824.jpg
 delete mode 100644 public/uploads/message/image/14/thumb_20190811072824.jpg
 delete mode 100644 public/uploads/message/image/141/20190825072629.jpg
 delete mode 100644 public/uploads/message/image/141/thumb_20190825072629.jpg
 delete mode 100644 public/uploads/message/image/142/20190825072706.jpg
 delete mode 100644 public/uploads/message/image/142/thumb_20190825072706.jpg
 delete mode 100644 public/uploads/message/image/143/20190825072719.jpg
 delete mode 100644 public/uploads/message/image/143/thumb_20190825072719.jpg
 delete mode 100644 public/uploads/message/image/144/20190825095152.jpg
 delete mode 100644 public/uploads/message/image/144/thumb_20190825095152.jpg
 delete mode 100644 public/uploads/message/image/145/20190825100024.jpg
 delete mode 100644 public/uploads/message/image/145/thumb_20190825100024.jpg
 delete mode 100644 public/uploads/message/image/149/20190826042147.jpg
 delete mode 100644 public/uploads/message/image/15/20190811073030.jpg
 delete mode 100644 public/uploads/message/image/15/thumb_20190811073030.jpg
 delete mode 100644 public/uploads/message/image/150/20190826042200.jpg
 delete mode 100644 public/uploads/message/image/151/20190826042240.jpg
 delete mode 100644 public/uploads/message/image/152/20190826042257.jpg
 delete mode 100644 public/uploads/message/image/153/20190826042717.jpg
 delete mode 100644 public/uploads/message/image/154/20190826043207.jpg
 delete mode 100644 public/uploads/message/image/155/20190826043459.jpg
 delete mode 100644 public/uploads/message/image/156/20190826043546.jpg
 delete mode 100644 public/uploads/message/image/157/20190826043712.jpg
 delete mode 100644 public/uploads/message/image/16/20190811073101.jpg
 delete mode 100644 public/uploads/message/image/16/thumb_20190811073101.jpg
 delete mode 100644 public/uploads/message/image/161/20190826044839.jpg
 delete mode 100644 public/uploads/message/image/17/20190811073109.jpg
 delete mode 100644 public/uploads/message/image/17/thumb_20190811073109.jpg
 delete mode 100644 public/uploads/message/image/194/20190827123042.jpg
 delete mode 100644 public/uploads/message/image/198/20190827123234.jpg
 delete mode 100644 public/uploads/message/image/199/20190827123242.jpg
 delete mode 100644 public/uploads/message/image/208/20190827123926.jpg
 delete mode 100644 public/uploads/message/image/209/20190827123934.jpg
 delete mode 100644 public/uploads/message/image/22/20190824130622.jpg
 delete mode 100644 public/uploads/message/image/22/thumb_20190824130622.jpg
 delete mode 100644 public/uploads/message/image/229/20190827134244.jpg
 delete mode 100644 public/uploads/message/image/233/20190827134326.jpg
 delete mode 100644 public/uploads/message/image/234/20190827134350.jpg
 delete mode 100644 public/uploads/message/image/236/20190827134418.jpg
 delete mode 100644 public/uploads/message/image/237/20190827134551.jpg
 delete mode 100644 public/uploads/message/image/238/20190827134551.jpg
 delete mode 100644 public/uploads/message/image/239/20190827134551.jpg
 delete mode 100644 public/uploads/message/image/240/20190827134552.jpg
 delete mode 100644 public/uploads/message/image/241/20190827134552.jpg
 delete mode 100644 public/uploads/message/image/242/20190827134552.jpg
 delete mode 100644 public/uploads/message/image/243/20190827134552.jpg
 delete mode 100644 public/uploads/message/image/244/20190827134552.jpg
 delete mode 100644 public/uploads/message/image/245/20190827134553.jpg
 delete mode 100644 public/uploads/message/image/246/20190827134553.jpg
 delete mode 100644 public/uploads/message/image/247/20190827134554.jpg
 delete mode 100644 public/uploads/message/image/248/20190827134554.jpg
 delete mode 100644 public/uploads/message/image/249/20190827134554.jpg
 delete mode 100644 public/uploads/message/image/250/20190827134555.jpg
 delete mode 100644 public/uploads/message/image/251/20190827134555.jpg
 delete mode 100644 public/uploads/message/image/252/20190827134555.jpg
 delete mode 100644 public/uploads/message/image/253/20190827134555.jpg
 delete mode 100644 public/uploads/message/image/254/20190827134556.jpg
 delete mode 100644 public/uploads/message/image/255/20190827134623.jpg
 delete mode 100644 public/uploads/message/image/256/20190827134625.jpg
 delete mode 100644 public/uploads/message/image/257/20190827134641.jpg
 delete mode 100644 public/uploads/message/image/258/20190827134642.jpg
 delete mode 100644 public/uploads/message/image/259/20190827134643.jpg
 delete mode 100644 public/uploads/message/image/260/20190827134643.jpg
 delete mode 100644 public/uploads/message/image/263/20190827134705.jpg
 delete mode 100644 public/uploads/message/image/264/20190827134707.jpg
 delete mode 100644 public/uploads/message/image/265/20190827134712.jpg
 delete mode 100644 public/uploads/message/image/266/20190827134726.jpg
 delete mode 100644 public/uploads/message/image/268/20190827135114.jpg
 delete mode 100644 public/uploads/message/image/6/20190810105305.jpg
 delete mode 100644 public/uploads/message/image/7/20190810115655.jpg
 delete mode 100644 public/uploads/message/image/7/thumb_20190810115655.jpg
 delete mode 100644 public/uploads/message/image/72/20190825061444.jpg
 delete mode 100644 public/uploads/message/image/72/thumb_20190825061444.jpg
 delete mode 100644 public/uploads/message/image/74/20190825061533.jpg
 delete mode 100644 public/uploads/message/image/74/thumb_20190825061533.jpg
 delete mode 100644 public/uploads/message/image/92/20190825064020.jpg
 delete mode 100644 public/uploads/message/image/92/thumb_20190825064020.jpg
 delete mode 100644 "public/uploads/tmp/1565434330-55986-0003-8561/\347\201\260\350\211\262\343\201\256\347\214\253.jpg"
 delete mode 100644 public/uploads/tmp/1565438072-57226-0003-3073/neko.jpg
 delete mode 100644 public/uploads/tmp/1565438150-57359-0001-2352/neko.jpg
 delete mode 100644 public/uploads/tmp/1566298642-1996-0001-1185/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298642-1996-0001-1185/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0002-6954/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0002-6954/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0003-7911/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0003-7911/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0004-5024/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566298643-1996-0004-5024/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0001-0922/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0001-0922/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0002-2252/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0002-2252/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0003-1079/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0003-1079/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0004-7633/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566309291-2268-0004-7633/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651165-8338-0001-9753/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651165-8338-0001-9753/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651165-8338-0002-0877/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651165-8338-0002-0877/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651166-8338-0003-1813/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651166-8338-0003-1813/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651166-8338-0004-1193/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651166-8338-0004-1193/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0001-9836/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0001-9836/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0002-7870/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0002-7870/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0003-2466/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0003-2466/thumb_test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0004-3615/test_image.jpg
 delete mode 100644 public/uploads/tmp/1566651367-8394-0004-3615/thumb_test_image.jpg
~/project/chat-space $ git commit --allow-empty -m 'create pull request'
[incremental-search 1fd9491] create pull request
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                          Controller#Action
        new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
            user_session POST   /users/sign_in(.:format)             devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)        devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
           user_password PATCH  /users/password(.:format)            devise/passwords#update
                         PUT    /users/password(.:format)            devise/passwords#update
                         POST   /users/password(.:format)            devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
       user_registration PATCH  /users(.:format)                     devise/registrations#update
                         PUT    /users(.:format)                     devise/registrations#update
                         DELETE /users(.:format)                     devise/registrations#destroy
                         POST   /users(.:format)                     devise/registrations#create
                    root GET    /                                    groups#index
               edit_user GET    /user/edit(.:format)                 users#edit
                    user PATCH  /user(.:format)                      users#update
                         PUT    /user(.:format)                      users#update
          group_messages GET    /groups/:group_id/messages(.:format) messages#index
                         POST   /groups/:group_id/messages(.:format) messages#create
                  groups POST   /groups(.:format)                    groups#create
               new_group GET    /groups/new(.:format)                groups#new
              edit_group GET    /groups/:id/edit(.:format)           groups#edit
                   group PATCH  /groups/:id(.:format)                groups#update
                         PUT    /groups/:id(.:format)                groups#update
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                          Controller#Action
        new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
            user_session POST   /users/sign_in(.:format)             devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)        devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
           user_password PATCH  /users/password(.:format)            devise/passwords#update
                         PUT    /users/password(.:format)            devise/passwords#update
                         POST   /users/password(.:format)            devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
       user_registration PATCH  /users(.:format)                     devise/registrations#update
                         PUT    /users(.:format)                     devise/registrations#update
                         DELETE /users(.:format)                     devise/registrations#destroy
                         POST   /users(.:format)                     devise/registrations#create
                    root GET    /                                    groups#index
               edit_user GET    /user/edit(.:format)                 users#edit
                    user PATCH  /user(.:format)                      users#update
                         PUT    /user(.:format)                      users#update
          group_messages GET    /groups/:group_id/messages(.:format) messages#index
                         POST   /groups/:group_id/messages(.:format) messages#create
                  groups POST   /groups(.:format)                    groups#create
               new_group GET    /groups/new(.:format)                groups#new
              edit_group GET    /groups/:id/edit(.:format)           groups#edit
                   group PATCH  /groups/:id(.:format)                groups#update
                         PUT    /groups/:id(.:format)                groups#update
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                          Controller#Action
        new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
            user_session POST   /users/sign_in(.:format)             devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)        devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
           user_password PATCH  /users/password(.:format)            devise/passwords#update
                         PUT    /users/password(.:format)            devise/passwords#update
                         POST   /users/password(.:format)            devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
       user_registration PATCH  /users(.:format)                     devise/registrations#update
                         PUT    /users(.:format)                     devise/registrations#update
                         DELETE /users(.:format)                     devise/registrations#destroy
                         POST   /users(.:format)                     devise/registrations#create
                    root GET    /                                    groups#index
              edit_users GET    /users/edit(.:format)                users#edit
                   users PATCH  /users(.:format)                     users#update
                         PUT    /users(.:format)                     users#update
          group_messages GET    /groups/:group_id/messages(.:format) messages#index
                         POST   /groups/:group_id/messages(.:format) messages#create
                  groups POST   /groups(.:format)                    groups#create
               new_group GET    /groups/new(.:format)                groups#new
              edit_group GET    /groups/:id/edit(.:format)           groups#edit
                   group PATCH  /groups/:id(.:format)                groups#update
                         PUT    /groups/:id(.:format)                groups#update
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                          Controller#Action
        new_user_session GET    /users/sign_in(.:format)             devise/sessions#new
            user_session POST   /users/sign_in(.:format)             devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)            devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)        devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)       devise/passwords#edit
           user_password PATCH  /users/password(.:format)            devise/passwords#update
                         PUT    /users/password(.:format)            devise/passwords#update
                         POST   /users/password(.:format)            devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)              devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)             devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                devise/registrations#edit
       user_registration PATCH  /users(.:format)                     devise/registrations#update
                         PUT    /users(.:format)                     devise/registrations#update
                         DELETE /users(.:format)                     devise/registrations#destroy
                         POST   /users(.:format)                     devise/registrations#create
                    root GET    /                                    groups#index
                   users GET    /users(.:format)                     users#index
               edit_user GET    /users/:id/edit(.:format)            users#edit
                    user PATCH  /users/:id(.:format)                 users#update
                         PUT    /users/:id(.:format)                 users#update
          group_messages GET    /groups/:group_id/messages(.:format) messages#index
                         POST   /groups/:group_id/messages(.:format) messages#create
                  groups POST   /groups(.:format)                    groups#create
               new_group GET    /groups/new(.:format)                groups#new
              edit_group GET    /groups/:id/edit(.:format)           groups#edit
                   group PATCH  /groups/:id(.:format)                groups#update
                         PUT    /groups/:id(.:format)                groups#update
~/project/chat-space $ git commit --allow-empty -m 'create pull request'
[Automatic-updating 396fbbe] create pull request
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                              Controller#Action
        new_user_session GET    /users/sign_in(.:format)                 devise/sessions#new
            user_session POST   /users/sign_in(.:format)                 devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)                devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)            devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)           devise/passwords#edit
           user_password PATCH  /users/password(.:format)                devise/passwords#update
                         PUT    /users/password(.:format)                devise/passwords#update
                         POST   /users/password(.:format)                devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)                  devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)                 devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                    devise/registrations#edit
       user_registration PATCH  /users(.:format)                         devise/registrations#update
                         PUT    /users(.:format)                         devise/registrations#update
                         DELETE /users(.:format)                         devise/registrations#destroy
                         POST   /users(.:format)                         devise/registrations#create
                    root GET    /                                        groups#index
                   users GET    /users(.:format)                         users#index
               edit_user GET    /users/:id/edit(.:format)                users#edit
                    user PATCH  /users/:id(.:format)                     users#update
                         PUT    /users/:id(.:format)                     users#update
          group_messages GET    /groups/:group_id/messages(.:format)     messages#index
                         POST   /groups/:group_id/messages(.:format)     messages#create
      group_api_messages GET    /groups/:group_id/api/messages(.:format) api/messages#index {:format=>"json"}
                  groups POST   /groups(.:format)                        groups#create
               new_group GET    /groups/new(.:format)                    groups#new
              edit_group GET    /groups/:id/edit(.:format)               groups#edit
                   group PATCH  /groups/:id(.:format)                    groups#update
                         PUT    /groups/:id(.:format)                    groups#update
~/project/chat-space $ rails routes
                  Prefix Verb   URI Pattern                              Controller#Action
        new_user_session GET    /users/sign_in(.:format)                 devise/sessions#new
            user_session POST   /users/sign_in(.:format)                 devise/sessions#create
    destroy_user_session DELETE /users/sign_out(.:format)                devise/sessions#destroy
       new_user_password GET    /users/password/new(.:format)            devise/passwords#new
      edit_user_password GET    /users/password/edit(.:format)           devise/passwords#edit
           user_password PATCH  /users/password(.:format)                devise/passwords#update
                         PUT    /users/password(.:format)                devise/passwords#update
                         POST   /users/password(.:format)                devise/passwords#create
cancel_user_registration GET    /users/cancel(.:format)                  devise/registrations#cancel
   new_user_registration GET    /users/sign_up(.:format)                 devise/registrations#new
  edit_user_registration GET    /users/edit(.:format)                    devise/registrations#edit
       user_registration PATCH  /users(.:format)                         devise/registrations#update
                         PUT    /users(.:format)                         devise/registrations#update
                         DELETE /users(.:format)                         devise/registrations#destroy
                         POST   /users(.:format)                         devise/registrations#create
                    root GET    /                                        groups#index
                   users GET    /users(.:format)                         users#index
               edit_user GET    /users/:id/edit(.:format)                users#edit
                    user PATCH  /users/:id(.:format)                     users#update
                         PUT    /users/:id(.:format)                     users#update
          group_messages GET    /groups/:group_id/messages(.:format)     messages#index
                         POST   /groups/:group_id/messages(.:format)     messages#create
      group_api_messages GET    /groups/:group_id/api/messages(.:format) api/messages#index {:format=>"json"}
                  groups POST   /groups(.:format)                        groups#create
               new_group GET    /groups/new(.:format)                    groups#new
              edit_group GET    /groups/:id/edit(.:format)               groups#edit
                   group PATCH  /groups/:id(.:format)                    groups#update
                         PUT    /groups/:id(.:format)                    groups#update
~/project/chat-space $ cd
~ $ dig master.tech-camp.in

; <<>> DiG 9.10.6 <<>> master.tech-camp.in
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 22157
;; flags: qr rd ra; QUERY: 1, ANSWER: 3, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1400
;; QUESTION SECTION:
;master.tech-camp.in.		IN	A

;; ANSWER SECTION:
master.tech-camp.in.	60	IN	CNAME	tm-prd-lb001-2129557915.ap-northeast-1.elb.amazonaws.com.
tm-prd-lb001-2129557915.ap-northeast-1.elb.amazonaws.com. 60 IN	A 13.112.75.117
tm-prd-lb001-2129557915.ap-northeast-1.elb.amazonaws.com. 60 IN	A 54.65.135.100

;; Query time: 74 msec
;; SERVER: 210.196.3.183#53(210.196.3.183)
;; WHEN: Sun Sep 01 18:37:19 JST 2019
;; MSG SIZE  rcvd: 150

~ $ dig www.yahoo.co.jp

; <<>> DiG 9.10.6 <<>> www.yahoo.co.jp
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 55374
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 0, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; udp: 1400
;; QUESTION SECTION:
;www.yahoo.co.jp.		IN	A

;; ANSWER SECTION:
www.yahoo.co.jp.	838	IN	CNAME	edge12.g.yimg.jp.
edge12.g.yimg.jp.	3	IN	A	182.22.25.252

;; Query time: 58 msec
;; SERVER: 210.196.3.183#53(210.196.3.183)
;; WHEN: Sun Sep 01 18:59:07 JST 2019
;; MSG SIZE  rcvd: 88

~ $ telnet 182.22.72.252 80
-bash: telnet: command not found
~ $ telnet 182.22.25.252 80
-bash: telnet: command not found
~ $ brew install telnet
Updating Homebrew...
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
cpu_features       now-cli            octant             pokerstove         zrepl
kubebuilder        nushell            pdftk-java         protobuf@3.7
==> Updated Formulae
git ✔                                            md5sha1sum
imagemagick@6 ✔                                  mdds
libheif ✔                                        memcached
libomp ✔                                         mesa
ruby-build ✔                                     mfterm
abcmidi                                          minio
abyss                                            minio-mc
activemq-cpp                                     miniserve
afflib                                           mit-scheme
aircrack-ng                                      mkcert
algernon                                         mktorrent
aliyun-cli                                       mkvtoolnix
alpine                                           mmark
amap                                             mmseqs2
amqp-cpp                                         monetdb
angband                                          mongoose
angular-cli                                      monit
annie                                            monitoring-plugins
ansible                                          mosh
ansiweather                                      mosquitto
apache-arrow                                     mpg123
apache-flink                                     mrboom
apache-spark                                     mupdf
apib                                             mycli
arangodb                                         mysql
armadillo                                        mysql@5.7
arpack                                           n
arping                                           nagios
asdf                                             nagios-plugins
asio                                             nano
astrometry-net                                   nativefier
avfs                                             nats-server
aws-sdk-cpp                                      nats-streaming-server
awscli                                           ncrack
axel                                             net-snmp
azure-cli                                        netlify-cli
azure-storage-cpp                                newman
bacula-fd                                        newsboat
balena-cli                                       nfdump
bareos-client                                    nghttp2
bash                                             nginx
bat                                              ngircd
bazel                                            nmap
bbftp-client                                     nmh
benthos                                          node
bibtexconv                                       node@10
bigloo                                           node@8
binaryen                                         nomad
bind                                             nopoll
bit                                              nordugrid-arc
bitrise                                          nrpe
bitwise                                          nsd
blueutil                                         nspr
botan                                            nss
bro                                              ntp
btfs                                             numpy
btpd                                             nwchem
buildkit                                         nzbget
burp                                             ocaml
cabal-install                                    ocaml-findlib
caddy                                            ocaml-num
caf                                              ocamlbuild
caffe                                            ocamlsdl
calicoctl                                        ocrmypdf
camlp4                                           octave
camlp5                                           opa
cargo-completion                                 openapi-generator
ccache                                           openblas
ceres-solver                                     opencolorio
cfn-lint                                         openconnect
cgdb                                             opencv
cgrep                                            opencv@2
chakra                                           opencv@3
chronograf                                       openfortivpn
cimg                                             openrct2
circleci                                         opensc
citus                                            openssh
ckan                                             ophcrack
clamav                                           packer
clingo                                           packer-completion
clojure                                          pagmo
cockroach                                        paket
collectd                                         pandoc-citeproc
conan                                            pango
consul                                           parallel
contentful-cli                                   passenger
convox                                           pdfcrack
cpl                                              pdftoipe
cpprestsdk                                       pdns
credstash                                        pdnsrec
cromwell                                         petsc
crowdin                                          petsc-complex
crystal                                          pev
cubelib                                          pgroonga
davix                                            php
dcmtk                                            php@7.1
deno                                             php@7.2
devspace                                         phpstan
dhall-bash                                       phpunit
diff-pdf                                         pjproject
diffoscope                                       plantuml
distcc                                           platformio
docfx                                            poco
doctl                                            podofo
dovecot                                          ponyc
drafter                                          poppler
duo_unix                                         postgis
dynare                                           postgresql
eccodes                                          postgresql@10
efl                                              postgresql@9.4
ejabberd                                         postgresql@9.5
ekg2                                             postgresql@9.6
elm-format                                       postgrest
emacs                                            pre-commit
embree                                           presto
embulk                                           procyon-decompiler
emscripten                                       prometheus
encfs                                            proteinortho
envconsul                                        protobuf
epic5                                            protobuf-c
erlang@20                                        protobuf-swift
erlang@21                                        protobuf@3.6
eslint                                           pulledpork
etcd                                             pulumi
ethereum                                         pure-ftpd
exim                                             puzzles
exploitdb                                        pwsafe
faas-cli                                         pyenv
fabric                                           pyqt
fauna-shell                                      pyside
fdroidserver                                     pyvim
feedgnuplot                                      qca
ffsend                                           qemu
findutils                                        qmmp
firebase-cli                                     qpid-proton
flow                                             qrupdate
fluid-synth                                      qscintilla2
fluxctl                                          quantlib
fn                                               quickjs
folly                                            r
fonttools                                        rabbitmq-c
fossil                                           rclone
fpp                                              rdesktop
fq                                               re2c
freeipmi                                         rebar3
freeradius-server                                rename
frugal                                           repo
fselect                                          rke
futhark                                          rmlint
gambit-scheme                                    rom-tools
gammu                                            roswell
gatsby-cli                                       rsyslog
gauge                                            rtags
gcc                                              ruby
geoipupdate                                      ruby@2.4
gerbil-scheme                                    ruby@2.5
get_iplayer                                      rust
getdns                                           s-nail
getmail                                          s2geometry
getxbook                                         s3-backer
git-annex                                        sagittarius-scheme
git-crypt                                        sane-backends
git-extras                                       saxon
gitlab-runner                                    sbcl
gitversion                                       sblim-sfcc
glances                                          scala@2.12
glib-openssl                                     scalapack
globus-toolkit                                   scamper
glooctl                                          scdoc
gloox                                            schismtracker
gmic                                             scipy
gmt                                              scrypt
go                                               sdhash
go@1.11                                          sdl2
gocryptfs                                        serverless
godep                                            shadowenv
golang-migrate                                   shairport
goofys                                           shairport-sync
goreleaser                                       ship
gradle                                           shogun
grafana                                          siege
grakn                                            sile
groonga                                          sip
groovy                                           sipsak
grpc                                             skaffold
gsoap                                            slrn
gtk-doc                                          smali
gtmess                                           sn0int
gwyddion                                         snapcraft
h2o                                              sngrep
h3                                               socat
hapi-fhir-cli                                    sofia-sip
haproxy                                          softhsm
harfbuzz                                         sonobuoy
hashcat                                          sourcery
hbase                                            speedtest-cli
heimdal                                          sphinx
helmfile                                         spiped
helmsman                                         sqlcipher
help2man                                         srt
hive                                             ssldump
htpdate                                          starship
http_load                                        step
httpd                                            storm
httping                                          streamlink
httrack                                          stress-ng
hugo                                             strongswan
hyperscan                                        stunnel
i2p                                              stuntman
i2pd                                             subnetcalc
i386-elf-gcc                                     suite-sparse
icecast                                          sundials
ike-scan                                         svtplay-dl
imapfilter                                       swig
inlets                                           sync_gateway
insect                                           sysdig
interactive-rebase-tool                          taisei
intercal                                         tarantool
iperf                                            taskell
iperf3                                           tcl-tk
ipopt                                            tcpdump
ipython                                          tcpflow
ircd-hybrid                                      tdlib
ircii                                            telegraf
irssi                                            terraform
ispc                                             terragrunt
istioctl                                         terrahub
jenkins                                          tflint
jenkins-lts                                      tile38
jfrog-cli-go                                     tinc
joplin                                           tiny-fugue
jose                                             tinyxml2
jruby                                            tomcat
juise                                            tomcat-native
juju                                             tomcat@7
jvgrep                                           tomcat@8
k6                                               tomee-webprofile
kafka                                            topgrade
kim-api                                          tor
kore                                             traefik
kotlin                                           trafficserver
krb5                                             triton
kube-aws                                         ttyd
kubecfg                                          tunnel
kubectx                                          typescript
kubernetes-cli                                   u-boot-tools
kubernetes-service-catalog-client                ucloud
kubeseal                                         unbound
lablgtk                                          unrar
launchdns                                        unshield
lazydocker                                       unzip
ldapvi                                           uptimed
ldc                                              uwsgi
ldid                                             vapoursynth
ldns                                             vapoursynth-imwri
lego                                             vapoursynth-ocr
lftp                                             vapoursynth-sub
libdap                                           vault
libdvbpsi                                        vault-cli
libexosip                                        vaulted
libfaketime                                      velero
libfreefare                                      verilator
libgcrypt                                        vert.x
libgit2                                          vim
libiodbc                                         vips
libjwt                                           visp
libmowgli                                        vnstat
libopenmpt                                       vtk
libosmium                                        vulkan-headers
libphonenumber                                   wcslib
libpq                                            wdc
libpqxx                                          webpack
libpulsar                                        whois
libraw                                           wiremock-standalone
libre                                            wla-dx
librsync                                         wp-cli
libsignal-protocol-c                             wskdeploy
libslax                                          wtf
libspng                                          wtfutil
libssh                                           wxmaxima
libtins                                          xmake
libtrace                                         xonsh
libu2f-server                                    xxhash
libuv                                            yamllint
libvisio                                         yank
libwebsockets                                    ykman
linkerd                                          yosys
links                                            youtube-dl
logrotate                                        zabbix
logtalk                                          zbackup
luvit                                            zelda-roth-se
lynx                                             zim
lz4                                              znc
mackup                                           zsdx
mailutils                                        zstd
makensis                                         zsxd
makepkg
==> Renamed Formulae
transmission -> transmission-cli
==> Deleted Formulae
cherokee           frag_find          liblacewing        thc-pptp-bruter    xar-mackyle
csup               freetds@0.91       libopkele          tlsdate
ctunnel            ftimes             pincaster          tn5250

==> Downloading https://homebrew.bintray.com/bottles/telnet-60.mojave.bottle.tar.gz
######################################################################## 100.0%
==> Pouring telnet-60.mojave.bottle.tar.gz
🍺  /usr/local/Cellar/telnet/60: 4 files, 138.2KB
==> `brew cleanup` has not been run in 30 days, running now...
Removing: /usr/local/Cellar/freetype/2.10.0... (61 files, 2.3MB)
Removing: /Users/yasuna/Library/Caches/Homebrew/git--2.22.0_1.mojave.bottle.tar.gz... (16.6MB)
Removing: /usr/local/Cellar/glib/2.60.4_1... (429 files, 15.2MB)
Removing: /Users/yasuna/Library/Caches/Homebrew/imagemagick@6--6.9.10-58.mojave.bottle.tar.gz... (8.6MB)
Removing: /Users/yasuna/Library/Caches/Homebrew/libheif--1.4.0_1.mojave.bottle.tar.gz... (1.1MB)
Removing: /Users/yasuna/Library/Caches/Homebrew/libomp--8.0.0.mojave.bottle.tar.gz... (445.4KB)
Removing: /Users/yasuna/Library/Caches/Homebrew/mysql@5.6--5.6.43.mojave.bottle.tar.gz... (44.8MB)
Removing: /usr/local/Cellar/python/3.7.3... (3,862 files, 59.9MB)
Removing: /usr/local/Cellar/sqlite/3.28.0... (11 files, 3.7MB)
Removing: /usr/local/Cellar/webp/1.0.2... (39 files, 2.1MB)
Removing: /usr/local/Cellar/x265/3.0... (11 files, 35.3MB)
Removing: /Users/yasuna/Library/Logs/Homebrew/libheif... (203B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libtiff... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libtool... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/ilmbase... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/little-cms2... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libpng... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/gdbm... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/freetype... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/python... (3 files, 132KB)
Removing: /Users/yasuna/Library/Logs/Homebrew/openjpeg... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/shared-mime-info... (213B)
Removing: /Users/yasuna/Library/Logs/Homebrew/glib... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libde265... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/webp... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/sqlite... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/xz... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/openexr... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/gettext... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/pcre2... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/pcre... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/x265... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libomp... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/jpeg... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/imagemagick... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/git... (64B)
Removing: /Users/yasuna/Library/Logs/Homebrew/libffi... (64B)
Pruned 0 symbolic links and 3 directories from /usr/local
~ $ telnet 182.22.72.252 80
Trying 182.22.72.252...
Connected to 182.22.72.252.
Escape character is '^]'.
GET / HTTP/1.0

HTTP/1.0 200 OK
Date: Sun, 01 Sep 2019 10:01:55 GMT
P3P: policyref="http://privacy.yahoo.co.jp/w3c/p3p_jp.xml", CP="CAO DSP COR CUR ADM DEV TAI PSA PSD IVAi IVDi CONi TELo OTPi OUR DELi SAMi OTRi UNRi PUBi IND PHY ONL UNI PUR FIN COM NAV INT DEM CNT STA POL HEA PRE GOV"
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Vary: Accept-Encoding
Expires: -1
Pragma: no-cache
Cache-Control: private, no-cache, no-store, must-revalidate
Content-Type: text/html; charset=UTF-8
Age: 2

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8">
<meta http-equiv="content-style-type" content="text/css">
<meta http-equiv="content-script-type" content="text/javascript">
<meta name="description" content="日本最大級のポータルサイト。検索、オークション、ニュース、メール、コミュニティ、ショッピング、など80以上のサービスを展開。あなたの生活をより豊かにする「ライフ・エンジン」を目指していきます。">
<meta name="robots" content="noodp">
<meta name="google-site-verification" content="fsLMOiigp5fIpCDMEVodQnQC7jIY1K3UXW5QkQcBmVs">
<link rel="canonical" href="https://www.yahoo.co.jp/" />
<link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.yahoo.co.jp/">
<link rel="alternate" href="android-app://jp.co.yahoo.android.yjtop/yahoojapan/home/top">
<title>Yahoo! JAPAN</title>
<style type="text/css"><!--
body{word-break:break-all;font:12px/1.22 "Osaka","ＭＳ Ｐゴシック",Arial,sans-serif;*font-size:small;*font:x-small;}
table{font-size:inherit;font:100%;}
pre,code,kbd,samp,tt{font-family:monospace;*font-size:108%;line-height:99%;}
h1,h2,h3,h4,h5{font-size:100%;}
#p{width:350px;}
a{color:#1d3994;text-decoration:none;}
a:visited{color:#941d55;}
a:hover{text-decoration:underline;}
--></style>
<style type="text/css" media="all"><!--
form{margin:0;}
#p{border:1px solid #7e9db9;}

.Util-textCenter{text-align:center}.Util-margin0{margin:0 !important}.Util-marginT0{margin-top:0 !important;}.Alert{position:relative;margin:5px 20px 15px;padding:10px;border:1px solid #ffcf16;background-color:#fefac4}.Alert__title{margin-bottom:10px;font-weight:700;font-size:109%}.Alert__body{line-height:1.5}.Alert__logImage{position:absolute;top:0;left:0}.Button{position:relative;display:inline-block;*display:inline;*zoom:1;box-sizing:border-box;margin:0 auto;padding:6px 1em;border-top:1px solid #979797;border-right:1px solid #979797;border-bottom:1px solid #696969;border-left:1px solid #979797;background:#fff;text-align:center;font-size:109%}.Button:hover{border-top:1px solid #5e5e5e;border-right:1px solid #5e5e5e;border-bottom:1px solid #393939;border-left:1px solid #5e5e5e;text-decoration:none}.Button:after{position:absolute;bottom:0;left:0;display:block;width:100%;height:1px;background:#ddd;content:""}

--></style>
</head>
<body link="#1d3994" vlink="#941d55" leftmargin="0" topmargin="0" marginwidth="1" marginheight="0">
<center>
<table width="770" border="0" cellspacing="0" cellpadding="0"><tr><td align="center">
<table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#c8d4e4">
<tr>
<td><table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#f9fafe">
<tr>
<td width="10%" align="right"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="1"></td>
<td width="80%" align="center"></td>
<td width="10%" align="right"><a href="https://www.yahoo-help.jp/"><nobr>ヘルプ</nobr></a></td>
</tr>
</table></td>
</tr>
</table>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"><br>
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td><img src="//s.yimg.jp/images/top/sp/cgrade/logo-mh-160929.gif" alt="" width="734" height="59" border="0" usemap="#Map">
<map name="Map">
<area shape="rect" coords="0,1,45,58" href="https://travel.yahoo.co.jp/?sc_e=ytmh" alt="トラベル">
<area shape="rect" coords="81,1,124,58" href="https://auctions.yahoo.co.jp/" alt="ヤフオク!">
<area shape="rect" coords="159,1,204,58" href="https://shopping.yahoo.co.jp/" alt="ショッピング">
<area shape="rect" coords="256,-1,479,59" href="https://www.yahoo.co.jp/" alt="Yahoo! JAPAN">
<area shape="rect" coords="530,1,576,57" href="https://premium.yahoo.co.jp/" alt="プレミアム">
<area shape="rect" coords="605,1,658,57" href="https://card.yahoo.co.jp/service/redirect/top/" alt="カード">
<area shape="rect" coords="687,1,733,57" href="https://mail.yahoo.co.jp/" alt="メール">
</map></td>
</tr>
</table>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="5"><br>
<!-- SpaceID=0 robot -->
<!-- SpaceID=0 robot -->
<!-- SpaceID=0 robot -->
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="5"><br>
<table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#9fb6d5">
<tr>
<td><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#e9eef4">
<tr>
<td><table width="100%" border="0" cellspacing="0" cellpadding="10">
<tr>
<td align="center"><form name="sf1" action="https://search.yahoo.co.jp/search">
<input type="hidden" name="fr" value="top_table">
<input type="hidden" name="tid" value="top_table">
<input type="hidden" name="ei" value="UTF-8">
<table border="0" cellspacing="0" cellpadding="0">
<tr>
<td><table cellpadding="0" cellspacing="0" border="0">
<tr>
<td height="15"><input type="text" name="p" id="p" size="20"></td>
<td><img src="//s.yimg.jp/images/clear.gif" alt="" width="5" height="1">
<input type="image" name="search" src="//s.yimg.jp/images/top/searchbox/s_w-140325.gif" border="0" alt="ウェブ検索" title="ウェブ検索"></td>
</tr>
</table></td>
</tr>
</table>
</form></td>
</tr>
</table></td>
</tr>
</table></td>
</tr>
</table>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10">
<table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#ffcc01">
<tr>
<td><table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#fefbc4">
<tr><td align="center"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="15"></td></tr>
<tr><td align="center">
<nobr>Yahoo! JAPANトップページの機能を正しくご利用いただくには、下記の環境が必要です。</nobr><br>
Windows：Internet Explorer 11.0以上 / Chrome 最新版 / Firefox 最新版 / Microsoft Edge　Macintosh：Safari 9.0以上<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="15"><br>
※Internet Explorer 11.0以上をご利用の場合は、「<a href="https://www.yahoo-help.jp/app/answers/detail/p/533/a_id/43883">Internet Explorerの互換表示について</a>」を参考に、互換表示の無効化をお試しください。<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="15"><br><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="15">
</td>
</tr>
</table></td>
</tr>
</table>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"><br>
<a href="https://sports.yahoo.co.jp/contents/5134">U-18野球W杯　侍Jの第3戦をライブ配信中</a> - <a href="https://rdsig.yahoo.co.jp/news/nonfiction/pc/toplink/recommend/RV=1/RU=aHR0cHM6Ly9uZXdzLnlhaG9vLmNvLmpwL3Byb21vL25vbmZpY3Rpb24v">おすすめのノンフィクション本を紹介</a><br>
<a href="https://ext.yahoo.co.jp/information/0902/index.html">Yahoo! JAPANトップのデザインを変更します</a> <img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="18"><br>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10">
<table width="100%" cellspacing="0" cellpadding="0">
<tr>
<td align="left" valign="top">
<table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#d7e0ff"><tr><td><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="4"><br><img src="//s.yimg.jp/images/clear.gif" alt="" width="10" height="1"><strong>ニュース</strong><br><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="4"><br></td></tr><tr><td bgcolor="#9fb6d5"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="1"></td></tr></table><table width="100%" cellspacing="10" cellpadding="0"><tr><td><table width="100%" border="0" cellspacing="4" cellpadding="0"><tr><td><font size="-3" color="#666666">18時43分更新</font></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335189">8%or10% 異なる税率の要点<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335192">大雨被害の佐賀 川に女性遺体<img src="//s.yimg.jp/images/top/sp/cgrade/iconVideo_150713.gif" alt="動画" width="16" height="11" border="0"><img src="//s.yimg.jp/images/top/sp/cgrade/iconNew_150713.gif" width="30" height="12" alt="NEW" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335195">4歳死亡「裸で外に放置」目撃<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"><img src="//s.yimg.jp/images/top/sp/cgrade/iconNew_150713.gif" width="30" height="12" alt="NEW" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335178">飲むおにぎり 常識に挑む商品<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335170">メーガン妃父 娘の苦労話うそ<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335190">速報U18W杯 侍Jvs.アメリカ<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"><img src="//s.yimg.jp/images/top/sp/cgrade/iconLive_150713.gif" width="30" height="12" alt="LIVE" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335194">国民的アニメ 声優交代の苦悩<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"><img src="//s.yimg.jp/images/top/sp/cgrade/iconNew_150713.gif" width="30" height="12" alt="NEW" border="0"></a></td></tr><tr><td>・<a href="https://news.yahoo.co.jp/pickup/6335181">板野友美 AKBで得た雑草精神<img src="//s.yimg.jp/images/top/sp/cgrade/iconPhoto_150713.gif" alt="写真" width="16" height="12" border="0"></a></td></tr><tr><td><img src="//s.yimg.jp/images/clear.gif" alt="" width="10" height="20"><a href="https://news.yahoo.co.jp/topics/top-picks?date=20190901&mc=f&mp=f">もっと見る</a><img src="//s.yimg.jp/images/clear.gif" alt="" width="40" height="1"><a href="https://news.yahoo.co.jp/fc">記事一覧</a></td></tr></table></td><td width="140" valign="top" bgcolor="#e9eef4"><table width="100%%" cellspacing="0" cellpadding="10"><tr><td><center><a href="https://headlines.yahoo.co.jp/hl?a=20190901-00000034-jij-spo.view-000"><img src="https://lpt.c.yimg.jp/im_siggNumNJMLlYunvyN7DGFvoug---x300-y300/amd/20190901-00000034-jij-000-view.jpg" alt="日本女子初の12秒台" width="120" height="93" border="0"></a></center><a href="https://headlines.yahoo.co.jp/hl?a=20190901-00000034-jij-spo.view-000">日本女子初の12秒台</a><br><font size="-3" color="#666666">9月1日14時39分配信<br>時事通信</font></td></tr></table></td></tr></table><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10">
<table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#a0b7d6">
<tbody><tr>
<td><table width="100%" border="0" cellpadding="4" cellspacing="0" bgcolor="#e9eef4">
<tbody><tr>
<td><table width="100%" cellpadding="2" cellspacing="0">
<tbody><tr>
<td width="33%" valign="top"><a href="https://shopping.yahoo.co.jp/?sc_e=ytc">ショッピング</a></td>
<td width="33%" valign="top"><a href="https://auctions.yahoo.co.jp">ヤフオク!</a></td>
<td width="33%" valign="top"><a href="https://lohaco.jp/?bk=t&sc_e=j_as_ya_tc_n&iscr=1">LOHACO</a></td>
</tr>
<tr>
<td valign="top"><a href="https://travel.yahoo.co.jp/?sc_e=ytsl">トラベル</a></td>
<td valign="top"><a href="https://rdsig.yahoo.co.jp/travel_kanko/yjtop_cont/RV=1/RU=aHR0cHM6Ly93d3cuaWt5dS5jb20vaWtDby5hc2h4P2Nvc2lkPWlrMDEwMDAyJnN1cmw9JTJG">一休.com</a></td>
<td valign="top"><a href="https://rdsig.yahoo.co.jp/reservation/yjtop_cont/RV=1/RU=aHR0cHM6Ly9yZXN0YXVyYW50LmlreXUuY29tL3JzQ29zaXRlLmFzcD9Db3NObz0xMDAwMDE3NSZDb3NVcmw9">一休.comレストラン</a></td>
</tr>
<tr>
<td valign="top"><a href="https://news.yahoo.co.jp/">ニュース</a></td>
<td valign="top"><a href="https://weather.yahoo.co.jp/weather/">天気・災害</a></td>
<td valign="top"><a href="https://sports.yahoo.co.jp/">スポーツナビ</a></td>
</tr>
<tr>
<td valign="top"><a href="https://finance.yahoo.co.jp/">ファイナンス</a></td>
<td valign="top"><a href="https://tv.yahoo.co.jp/">テレビ</a></td>
<td valign="top"><a href="https://gyao.yahoo.co.jp/">GYAO!</a></td>
</tr>
<tr>
<td valign="top"><a href="https://games.yahoo.co.jp/">ゲーム</a></td>
<td valign="top"><a href="http://yahoo-mbga.jp/?_ref=aff%3Dysm001">Yahoo!モバゲー</a></td>
<td valign="top"><a href="https://map.yahoo.co.jp/">地図</a></td>
</tr>
<tr>
<td valign="top"><a href="https://transit.yahoo.co.jp/">路線情報</a></td>
<td valign="top"><a href="https://retty.me/?utm_y_pc_top">Retty</a></td>
<td valign="top"><a href="https://realestate.yahoo.co.jp/">不動産</a></td>
</tr>
<tr>
<td valign="top"><a href="https://carview.yahoo.co.jp/">自動車</a></td>
<td valign="top"><a href="https://trilltrill.jp/">TRILL</a></td>
<td valign="top"><a href="https://rdsig.yahoo.co.jp/partner/from_ytop/pc/list1/RV=1/RU=aHR0cHM6Ly9wYXJ0bmVyLnlhaG9vLmNvLmpwLw--">パートナー</a></td>
</tr>
<tr>
<td colspan="4" align="right"><strong><a href="https://services.yahoo.co.jp/?mode=pc">&gt;&gt;サービス一覧</a></strong></td>
</tr>
</tbody></table></td>
</tr>
</tbody></table></td>
</tr>
</tbody></table>
</td>
<td width="10">&nbsp;</td>
<td width="350" align="left" valign="top">
<table width="100%" border="0" cellpadding="1" cellspacing="0" bgcolor="#9fb6d5">
<tbody><tr>
<td><table width="100%" border="0" cellpadding="0" cellspacing="0">
<tbody><tr>
<td><table width="100%" border="0" cellpadding="0" cellspacing="0">
<tbody><tr>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
<td width="330" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
</tr>
<tr>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif">&nbsp;</td>
<td width="330"><table width="100%" border="0" cellpadding="2" cellspacing="0" bgcolor="#ffffff">
<tbody>
<tr>
<td colspan="2"><img src="//s.yimg.jp/images/clear.gif" alt="" width="7" height="1"><a href="https://login.yahoo.co.jp/config/login?.src=www&.done=https://www.yahoo.co.jp">ログイン</a></td>
</tr>
<tr>
<td><img src="//s.yimg.jp/images/clear.gif" alt="" width="7" height="1">IDでもっと便利に[ <a href="https://account.edit.yahoo.co.jp/registration?.src=www&.done=https%3A%2f%2fwww.yahoo.co.jp">新規取得</a> ]</td>
<td align="right"><a href="https://accounts.yahoo.co.jp/profile?.src=www&.done=https%3A%2f%2fwww.yahoo.co.jp%2F"><img src="//s.yimg.jp/images/top/sp/cgrade/info_btn-140325.gif" alt="登録情報" width="47" height="16" border="0"></a><img src="//s.yimg.jp/images/clear.gif" alt="" width="7" height="1"></td>
</tr>
<tr>
<td colspan="2"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="5"></td>
</tr>
<tr>
<td><img src="//s.yimg.jp/images/clear.gif" alt="" width="7" height="1"><strong><a href="https://mail.yahoo.co.jp/"><img src="//s.yimg.jp/images/top/sp/cgrade/iconMail.gif" alt="Yahoo!メール" width="16" height="16" border="0" align="absmiddle">メール</a></strong> - <strong><a href="https://mail.yahoo.co.jp/promo/">メールアドレスを取得</a></strong></td>
</tr>
<tr>
<td colspan="2"><img src="//s.yimg.jp/images/clear.gif" alt="" width="7" height="1"><strong><a href="https://calendar.yahoo.co.jp/">カレンダー</a></strong> - <strong><a href="https://calendar.yahoo.co.jp/info/guide/">カレンダーを活用</a></strong></td>
</tr>
</tbody></table></td>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif">&nbsp;</td>
</tr>
<tr>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
<td width="330" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
<td width="10" background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10"></td>
</tr>
</tbody></table></td>
</tr>
<tr>
<td bgcolor="#ffffff"><img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="1"></td>
</tr>
<tr>
<td><table width="100%" border="0" cellspacing="0" cellpadding="5">
<tbody><tr>
<td background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/top/sp/cgrade/icon_point.gif" alt="ポイントを確認" width="25" height="16" align="top"><a href="https://points.yahoo.co.jp/" title="ポイントを確認">ポイントを確認</a></td>
</tr>
<tr>
<td background="//s.yimg.jp/images/top/sp/cgrade/pb_bg.gif"><img src="//s.yimg.jp/images/clear.gif" alt="" width="5" height="1" align="top"><a href="https://lh.login.yahoo.co.jp/" title="ログイン履歴を確認">ログイン履歴を確認</a></td>
</tr>
</tbody></table></td>
</tr>
</tbody></table></td>
</tr>
</tbody></table>
<img src="//s.yimg.jp/images/clear.gif" alt="" width="1" height="10">
</td>
</tr>
</table>
<hr size="1" color="#cccccc" width="100%">
<table width="100%" border="0" cellspacing="0" cellpadding="4">
<tr>
<td align="center"><nobr><a href="https://about.yahoo.co.jp/">会社概要</a> - <a href="https://about.yahoo.co.jp/ir/">投資家情報</a> - <a href="https://about.yahoo.co.jp/csr/">社会的責任</a> - <a href="https://about.yahoo.co.jp/info/charter/">企業行動憲章</a> - <a href="https://marketing.yahoo.co.jp/">広告掲載について</a> - <a href="https://about.yahoo.co.jp/hr/">採用情報</a></nobr></td>
</tr>
<tr>
<td align="center"><a href="https://about.yahoo.co.jp/docs/info/terms/">利用規約</a> - <a href="https://about.yahoo.co.jp/docs/pr/disclaimer.html">免責事項</a> - <a href="https://about.yahoo.co.jp/info/mediastatement/">メディアステートメント</a> - <a href="https://privacy.yahoo.co.jp/">プライバシー</a></td>
</tr>
<tr>
<td align="center">Copyright (C) 2019 Yahoo Japan Corporation. All Rights Reserved.</td>
</tr>
</table>
</td>
</tr>
</table>
</center>
</body>
</html>
Connection closed by foreign host.
~ $ ls
Applications                      Pictures
Boostnote                         Public
Creative Cloud Files              group-materials
DataBaseDesignSample              iCloud Drive（アーカイブ）
Desktop                           javascript_practice
Documents                         local
Downloads                         mooovi-exam1
Library                           mooovi-exam3
Movies                            pictweet_exam2
Music                             project
~ $ cd project
~/project $ cd
~ $ vi sample
~ $ ls
Applications                      Pictures
Boostnote                         Public
Creative Cloud Files              group-materials
DataBaseDesignSample              iCloud Drive（アーカイブ）
Desktop                           javascript_practice
Documents                         local
Downloads                         mooovi-exam1
Library                           mooovi-exam3
Movies                            pictweet_exam2
Music                             project
~ $ ls -l project/pictweet
total 56
-rw-r--r--   1 yasuna  staff  2522  8 23 23:34 Gemfile
-rw-r--r--   1 yasuna  staff  7560  8 23 23:34 Gemfile.lock
-rw-r--r--   1 yasuna  staff   374  6  8 17:15 README.md
-rw-r--r--   1 yasuna  staff   227  6  8 17:15 Rakefile
drwxr-xr-x  11 yasuna  staff   352  6  9 16:04 app
drwxr-xr-x   9 yasuna  staff   288  6  8 17:16 bin
drwxr-xr-x  16 yasuna  staff   512  6  8 17:15 config
-rw-r--r--   1 yasuna  staff   130  6  8 17:15 config.ru
drwxr-xr-x   5 yasuna  staff   160  6  9 13:37 db
drwxr-xr-x   4 yasuna  staff   128  6  8 17:15 lib
drwxr-xr-x   5 yasuna  staff   160  8 17 13:41 log
-rw-r--r--   1 yasuna  staff    66  6  8 17:15 package.json
drwxr-xr-x   9 yasuna  staff   288  6  8 17:15 public
drwxr-xr-x   8 yasuna  staff   256  8 20 23:21 spec
drwxr-xr-x   3 yasuna  staff    96  6  8 17:15 storage
drwxr-xr-x  11 yasuna  staff   352  6  8 17:15 test
drwxr-xr-x   9 yasuna  staff   288  6  9 12:53 tmp
drwxr-xr-x   3 yasuna  staff    96  6  8 17:15 vendor
~ $ ls p
ls: p: No such file or directory
~ $ ls -p
Applications/                      Pictures/
Boostnote/                         Public/
Creative Cloud Files/              group-materials/
DataBaseDesignSample/              iCloud Drive（アーカイブ）/
Desktop/                           javascript_practice/
Documents/                         local/
Downloads/                         mooovi-exam1/
Library/                           mooovi-exam3/
Movies/                            pictweet_exam2/
Music/                             project/
~ $ ls | grep p
Applications
DataBaseDesignSample
Desktop
group-materials
javascript_practice
pictweet_exam2
project
~ $ ps aux | grep mysql | grep -v grep
yasuna             683   0.0  0.0  4900856   3516   ??  S    20 819    0:38.45 /usr/local/opt/mysql@5.6/bin/mysqld --basedir=/usr/local/opt/mysql@5.6 --datadir=/usr/local/var/mysql --plugin-dir=/usr/local/opt/mysql@5.6/lib/plugin --log-error=yasuna-2.local.err --pid-file=yasuna-2.local.pid
yasuna             511   0.0  0.0  4279776      8   ??  S    20 819    0:00.04 /bin/sh /usr/local/opt/mysql@5.6/bin/mysqld_safe --datadir=/usr/local/var/mysql
~ $    n
  [復元日時2019/09/02 14:53:24]
Last login: Mon Sep  2 14:53:23 on ttys000
Restored session: 2019年 9月 2日 月曜日 14時51分45秒 JST
yasuna-2:~ yasuna$ source ~/.bashrc
~ $ cd
~ $ mv Downloads/y-pro.pem .ssh/
~ $ cd .ssh/
~/.ssh $ chmod 600 y-pro.pem
~/.ssh $ ssh -i y-pro.pem ec2-user@52.193.205.32
               
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