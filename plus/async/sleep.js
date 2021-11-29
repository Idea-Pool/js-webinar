/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */
module.exports = function sleep(sec) {
    return new Promise ((resolve, reject) => {
        if (typeof sec === 'number') {
            if (sec > 10) sec = 10;
            setTimeout(() => {
                resolve('All\'s done :)')
            }, sec * 1000);
        } else reject('That\'s not how you deal with me!');
    });
}

