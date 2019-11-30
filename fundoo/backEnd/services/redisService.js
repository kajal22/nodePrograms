const redis = require("redis");
const client = new redis.createClient();

class Redis {
    /**
     * to set the token in redis
     * @param {*} key this is a user id and name as key
     * @param {*} value passes the token 
     */
    redisSet(key, value) {
        return new Promise((resolve, reject) => {
            client.set(key, value, (err, data) => {                
                if (data == "OK") {
                    resolve(data);
                } else {
                    reject(err);
                }
            });
        });
    }
    /**
     * 
     * @param {*} key this is a user id and name as key
     * @param {*} callback callback function
     */
    redisGet(key, callback) {
        client.get(key, function (err, data) {
            if (err) {
                return callback(err);
            } else {

                return callback(null, data);
            }
        });

    }

    /**
     * to clear all data from redis use flushdb
     */
    deleteRedis(redisKeyArray) {
        return new Promise((resolve, reject) => {
            client.del(redisKeyArray, function (err, succeeded) {
                if (err) {
                    reject(err);
                } else {
                    resolve(succeeded);
                }
            });
        });
    }

    /**
     * 
     * @param {*} loginUserId from create,update,delete note take userid to get token 
     */
    tokenRedis(loginUserId) {
        return new Promise((resolve, reject) => {
            /**get token from redis after user login we have set the token that will get here */

            /**check token that we stored in another variable as loginUser for further set token ,if token
             *  present delete all data from redis */
            if (loginUserId) {

                let redisKeyArray = [loginUserId + "allNote", loginUserId + "isArchive", loginUserId + "reminder", loginUserId + "isTrash", loginUserId + "label"];
                this.deleteRedis(redisKeyArray)
                    .then(response => {
                        resolve(response);
                        /**set token in redis only login user token will be set */
                    }).catch(err => {
                        reject(err);
                    });
            }
        });
    }
}


let redisObject = new Redis();
module.exports = redisObject;