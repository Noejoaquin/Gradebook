class CreateStudentGrades < ActiveRecord::Migration[5.1]
  def change
    create_table :student_grades do |t|

      t.timestamps
    end
  end
end
