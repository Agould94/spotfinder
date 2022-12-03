class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :stars
      t.string :content
      t.integer :restaurant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
