class ChatsController < ApplicationController
  def show
    @chat = Chat.last || Chat.create(id: SecureRandom.uuid)
  end
end
