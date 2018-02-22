class CreateStudentGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :student_grades do |t|
      t.integer :course_id, null: false
      t.integer :user_id, null: false
      t.float :grade, null: false
      t.timestamps
    end
    add_index :student_grades, :course_id
    add_index :student_grades, :user_id
  end
end
