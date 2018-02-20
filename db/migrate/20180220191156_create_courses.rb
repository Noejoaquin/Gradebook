class CreateCourses < ActiveRecord::Migration[5.1]
  def change
    create_table :courses do |t|
      t.string :name
      t.integer :student_id
      t.integer :teacher_id
      t.float :overall_grade

      t.timestamps
    end
  end
end
