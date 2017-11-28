'use strict';

/**
 * The function returns the grade (1-5) of the student,
 * based on the score and the following rules:
 *  - 90 -    : 5
 *  - 80 - 89 : 4
 *  - 70 - 79 : 3
 *  - 60 - 69 : 2
 *  -    - 59 : 1
 *
 * @param {number} score (0 <= score <= 100)
 * @returns {number} grade or 0 if any arguments are not proper
 */
function grade(score) {
    let gradeOfStudent;
    /*
     * Your task is to calculate the grade of the student
     * based on his/her score which can be found in the
     * score variable and those rules can be found in the
     * documentation of the function.
     * Store the grade in the gradeOfStudent variable.
     * Also take into consideration the documentation of the function!
     */
    // PLACE YOUR CODE BETWEEN THIS...
    if (typeof score !== "number" || isNaN(score) || 100 < score || score < 0) {
        return 0;
    }

    const scoreIsAbove60 = (score / 60) | 0;
    const scoreAbove50 = ((score / 10) - 5) | 0;
    const scoreIs100 = (score / 100) | 0;
    
    gradeOfStudent = 1 + (scoreIsAbove60 * (scoreAbove50 - scoreIs100));
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;