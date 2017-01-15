class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
    
      t.string :title
      t.string :content
      t.string :author
      t.string :score
      t.string :sub
      t.string :imge

      t.timestamps null: false
      
    end
  end
end
