/**
 * It wait for the given seconds, but at most 10 seconds.
 *
 * @param {number} sec the seconds to wait
 * @returns {Promise} the promise which resolves when wait if over
 *                    or rejects if parameter is not correct
 */

module.exports = async function sleep(sec) {

    if (typeof sec !== 'number') {
        throw new Error('The given argument is not a number!', sec);
    }

    let waitInMilliseconds = sec * 1000;
    const defaultWaitInMilliseconds = 10000;

    return new Promise((resolve, reject) => {
        //console.log("waitInMilliseconds: " + waitInMilliseconds);
        //console.log("defaultWaitInMilliseconds: " + defaultWaitInMilliseconds);

        setTimeout(resolve, Math.min(waitInMilliseconds, defaultWaitInMilliseconds));
    });
};
