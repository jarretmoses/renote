module NotesHelper

  def markdown(text)
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, no_intra_emphasis: true)
    markdown.render(text).html_safe
  end
end
