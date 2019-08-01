const bcrypt = require("bcrypt");

const stringInject = (string, key, value) => (
    string.replace(new RegExp("{" + key + "}", "gi"), value)
);

const countBatchQueryResults = (results) => (
    results.reduce((acc, result) => {
        result ? acc.successCount++ : acc.failedCount++;
        return acc;
    }, {
            successCount: 0,
            failedCount: 0,
        })
);


const generateHashPassword = (password, saltRounds=10) => {
    return new Promise((resolve, reject) => {
        return bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) {
                return reject(err);
            }

            bcrypt.hash(password, salt, (error, hash) => {
                if (error) {
                    return reject(error);
                }

                return resolve(hash);
            });
          });
    });

};

module.exports = {
    stringInject,
    countBatchQueryResults,
    generateHashPassword
};
