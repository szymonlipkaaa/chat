class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages, id: :uuid do |t|
      t.text :content
      t.belongs_to :chat, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
