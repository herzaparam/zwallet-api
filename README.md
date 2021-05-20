<h1 align="center">Zwallet API</h1>

an API built in express.js and used developed for Zwallet app. This API could do some authentication feature such as register, login, and forgot password. Authentication in this API are using some packages like jwt, nodemailer, hash password and many more. Each user are allowed transfer to another user and get their history which include sorting and pagination limit.

## Built With
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)

## NPM Packages Used
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express](https://www.npmjs.com/package/express)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [moment](https://www.npmjs.com/package/moment)
- [multer](https://www.npmjs.com/package/multer)
- [morgan](https://www.npmjs.com/package/morgan)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [joi](https://www.npmjs.com/package/joi)
- [ip](https://www.npmjs.com/package/ip)
- [nodemailer](https://www.npmjs.com/package/nodemailer)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Getting Started
### Prerequisites
[node.js](https://nodejs.org/en/download/)
[Postman](https://www.getpostman.com/) for testing
[Database](database-example.sql)

### Installing

Clone this repository and then use the package manager npm to install dependencies.
```
npm install
```
## Setup .env example

Create .env file in your root project folder.

```env

PORT="your port"
DB_HOST = localhost
DB_USER = root
DB_NAME = "your database name"
SECRET_KEY = "your secret key"
USER_EMAIL = "your email"
PASSWORD_EMAIL = "your email's password"

```
## Run the app

Development mode

```bash
npm run dev
```

Deploy mode

```bash
npm start
```
## Contributing to Zwallet API
To contribute to Zwallet API, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## REST API

[![run in Postman](https://run.pstmn.io/button.svg)](https://documenter.getpostman.com/view/14783281/TzRVe6SL)

## Front end Repositories
also you can check our front end repositories [here](https://github.com/herzaparam/zwallet-arka.git)

### Contributor
[Herza Paramayudhanto](https://github.com/herzaparam)

### contact :
If you want to contact me you can reach me at herzaparam@gmail.com

