module ApplicationHelper
  def flash_class(type)
    case type.to_sym
    when :alert
      "alert-error"
    when :notice
      "alert-success"
    when :info
      "alert-info"
    else
      ""
    end
  end

  def format_time_duration(time)
    Duration.new(time).format("%H:%M:%S")
  end
end
