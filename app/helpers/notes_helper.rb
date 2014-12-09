module NotesHelper

  def markdown(text)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, no_intra_emphasis: true, fenced_code_blocks: true, disable_indented_code_blocks:true)
    markdown.render(text).html_safe
  end

  def class_for_notes_count(class_name,count)
    if count > 9
      "#{class_name} #{class_name}-lg"
    else
      "#{class_name} #{class_name}-sm"
    end
  end

end
