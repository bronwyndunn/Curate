# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = { username: 'guest', password: 'password' }
User.create(guest)

board1 = { title: 'board1', description: 'description', user_id: 4 }
board2 = { title: 'board2', description: 'description2', user_id: 4 }
Board.create(board1)
Board.create(board2)
