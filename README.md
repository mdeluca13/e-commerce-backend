# e-commerce-backend

## Description

E-Commerce Backend is program that allows the user to GET, UPDATE and DELETE E-Commerce information like Category, Product and Tag information for their store which is stored on a database. This program uses Node.js, MYSQL, as well as NPM packages like dotenv, mysql2, express, and sequelize. 

I was able to demonstrate what I have learned throughout the Carleton University Full Stack Coding Bootcamp as well as use my researching skills to find and complete this program.

## Installation

You will need to install [node.JS](https://nodejs.org/en/download). 

You will also have to install through the package.json file: 

- [dotenv](https://www.npmjs.com/package/dotenv)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [express](https://www.npmjs.com/package/express)
- [sequelize](https://www.npmjs.com/package/sequelize)

This can be done through npm install in your Node.JS Terminal.

You will also need access to [Insomnia](https://insomnia.rest/) to test the API routes. 

## Usage

1. Run mysql -u root -p in Terminal for schema.sql
2. Run source schema.sql to initialize the Database and Tables
3. Run npm run seed in Terminal to initialize the seed data
4. Run npm start in the Terminal for the server.js file to start the server
5. Run source seeds.sql to add base information to the Tables
6. In Insomnia, you can then run GET, POST, PUT, and DELETE on the different routes using [http://localhost:3001/api/categories/](http://localhost:3001/api/categories/), [http://localhost:3001/api/categories/:id](http://localhost:3001/api/categories/:id), [http://localhost:3001/api/products/](http://localhost:3001/api/products/), [http://localhost:3001/api/products/:id](http://localhost:3001/api/products/:id), [http://localhost:3001/api/tags/](http://localhost:3001/api/tags/), and [http://localhost:3001/api/tags/:id](http://localhost:3001/api/tags/:id).

You can view a [demonstration of the E-Commerce Backend](https://drive.google.com/file/d/1iHiKGkpcy5r21TdVPFh7HSjISwfde3Af/view).

## Credits

Base Code for HTML and CSS supplied by CARL-VIRT-FSF-PT-01-2023-U-LOLC GitLab Repository.

## License

The License used was the [MIT License](https://choosealicense.com/licenses/mit/). Also found in repository under LICENSE.

## Questions

If you have any questions, please reachout via [GitHub](https://github.com/mdeluca13/).