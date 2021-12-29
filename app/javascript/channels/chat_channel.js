import consumer from "channels/consumer"

consumer.subscriptions.create({ channel: "ChatChannel", chat_channel_id: chat_channel_uuid }, {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  },

  speak: function() {
    return this.perform('speak');
  }
});
