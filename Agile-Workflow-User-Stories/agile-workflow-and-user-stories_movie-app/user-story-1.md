# Movie list - feature

## Value Proposition

**As a** User <br>
**I want to** be able to see a list of the current movies. <br>
**so that** I can know which movies are available today. <br>

## Description

![wireframe](./assets/scribble-movie-list.png)

- Each movie card has the rating located in the upper-right corner.
  -The title of the moview is located at the bottom-left of the movie-poster.

## Acceptance Criteria

- The main page should show the list of current moviews.
- We will show the movie-poster image, raiting and movie title for each movie.
  -In case of having an empty list, the following message should appear: "Sorry, we couldn´t retrieve the latest movie data at the moment. Please try again later."
  -The movie ratings can just have one decimal number.

## Tasks

- Create just one card component that will render all the movies.
  -The movies information is in the MongoDB, you will need to connect the backend.
