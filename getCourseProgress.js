
const studentCourseCodes = [
    'COMP1600', 'COMP1601', 'FOUN1101', 'INFO1600', 'MATH1115',
    'COMP1602', 'COMP1603', 'COMP1604', 'FOUN1105', 'INFO1601',
    'COMP2605', 'COMP2611',
    'COMP2603', 'COMP2604', 'COMP2606','INFO2602', 'INFO2604',
    'COMP2601', 'FOUN1301',
    'COMP2602', 'COMP3602', 'COMP3603', 'COMP3613', 'MATH2250',
    'COMP3601', 'COMP3609', 'INFO3604', 'INFO3608', 'INFO3611',
    // 'INFO3610' 
 ];

const courses = [
    { courseCode: "COMP1600", courseTitle: "Introduction to Computing Concepts", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP1601", courseTitle: "Computer Programming I", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP1602", courseTitle: "Computer Programming II", credits: 3.0, level: "I", semester: "2", createdAt: "2023-07-06 01:08:35.496+00", updatedAt: "2023-07-06 01:08:35.496+00" },
    { courseCode: "COMP1603", courseTitle: "Computer Programming III", credits: 3.0, level: "I", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP1604", courseTitle: "Mathematics for Computing", credits: 3.0, level: "I", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2601", courseTitle: "Computer Architecture", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2602", courseTitle: "Computer Networks", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2603", courseTitle: "Object-Oriented Programming I", credits: 3.0, level: "II", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2604", courseTitle: "Operating Systems", credits: 3.0, level: "II", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2605", courseTitle: "Enterprise Database Systems", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2606", courseTitle: "Software Engineering I", credits: 3.0, level: "II", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP2611", courseTitle: "Data Structures", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3601", courseTitle: "Design and Analysis of Algorithms", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3602", courseTitle: "Theory of Computing", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3603", courseTitle: "Human-Computer Interaction", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3605", courseTitle: "Introduction to Data Analytics", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3606", courseTitle: "Wireless and Mobile Computing", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3607", courseTitle: "Object-Oriented Programming II", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3608", courseTitle: "Intelligent Systems", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3609", courseTitle: "Game Programming", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3610", courseTitle: "Big Data Analytics", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3613", courseTitle: "Software Engineering II", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO1600", courseTitle: "Introduction to Information Technology Concepts", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO1601", courseTitle: "Introduction to WWW Programming", credits: 3.0, level: "I", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO2602", courseTitle: "Web Programming and Technologies I", credits: 3.0, level: "II", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO2604", courseTitle: "Information Systems Security", credits: 3.0, level: "II", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO2605", courseTitle: "Professional Ethics and Law", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3600", courseTitle: "Business Information Systems", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3604", courseTitle: "Project", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3605", courseTitle: "Fundamentals of LAN Technologies", credits: 3.0, level: "III", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3606", courseTitle: "Cloud Computing", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3607", courseTitle: "Fundamentals of WAN Technologies", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3608", courseTitle: "E-Commerce", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3611", courseTitle: "Database Administration", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MATH1115", courseTitle: "Fundamental Mathematics for the General Sciences I", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MATH2250", courseTitle: "Industrial Statistics", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "ECON1001", courseTitle: "Introduction to Microeconomics", credits: 3, level: "I", semester: "1", description: "desc", createdAt: "2023-07-09 01:46:50.272+00", updatedAt: "2023-07-09 01:46:50.272+00" },
    { courseCode: "ECON1002", courseTitle: "Introduction to Macroeconomics", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:50.101+00", updatedAt: "2023-07-09 01:46:50.101+00" },
    { courseCode: "FOUN1101", courseTitle: "Caribbean Civilisation", credits: 3, level: "I", semester: "1", description: "desc", createdAt: "2023-07-09 01:46:45.158+00", updatedAt: "2023-07-09 01:46:45.158+00" },
    { courseCode: "FOUN1105", courseTitle: "Scientific and Technical Writing", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:53.1+00", updatedAt: "2023-07-09 01:46:53.1+00" },
    { courseCode: "FOUN1301", courseTitle: "Law Governance Economy and Society", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:50.627+00", updatedAt: "2023-07-09 01:46:50.627+00" }
];

const programmeCourses = [
    { programmeId: 1, courseCode: "COMP1600", typeId: 1},
    { programmeId: 1, courseCode: "COMP1601", typeId: 1},
    { programmeId: 1, courseCode: "COMP1602", typeId: 1},
    { programmeId: 1, courseCode: "COMP1603", typeId: 1},
    { programmeId: 1, courseCode: "COMP1604", typeId: 1},
    { programmeId: 1, courseCode: "COMP2601", typeId: 2},
    { programmeId: 1, courseCode: 'COMP2602', typeId: 2},
    { programmeId: 1, courseCode: "COMP2603", typeId: 2},
    { programmeId: 1, courseCode: "COMP2604", typeId: 2},
    { programmeId: 1, courseCode: "COMP2605", typeId: 2},
    { programmeId: 1, courseCode: "COMP2606", typeId: 2},
    { programmeId: 1, courseCode: "COMP2611", typeId: 2},
    { programmeId: 1, courseCode: "COMP3601", typeId: 3},
    { programmeId: 1, courseCode: "COMP3602", typeId: 3},
    { programmeId: 1, courseCode: "COMP3603", typeId: 3},
    { programmeId: 1, courseCode: "COMP3605", typeId: 5},
    { programmeId: 1, courseCode: "COMP3606", typeId: 5},
    { programmeId: 1, courseCode: "COMP3607", typeId: 5},
    { programmeId: 1, courseCode: 'COMP3608', typeId: 5},
    { programmeId: 1, courseCode: "COMP3609", typeId: 5},
    { programmeId: 1, courseCode: "COMP3610", typeId: 5},
    { programmeId: 1, courseCode: "COMP3611", typeId: 5},
    { programmeId: 1, courseCode: "COMP3612", typeId: 5},
    { programmeId: 1, courseCode: "COMP3613", typeId: 3},
    { programmeId: 1, courseCode: "FOUN1101", typeId: 6},
    { programmeId: 1, courseCode: "FOUN1105", typeId: 6},
    { programmeId: 1, courseCode: "FOUN1301", typeId: 6},
    { programmeId: 1, courseCode: "INFO1600", typeId: 1},
    { programmeId: 1, courseCode: "INFO1601", typeId: 1},
    { programmeId: 1, courseCode: "INFO2602", typeId: 2},
    { programmeId: 1, courseCode: 'INFO2604', typeId: 2},
    { programmeId: 1, courseCode: "INFO2605", typeId: 5},
    { programmeId: 1, courseCode: "INFO3600", typeId: 5},
    { programmeId: 1, courseCode: "INFO3604", typeId: 3},
    { programmeId: 1, courseCode: "INFO3605", typeId: 5},
    { programmeId: 1, courseCode: "INFO3606", typeId: 5},
    { programmeId: 1, courseCode: "INFO3607", typeId: 5},
    { programmeId: 1, courseCode: "INFO3608", typeId: 5},
    { programmeId: 1, courseCode: "INFO3609", typeId: 5},
    { programmeId: 1, courseCode: "INFO3610", typeId: 5},
    { programmeId: 1, courseCode: "INFO3611", typeId: 5},
    { programmeId: 1, courseCode: 'MATH1115', typeId: 1},
    { programmeId: 1, courseCode: "MATH2250", typeId: 2},
];

const programmeCreditRequirements = [
    {programmeId: 1, Level1Core: 24, Level2Core: 30, Level3Core: 15, AdvanceCore: 0, AdvanceElective: 15, Foundation: 9, total: 93}
];

// const programmeCreditRequirements = [
//     {programmeId: 1, Level1Core: 24-CS/IT, Level2Core: 30-CS/IT, Level3Core: 15-CS/IT, AdvanceCore: 0, AdvanceElective: 15-CS/IT, Foundation: 9, total: 93}
// ];

let degreeProgress =[];

function getDegreeProgress(programmeId, studentCourseCodes, courses, programmeCreditRequirements, programmeCourses) {

    let totalCredits = 0;
    let completedCourses = [];
 
    let programmeCreditRequirement = programmeCreditRequirements.find((pcr) => pcr.programmeId === programmeId);

    // for each student's course, display the course and check credit worth and sum it. 
    for (let i = 0; i < studentCourseCodes.length; i++) {

        // Find the corresponding course object in the Courses array
        let course = courses.find((c) => c.courseCode === studentCourseCodes[i]);
        // Find the corresponding programmeCourse object in the ProgrammeCourses array
        let programmeCourse = programmeCourses.find((c) => c.courseCode === studentCourseCodes[i]);

        if (programmeCourse) {
            courseCode = programmeCourse.courseCode;
            type = programmeCourse.typeId;

            switch(type){
                case 1: //type = Level1Core
                    programmeCreditRequirement.Level1Core -= course.credits;
                    totalCredits+=course.credits;
                    break;
                case 2: //type = Level2Core
                    programmeCreditRequirement.Level2Core -= course.credits;
                    totalCredits+=course.credits;
                    break;
                case 3: //type = Level3Core
                    programmeCreditRequirement.Level3Core -= course.credits;
                    totalCredits+=course.credits;
                    break;
                case 4: //type = AdvanceCore
                    programmeCreditRequirement.AdvanceCore -= course.credits;
                    totalCredits+=course.credits;
                    break;
                case 5: //type = AdvanceElective
                    programmeCreditRequirement.AdvanceElective -= course.credits;
                    totalCredits+=course.credits;
                    break;
                case 6: //type = Foundation
                    programmeCreditRequirement.Foundation -= course.credits;
                    totalCredits+=course.credits;
                    break;
            }
            // totalCredits += course.credits;
            completedCourses.push(course.courseCode);
        }



    }
    // if credit total less than the programme credit total display the remaining requirements
    degreeProgress = {
        remainingRequirements: programmeCreditRequirements,
        completedCourses: completedCourses ,
        totalCompletedCredits: totalCredits,
        remainingCredits: programmeCreditRequirements.total-totalCredits 
    }
         
    

    return degreeProgress;

}


degreeProgress = getDegreeProgress(1, studentCourseCodes, courses, programmeCreditRequirements, programmeCourses );
console.log("LOG::> Degree Progress: ");
console.log("Completed Courses: ", degreeProgress.completedCourses);
console.log("Remaining Requirements: ", degreeProgress.remainingRequirements);
console.log("Total Credits: ", degreeProgress.totalCompletedCredits);
