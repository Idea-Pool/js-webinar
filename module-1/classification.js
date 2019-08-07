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
    gradeOfStudent = 
	    Math.pow(
			Math.floor(0.1 * score - 4) * (score > 0 && score <= 100), // returns grade*1 when 0 < score <= 100 (or returns grade*0 =0 when score is out of that range)
			score >= 60 || score < 0 // exponent that equals 0 when 0 < score <=60, so the grade^0 will be 1 (or 1 in all the other cases, so grade^1=grade)
		) - (score === 100); // substracts 1 in case when score = 100 (in this case Math.floor returns 6, but we need grade 5)
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;