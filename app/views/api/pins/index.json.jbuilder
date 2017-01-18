
@pins.each do |pin|
  json.set! pin.id do
    json.board_title pin.board.title
    json.partial! 'api/pins/pin', pin: pin
  end
end
