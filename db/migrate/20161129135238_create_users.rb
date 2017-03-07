class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      
      t.string :username
      t.string :email
      t.string :password_digest
      t.text :upvoted, array: true, default: []
      t.text :downvoted, array: true, default: []
      t.text :upvoted_c, array: true, default: []
      t.text :downvoted_c, array: true, default: []
      t.text :replies, array: true, default: []
      t.integer :notifications, default: 0
      t.string :background, default: '../../images/snowyforest.jpg'
      t.string :main_color, default: '#3399cc'
      t.string :snd_color, default: '#6699ff'

      t.timestamps null: false
    end
  end
end
