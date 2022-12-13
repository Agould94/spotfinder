class AddFoodTypeToRestaurant < ActiveRecord::Migration[7.0]
  def change
    add_column :restaurants, :food_type, :string
  end
end
