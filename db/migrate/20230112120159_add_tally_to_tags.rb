class AddTallyToTags < ActiveRecord::Migration[7.0]
  def change
    add_column :tags, :tally, :integer
  end
end
