class CreateRestaurants < ActiveRecord::Migration[7.0]
  def change
    create_table :restaurants do |t|
      t.string :address
      t.string :phone_number
      t.string :vibe

      t.timestamps
    end
  end
end
