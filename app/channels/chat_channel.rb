class ChatChannel < ApplicationCable::Channel

  def subscribed
    stream_for find_chat
  end

  def unsubscribed; end

  def speak(data)
    find_chat.messages.create(data.slice('content').merge(id: SecureRandom.uuid))
    broadcast_to find_chat, data.slice('content')
  end

  private

  def find_chat
    @chat ||= Chat.find(params[:chat_channel_id])
  end
end
