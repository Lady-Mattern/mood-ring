class AddColumnToMoods < ActiveRecord::Migration[6.0]
  def change
    add_column :mood_lists, :artist, :string
  end
end
