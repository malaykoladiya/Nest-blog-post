<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Blog Application (Nest.js Backend)

This is the backend for a simple blog application built using Nest.js and MongoDB. The backend exposes a RESTful API that allows users to create, view, update, and delete blog posts. The backend is built using Nest.js, with MongoDB as the database and Mongoose as the object data modeling (ODM) library.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Configuration](#database-configuration)
- [Future Improvements](#future-improvements)

## Introduction

Nest.js is a scalable, server-side JavaScript framework built with TypeScript that preserves compatibility with JavaScript. It is an effective tool for building reliable back-end applications, thanks to its modular architecture and well-structured design patterns.

This blog backend API allows users to:

- Create new blog posts
- View all saved blog posts
- Edit and delete existing posts

The data is persisted using MongoDB, a schema-less NoSQL database.

## Features

- Create, update, view, and delete blog posts
- MongoDB integration via Mongoose
- Data validation using DTOs (Data Transfer Objects)
- Modular and scalable Nest.js architecture
- Cross-Origin Resource Sharing (CORS) enabled

## Prerequisites

To run this project, ensure you have the following installed:

- Node.js (v16 or later) and npm (v7 or later)
- MongoDB (running locally or remotely)
- Basic knowledge of JavaScript/TypeScript

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blog-backend.git
cd blog-backend
```

### 2. Install Dependencies

Use npm to install the required dependencies:

```bash
npm install
```

## Running the Application

### 1. Start MongoDB

Ensure MongoDB is running on your machine. You can start MongoDB with the following command (in a separate terminal window):

```bash
sudo mongod
```

### 2. Start the Application

To start the Nest.js application, use the following command:

```bash
npm run start
```

The server will start on `http://localhost:3000`. You can access the REST API using tools like Postman or through your frontend.

## API Endpoints

The following endpoints are available to interact with the blog posts:

| HTTP Method | Endpoint                 | Description                   |
| ----------- | ------------------------ | ----------------------------- |
| `GET`       | `/blog/posts`            | Fetch all blog posts          |
| `GET`       | `/blog/post/:postID`     | Fetch a single post by its ID |
| `POST`      | `/blog/post`             | Create a new post             |
| `PUT`       | `/blog/edit?postID=ID`   | Edit an existing post         |
| `DELETE`    | `/blog/delete?postID=ID` | Delete a post by its ID       |

### Example: Creating a New Post

To create a new post, send a `POST` request to `/blog/post` with the following JSON structure:

```json
{
  "title": "My First Blog Post",
  "description": "An intro to my new blog post.",
  "bodyDetail": "This is the full content of the blog post.",
  "author": "Author Name",
  "datePosted": "2024-09-05"
}
```

## Database Configuration

By default, the application connects to a MongoDB instance running locally at:

```
mongodb://localhost/nest-blog
```

If you want to change the MongoDB connection URL, navigate to the `app.module.ts` file and update the connection string:

```typescript
MongooseModule.forRoot('mongodb://localhost/nest-blog', {
  useNewUrlParser: true,
});
```

You can replace the connection string with your MongoDB URI if you are using a cloud database like MongoDB Atlas.

## Future Improvements

- Add user authentication (e.g., JWT-based authentication).
- Implement pagination for fetching blog posts.
- Add image upload functionality for blog posts.
- Add unit and integration tests for controllers and services.
