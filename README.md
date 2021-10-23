# Project 12 SportSee

## 1. General informations

To use this project you have to use Docker to create a container project, run the API and fetching datas. In this documentation, we will see several methods to launch the project easily.

## 2. Project

### 2.1 Setup the project

- Fork the repository
- Clone it on your computer.
- The yarn or npm command will allow you to install the dependencies (yarn install or npm install).
- The yarn dev command will allow you to run the micro API.

### 2.2 Prerequisites

- [Docker desktop](https://www.docker.com/products/docker-desktop)
- [NodeJS (**version 14**)](https://nodejs.org/en/)
- [yarn](https://yarnpkg.com/)

### 2.3 Starting the project

First, use the `cd .\P9-front-end-dashboard\` (or just typing `cd .p9` and `tab`), to be in the micro API file and run the commands which follow.

- The `docker image build --no-cache -t micro-api .` command will allow you to build your image.
- The `docker container run --name micro-api -p 3000:3000 -dt micro-api yarn` command will allow you to create your Docker container and run your image on port 3000.
- The `docker container stop micro-api` command will allow you to stop your micro-api.
- The `docker container rm micro-api` command will allow you to delete your micro-api container.

### 2.4 Running project

To running the project you have to open two terminal (you can do it with VScode IDE if you use it).

- In the first, you can use the `cd .\P9-front-end-dashboard\` (or just typing `cd .p9` and `tab`), to be in the micro API file and run the `yarn dev` command to run the micro API
- In the second one, use the `npm run start` command only to run the project. it will run in `localhost:3001`

## 3. Endpoint

### 3.1 Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).


**/!\ Warning /!\, currently only two users have been mocked. They have userId 12 and 18 respectively. We ONLY use the userId 12 datas for this project.**

### 3.2 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## 4. Screen

The project is not responsive yet, it contain some medias queries for large screens but it work especially for 1024x780 screens.

## 5. Error

All links are not availiable yet, they will be implemented with the other pages. For now, they all redirect to the error page of the app. Only the logo redirect to the home page.