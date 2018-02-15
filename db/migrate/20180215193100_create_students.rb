class CreateStudents < ActiveRecord::Migration[5.1]
  def change
    create_table :students do |t|
      t.integer :user_id, null: false
      t.float :gpa
      t.timestamps
    end
    add_index :students, :user_id
  end
end
