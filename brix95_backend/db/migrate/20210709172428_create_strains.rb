class CreateStrains < ActiveRecord::Migration[6.1]
  def change
    create_table :strains do |t|
      t.string "name"
      t.float "thc_content"
      t.string "species"
      t.text "description"


      t.timestamps
    end
  end
end
