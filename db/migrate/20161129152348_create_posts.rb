class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
    
      t.string :title
      t.string :content
      t.string :author
      t.string :score
      t.string :sub
      t.string :imge
      t.text :comments, array: true, default: []

      t.timestamps null: false
      
    end
  end
end
