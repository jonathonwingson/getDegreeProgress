
const studentCourseCodes = [
    'COMP1600', 'COMP1601', 'COMP1602',
    'COMP1603', 'COMP2601', 'COMP2602',
    'COMP2603', 'COMP2604', 'COMP2605',
    'COMP2606', 'COMP2611', 'COMP3601',
    'COMP3603', 'COMP3609', 'COMP3613',
    'FOUN1101', 'FOUN1105', 'FOUN1301',
    'INFO1600', 'INFO1601', 'INFO2602',
    'INFO2604', 'MATH1115', 'MATH2250'];

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

let degreeProgress =[];

function getDegreeProgress(studentCourseCodes, courses) {

    let totalCredits = 0;
    let studentCoursesData = [];

    // for each student's course, display the course and check credit worth and sum it. 
    for (let i = 0; i < studentCourseCodes.length; i++) {

        // Find the corresponding course object in the Courses array
        let course = courses.find((c) => c.courseCode === studentCourseCodes[i]);

        if (course) {

            totalCredits += course.credits;
            studentCoursesData.push(course);
        }



    }
    // if credit total less than the programme credit total display the remaining requirements
    degreeProgress = {
        courseData: studentCoursesData ,
         totalCredits: totalCredits 
    }
         
    

    return degreeProgress;

}


degreeProgress = getDegreeProgress(studentCourseCodes, courses);
console.log("LOG::> Degree Progress: ");
console.log("Course Data", degreeProgress.courseData);
console.log("Total Credits", degreeProgress.totalCredits);