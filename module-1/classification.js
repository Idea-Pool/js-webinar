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
    switch (true) {        
        case score < 0:
        case score > 100: gradeOfStudent = 0;
            break;
        case score >= 90: gradeOfStudent = 5;
            break;        
        case score >= 80: gradeOfStudent = 4;
            break;      
        case score >= 70: gradeOfStudent = 3;
            break;        
        case score >= 60: gradeOfStudent = 2;
            break;    
        default:
            gradeOfStudent = 1;
    }
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;