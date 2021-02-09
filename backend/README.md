# A Nodejs MongoDB CRUD Project

## Getting started
This is a project which showcases the implementation of all the basic CRUD operations using NodeJs and MongoDB.

## How to install?
### Install npm dependencies
```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment. Helpful comments added to `.env.example` file 

## How to run

### Running  API server locally

```bash
npm start
```

You will know server is running by checking the output of the command `npm start`

```bash
Connected to mongodb:YOUR_DB_CONNECTION_STRING
App is running ...

Press CTRL + C to stop the process.
```
**Note:**  `YOUR_DB_CONNECTION_STRING` will be your MongoDB connection string.