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


pin1 = {title: 'Atlanta made', description: 'Cool font on building', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_2872/v1484451886/iiluzop4ya-ian-schneider_u0fvbe.jpg', user_id: 1, board_id: 1};
pin2 = {title: 'Bike typography', description: 'Cute font on bike', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1911/v1484543733/vocdywygncc-clem-onojeghuo_jnrwbw.jpg', user_id: 1, board_id: 1};
pin3 = {title: 'Good', description: 'Blue and orange type', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1375/v1484543739/s_xvv-l8q4i-gemma-evans_wzphqk.jpg', user_id: 1, board_id: 1};
pin4 = {title: 'Lettering', description: 'Signs with cute lettering', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1535/v1484590972/zb5cy_f8nmg-joey-sforza_uounjq.jpg', user_id: 1, board_id: 1};
pin5 = {title: 'Adore and endure', description: 'Wall typography', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1677/v1484591059/opqivhchauq-toa-heftiba_lnk8vo.jpg', user_id: 1, board_id: 1};
pin6 = {title: 'Coffee', description: 'Cute signs', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1910/v1484590989/b13cerxzdzi-michael-ramey_rx2lrg.jpg', user_id: 1, board_id: 1};
pin7 = {title: 'Dispatch', description: 'Hotel sign', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_2452/v1484590965/sb2x9ybd_24-jake-blucker_rjwomg.jpg', user_id: 1, board_id: 1};

pin8 = {title: 'Building windows', description: 'Cool symmetry with building windows', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/v1484505071/lca3h4jsjvu-michael-suriano_wcpieq.jpg', user_id: 1, board_id: 2};
pin9 = {title: 'Ceiling', description: 'Black and blue ceiling', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1717/v1484896972/egrikwxl_mw-chris-anderson_lyy4dq.jpg', user_id: 1, board_id: 2};
pin10 = {title: 'Wood', description: 'Circular symmetry', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1951/v1484897001/joy2sichbss-kevin-niu_zlhltv.jpg', user_id: 1, board_id: 2};
pin11 = {title: 'Spiral', description: 'Birdseye view of spiral staircase', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_2759/v1484897010/dc21fc17izq-mihai-surdu_r55ws2.jpg', user_id: 1, board_id: 2};
pin12 = {title: 'Snowflakes', description: 'Closeup of frosted window', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1869/v1484897062/pgqxhfpsuri-kelly-sikkema_c2zy5x.jpg', user_id: 1, board_id: 2};
pin13 = {title: 'Jenga', description: 'Stacked wooden blocks', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_1858/v1484897066/xda6twh2m7a-pietro-de-grandi_wf3ple.jpg', user_id: 1, board_id: 2};
pin14 = {title: 'Teal', description: 'Chair rows', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_2333/v1484897636/6hifjq-hkjw-zbysiu-rodak_1_srsjrm.jpg', user_id: 1, board_id: 2};
pin15 = {title: 'Fingerprint', description: 'Optical illusion with wall painting', image_url: 'http://res.cloudinary.com/bronwyndunn/image/upload/c_scale,h_2417/v1484897790/x0hxktiauqc-jon-tyson_tywru4.jpg', user_id: 1, board_id: 2};


Board.create(board1)
Board.create(board2)
Pin.create(pin1)
Pin.create(pin3)
Pin.create(pin13)
Pin.create(pin10)
Pin.create(pin2)
Pin.create(pin7)
Pin.create(pin5)
Pin.create(pin15)
Pin.create(pin14)
Pin.create(pin4)
Pin.create(pin11)
Pin.create(pin8)
Pin.create(pin9)
Pin.create(pin12)
Pin.create(pin6)
