class AddImageToRestaurants < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :image_url, :string
  end
end
