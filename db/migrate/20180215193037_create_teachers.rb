class CreateTeachers < ActiveRecord::Migration[5.1]
  def change
    create_table :teachers do |t|
      t.integer :user_id, null: false
      t.string :department, null: false

      t.timestamps
    end
    add_index :teachers, :user_id
  end
end
