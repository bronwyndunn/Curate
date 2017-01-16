json.partial! 'api/boards/board', board: @board

json.pins do
  json.array! @board.pins do |pin|
    json.partial! 'api/pins/pin', pin: pin
  end
end
