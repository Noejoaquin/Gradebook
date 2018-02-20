class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name, null:false
      t.integer :student_id, null:false
      t.integer :teacher_id, null:false
      t.float :overall_grade

      t.timestamps
    end
    add_index :courses, :student_id
    add_index :courses, :teacher_id
  end
end
