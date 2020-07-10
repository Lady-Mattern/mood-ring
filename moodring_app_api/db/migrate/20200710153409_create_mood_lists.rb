class CreateMoodLists < ActiveRecord::Migration[6.0]
  def change
    create_table :mood_lists do |t|
      t.string :title
      t.string :mood
      t.string :img
      t.string :audio

      t.timestamps
    end
  end
end
