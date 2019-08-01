# Credit/Debit API

## How to run the app

### Install dependencies
* Install dependencies - `yarn`
* Install sequelize globally (v5) or run it from app `node_modules/sequelize/lib/sequelize.js`

### Set up connection to db
* Add mySql credentials to ./sequelize/config.js file
* Run migrations `yarn orm:migration` or `node_modules/sequelize/lib/sequelize.js db:migrate`

### Run the Server
* Run server - `yarn start`
* Run server in developer mode - `yarn start:dev`
