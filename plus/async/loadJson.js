/*
 * Rewrite the following code to use async/await 
 */
module.exports = async function loadJson(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error(response.status);
    }
};