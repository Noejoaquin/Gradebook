class FixUserIdColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :student_grades, :user_id, :student_id
  end
end
