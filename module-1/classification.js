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
    if (score == 100) {gradeOfStudent = 5;}
    else {
        switch (Math.floor((100 - score - 1) / 10)) {
            case -1:
                gradeOfStudent = 0;
                break;
            case 0:
                gradeOfStudent = 5;
                break;
            case 1:
                gradeOfStudent = 4;
                break;
            case 2:
                gradeOfStudent = 3;
                break;
            case 3:
                gradeOfStudent = 2;
                break;
            // fallthrough
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                gradeOfStudent = 1;
                break;
            default:
                gradeOfStudent = 0;
                break;
        }
    }
    // ...AND THIS COMMENT LINE!
    return gradeOfStudent;
}
module.exports = grade;