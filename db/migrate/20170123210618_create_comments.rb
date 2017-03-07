class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      
      t.string :author
      t.string :text
      t.string :score
      t.string :parent
      t.string :post
      t.string :sub
      t.string :layer

      t.timestamps null: false
    end
  end
end
