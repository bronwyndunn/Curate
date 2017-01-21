# Curate

[Curate Live][curate]
Curate is a full-stack web application inspired by Pinterest. It allows users to browse, create, and search for images, create boards, and collect images to those boards. Curate is built with Ruby on Rails on the backend, React/Redux on the frontend, and a PostgreSQL database.

![Curate Home page: curateapp.heroku.app](./docs/images/curatehome.png)

## Features

- User accounts with secure authentication
- Home feed where user can browse different pins
- Search feature which allows users to search for pins by title or description
- Uploading user's own pins
- Create user boards
- Pin any image to user boards  

![Curate feed][feed]

Users can browse pins from different boards on the feed view.

When clicked on, a pin modal pops up, allowing the user to view pin details and pin the image to a user board.

![Newpin][newpin]

Users can create and edit boards.
![curateprofile][curateprofile]

Users can navigate to feed, search, or user profile from the nav bar. Users can search pins by title or description.
![navbar][nav]

## Future Directions

### Adding taggings and Infinite Scroll
Pinterest allows users to add tags to pins when pinning them to boards. I can on implementing taggings from the backend to allow users to search for taggings as well. I also plan to implement an infinite scroll.


[curate]: curateapp.herokuapp.com
[home page]: ./docs/images/home_page.png "Chime home page"
[feed]: ./docs/images/curatefeeds.png "A user's tracks"
[newpin]: ./docs/images/newpin.png
[curateprofile]: ./docs/images/curateprofile.png
[nav]: ./docs/images/navbar.jpg
