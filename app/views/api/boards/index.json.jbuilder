@boards.each do |board|
  pins = board.pins
  json.set! board.id do
    json.partial! 'api/boards/board', board: board
    json.primary_image pins[-1].image_url unless pins.length < 1
    json.secondary_image pins[-2].image_url unless pins.length < 2
    json.tertiary_image pins[-3].image_url unless pins.length < 3
  end
end
