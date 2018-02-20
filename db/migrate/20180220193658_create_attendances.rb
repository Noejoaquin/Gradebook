class CreateAttendances < ActiveRecord::Migration[5.1]
  def change
    create_table :attendances do |t|
      t.integer :student_id, null: false
      t.integer :course_id, null: false

      t.timestamps
    end
    add_index :attendances, :student_id
    add_index :attendances, :course_id
  end
end
