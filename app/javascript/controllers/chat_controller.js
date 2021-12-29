import { Controller } from "@hotwired/stimulus"
import consumer from "channels/consumer"

export default class extends Controller {
  static targets = ["message", "add"];

  connect() {
    let self = this
    this.subscription = consumer.subscriptions.create({ channel: "ChatChannel", chat_channel_id: this.getChatChannelUUID() }, {
      connected() {
        // Called when the subscription is ready for use on the server
      },

      disconnected() {
        // Called when the subscription has been terminated by the server
      },

      received(data) {
        self.addMessage(data.content);
      },

      speak: function(content) {
        return this.perform('speak', { content: content });
      }
    });
  }

  addMessage(message) {
    let li = document.createElement("li");               // Create a <p> element
    li.innerText = message;
    this.addTarget.append(li);
  }

  getChatChannelUUID() {
    let container = document.getElementById('chat');
    return container.dataset.chatChannelUuid
  };

  speak(e) {
    e.preventDefault();
    let content = this.messageTarget.value
    this.subscription.speak(content)
  }
}
