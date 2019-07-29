"use strict";

const request = require("request");
const { stringInject } = require("../utils");

const retryRequest = (requestOptions) => {
    return new Promise((resolve) => {
        return request(requestOptions, (error, response, body) => {
            if (error || response.statusCode >= 500) {
                // All promises should be finished
                return resolve(null);
            }

            return resolve(body);
        });
    });
};

module.exports = {
    generateBatchRequests: (req) => {
        const {
            request: { url, verb },
            payloads
        } = req.body;

        return payloads.map(payload => {
            return new Promise((resolve, reject) => {
                const uri = stringInject(url, "userId", payload.userId);

                const requestOptions = {
                    method: verb,
                    uri,
                    json: true,
                    body: payload
                };

                return request(requestOptions, (error, response, body) => {
                    if (error || response.statusCode >= 500) {
                        return retryRequest(requestOptions)
                            .then(data => resolve(data))
                            .catch(error => {
                                reject(error);
                            });
                    }

                    return resolve(body);
                });
            });
        });
    }
};
