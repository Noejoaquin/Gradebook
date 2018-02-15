class Student < ApplicationRecord
  belongs_to :user,
  primary_key: :id,
  class_name: 'User',
  foreign_key: :user_id  

end
