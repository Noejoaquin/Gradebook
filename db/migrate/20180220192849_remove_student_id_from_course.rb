class RemoveStudentIdFromCourse < ActiveRecord::Migration[5.1]
  def change
    remove_column :courses, :student_id
  end
end
