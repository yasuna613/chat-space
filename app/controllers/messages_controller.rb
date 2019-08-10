class MessagesController < ApplicationController

  def index
    @message = Message.new
  end

  def new
  end

  def create
    @message = Message.create(message_params)
    redirect_to group_messages_path, notice: 'メッセージを投稿しました'
  end

  private
  def message_params
    params.require(:message).permit(:text,:image).merge(user_id: current_user.id, group_id: params[:group_id])
  end
  
end
