# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = { username: 'guest', password: 'password', image_url: 'http://i.onionstatic.com/onion/7954/original/1200.jpg' }
User.create(guest)

board1 = { title: 'Typography', description: 'A collection of pretty typfaces found in the wild', user_id: 1 }
board2 = { title: 'Patterns', description: 'Patterns and symmetry', user_id: 1 }


pin1 = {title: 'Atlanta made', description: 'Cool font on building', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/v1484451886/iiluzop4ya-ian-schneider_u0fvbe.jpg', user_id: 1, board_id: 1};
pin2 = {title: 'Building windows', description: 'Cool symmetry with building windows', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/v1484505071/lca3h4jsjvu-michael-suriano_wcpieq.jpg', user_id: 1, board_id: 2};
pin3 = {title: 'Bike typography', description: 'Cute typogaphy onbike', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/v1484543733/vocdywygncc-clem-onojeghuo_jnrwbw.jpg', user_id: 1, board_id: 1};
pin4 = {title: 'Good', description: 'Blue and orange type', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/v1484543739/s_xvv-l8q4i-gemma-evans_wzphqk.jpg', user_id: 1, board_id: 1};


Board.create(board1)
Board.create(board2)
Pin.create(pin1)
Pin.create(pin2)
Pin.create(pin3)
Pin.create(pin4)
