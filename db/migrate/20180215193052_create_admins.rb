class CreateAdmins < ActiveRecord::Migration[5.1]
  def change
    create_table :admins do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.timestamps
    end
    add_index :admins, :user_id
  end
end
