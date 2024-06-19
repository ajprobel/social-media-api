# Social Media API

## Description

It seems these days that so much of our lives includes some aspect using social media. Even beyond the social media "titans" of Facebook, Twitter, and Instagram, a lot of websites/applications are implementing social aspects to increase engagement amongst its users. But how exactly are these social media frameworks established? What are the best practices when making something like a social media application?

The goal of this application aims to give some insight on how to create the basic framework of an example social media website by making a RESTful API that allows us to create users, add friends, share "thoughts", and add "reactions" to those thoughts. This project utilizes the flexibility of NoSQL; specifically, MongoDB and Mongoose.

While completing this application, I learned a lot about how to properly set up model schemas through Mongoose, updating subdocuments within schemas, and using asynchronous functions on various routes (POST, PUT, DELETE routes for the "thoughts" were especially tricky). 


## Installation

* clone the git repository to your machine
* open the terminal and install all dependencies for the project
* * `npm install`
* Start the server
* * `npm start`
* Use Postman or Insomnia to test the routes, as detailed in the section below

## Usage

**Please watch the video demonstration found [here!](https://drive.google.com/file/d/1MD8ZADr_7Qp5xTZcRihN-e0PtAysx44B/view?usp=sharing)**

Use the routes below to add users, add friends, create thoughts/reactions, and more!

**User Routes**

- `/api/users`
    - GET: retrieve all users
    - POST: create new user with body:
```json
    {
      "username": "newuser",
      "email": "newuser@example.com"
    }
```

- `/api/users/:userId`
  - GET: retrieve single user with the :userId
  - DELETE: delete user with that :userId
  - PUT: update user info based on :userId with body:
```json
    {
      "username": "updatedName",
      "email": "updatedEmail@email.com"
    }
```

- `/api/users/:userId/friends/:friendId`
  - POST: add :friendId to :userId's friend list
  - DELETE: remove :friendId from :userId's friend list


**Thought Routes**

- `/api/thoughts`
  - GET: retrieve all thoughts
  - POST: create new thought with body:
```json
    {
      "thoughtText": "Put thought here",
      "username": "username",
      "userId": "id"
    }
```

- `/api/thoughts/:thoughtId`
  - GET: retrieve single thought with :thoughtId
  - DELETE: delete thought of :thoughtId
  - PUT: update thought by :thoughtId with body:
```json
    {
      "thoughtText": "Update thought here",
    }
```

- `/api/thoughts/:thoughtId/reactions`
  - POST: post new reaction with body:
```json
    {
      "reactionBody": "Reaction here",
      "username": "username"
    }
```
- `/api/thoughts/:thoughtId/reactions/:reactionId`
  - DELETE: delete reaction with :reactionId



## Credits

Application created by me, James Probel, with guidelines from the UNC Chapel Hill Programming Bootcamp

Thank you to the Mongoose team for all of their documentation; crucial for this project!
https://mongoosejs.com/docs/index.html
