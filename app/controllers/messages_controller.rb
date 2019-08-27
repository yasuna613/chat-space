class MessagesController < ApplicationController
  before_action :set_group

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
  end

  def new
  end

  def create
    @message = @group.messages.new(message_params)
    respond_to do |format|
      if @message.save
        # format.html{ redirect_to group_messages_path}
        format.json
        flash.now[:notice]= "メッセージを投稿しました"
      else
        @messages = @group.messages.includes(:user)
        flash.now[:alert] = "メッセージを入力してください。"
        render :index
      end
    end
  end

  private
  def message_params
    params.require(:message).permit(:text,:image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
  
end
