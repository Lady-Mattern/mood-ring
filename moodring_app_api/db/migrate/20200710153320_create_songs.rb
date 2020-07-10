class CreateSongs < ActiveRecord::Migration[6.0]
  def change
    create_table :songs do |t|
      t.string :title
      t.string :mood
      t.string :img
      t.string :audio

      t.timestamps
    end
  end
end
