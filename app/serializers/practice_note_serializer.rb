class PracticeNoteSerializer < ActiveModel::Serializer
  attributes :id, :date, :title, :content, :song_id
end
