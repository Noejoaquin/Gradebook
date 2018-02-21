[@course].each do |course|
  json.set! course.id do
    json.extract! course, :id, :name, :overall_grade
  end
end
