### How to run migrations
sequelize db:migrate

### How to create a new migration
sequelize migration:generate --name MIGRATION_NAME

### How to revert migration
sequelize db:migrate:undo

### How to revert all migrations
sequelize db:migrate:undo:all

### If error - sequelize is not found
node_modules/.bin/sequelize SOME_COMMAND or `npm install -g sequelize-cli`