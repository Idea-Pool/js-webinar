/*
 * Rewrite the following code to use async/await 
 */
module.exports = function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
};