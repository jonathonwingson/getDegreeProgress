
// array to map typeIds to their names for a programme
const typeTable = [
    // programmeId 1
    // { typeId: 1, type: "Level1Core" },
    // { typeId: 2, type: "Level2Core" },
    // { typeId: 3, type: "Level3Core" },
    // { typeId: 4, type: "AdvancedCore" },
    // { typeId: 5, type: "AdvanceElective" },
    // { typeId: 6, type: "Foundation" },

    // programmeId 2
    { typeId: 1, type: "Level1Core" },
    { typeId: 2, type: "Level2Core" },
    { typeId: 4, type: "AdvancedCore" },
    { typeId: 6, type: "Foundation" },
    { typeId: 7, type: "AdvancedElectiveCS/IT" },
    { typeId: 8, type: "AdvancedElectiveCS/IT/E/MATH/M" },
];

// array of courseCodes the student has completed
const studentCourseCodes = [
    // porgrammeId 1
    // 'COMP1600', 'COMP1601', 'FOUN1101', 'INFO1600', 'MATH1115',
    // 'COMP1602', 'COMP1603', 'COMP1604', 'FOUN1105', 'INFO1601',
    // 'COMP2605', 'COMP2611',
    // 'COMP2603', 'COMP2604', 'COMP2606', 'INFO2602', 'INFO2604',
    // 'COMP2601', 'FOUN1301',
    // 'COMP2602', 'COMP3602', 'COMP3603', 'COMP3613', 'MATH2250',
    // 'COMP3601', 'COMP3609', 'INFO3604', 'INFO3608', 'INFO3611',
    // 'INFO3610' 

    // progrmmeId 2
    "COMP1600", "COMP1601", "COMP1602", "COMP1603", //12cs/it core
    "ACCT1002", "ACCT1003","ECON1001", "ECON1002",  //12A&Ecore
    "COMP2601", "COMP2602", "COMP2603", "COMP2604", "COMP2605", "COMP2611",//18 level2 cs core
    "MGMT2008", "MGMT2021", "MGMT2012", "MGMT2023", "MKTG2001",//15 advancecore
    "FOUN1101", "FOUN1105", "FOUN1301", //9 foun

    "COMP3601", "COMP3602", "COMP3603", //12 advance elective
    "COMP3605", "COMP3606", "ACCT2017",  "MKTG3000", "COMP2606",//15 advance elecetive Computer Science/Economics/Information Technology/Mathematics/Management
     

    // "COMP3607", "COMP3608", "COMP3609", "COMP3610", "COMP3611",
    // "COMP3612", "COMP3613", "INFO2602", "INFO2604", "INFO2605",
    // "INFO3600", "INFO3605", "INFO3604", "INFO3606", "INFO3607",
    // "INFO3608", "INFO3609", "INFO3610", "INFO3611",
];

// all courses in the database
const courses = [
    { courseCode: "ACCT1002", courseTitle: "Introduction to Financial Accounting", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "ACCT1003", courseTitle: "Introduction to Cost and Managerial Accounting", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "ACCT2017", courseTitle: "Management Accounting", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MGMT2008", courseTitle: "Organisational Behaviour", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MGMT2012", courseTitle: "Quantitative Methods", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MGMT2023", courseTitle: "Financial Management", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MGMT2021", courseTitle: "Business Law", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MKTG2001", courseTitle: "Principles of Marketing", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MKTG3000", courseTitle: "Marketing Management", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    
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
    { courseCode: "COMP3611", courseTitle: "Modelling and Simulation", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "COMP3612", courseTitle: "Special Topics in Computer Science", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
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
    { courseCode: "INFO3609", courseTitle: "Internship I", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3610", courseTitle: "Internship II", credits: 6.0, level: "III", semester: "3", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "INFO3611", courseTitle: "Database Administration", credits: 3.0, level: "III", semester: "2", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MATH1115", courseTitle: "Fundamental Mathematics for the General Sciences I", credits: 3.0, level: "I", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "MATH2250", courseTitle: "Industrial Statistics", credits: 3.0, level: "II", semester: "1", createdAt: "2023-07-03 06:33:08.47259+00", updatedAt: "2023-07-03 06:33:08.47259+00" },
    { courseCode: "ECON1001", courseTitle: "Introduction to Microeconomics", credits: 3, level: "I", semester: "1", description: "desc", createdAt: "2023-07-09 01:46:50.272+00", updatedAt: "2023-07-09 01:46:50.272+00" },
    { courseCode: "ECON1002", courseTitle: "Introduction to Macroeconomics", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:50.101+00", updatedAt: "2023-07-09 01:46:50.101+00" },
    { courseCode: "FOUN1101", courseTitle: "Caribbean Civilisation", credits: 3, level: "I", semester: "1", description: "desc", createdAt: "2023-07-09 01:46:45.158+00", updatedAt: "2023-07-09 01:46:45.158+00" },
    { courseCode: "FOUN1105", courseTitle: "Scientific and Technical Writing", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:53.1+00", updatedAt: "2023-07-09 01:46:53.1+00" },
    { courseCode: "FOUN1301", courseTitle: "Law Governance Economy and Society", credits: 3, level: "I", semester: "2", description: "desc", createdAt: "2023-07-09 01:46:50.627+00", updatedAt: "2023-07-09 01:46:50.627+00" }
];

// All courses in the programme 1
// const programmeCourses = [
//     { programmeId: 1, courseCode: "COMP1600", typeId: 1 },
//     { programmeId: 1, courseCode: "COMP1601", typeId: 1 },
//     { programmeId: 1, courseCode: "COMP1602", typeId: 1 },
//     { programmeId: 1, courseCode: "COMP1603", typeId: 1 },
//     { programmeId: 1, courseCode: "COMP1604", typeId: 1 },
//     { programmeId: 1, courseCode: "COMP2601", typeId: 2 },
//     { programmeId: 1, courseCode: 'COMP2602', typeId: 2 },
//     { programmeId: 1, courseCode: "COMP2603", typeId: 2 },
//     { programmeId: 1, courseCode: "COMP2604", typeId: 2 },
//     { programmeId: 1, courseCode: "COMP2605", typeId: 2 },
//     { programmeId: 1, courseCode: "COMP2606", typeId: 2 },
//     { programmeId: 1, courseCode: "COMP2611", typeId: 2 },
//     { programmeId: 1, courseCode: "COMP3601", typeId: 3 },
//     { programmeId: 1, courseCode: "COMP3602", typeId: 3 },
//     { programmeId: 1, courseCode: "COMP3603", typeId: 3 },
//     { programmeId: 1, courseCode: "COMP3605", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3606", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3607", typeId: 5 },
//     { programmeId: 1, courseCode: 'COMP3608', typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3609", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3610", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3611", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3612", typeId: 5 },
//     { programmeId: 1, courseCode: "COMP3613", typeId: 3 },
//     { programmeId: 1, courseCode: "FOUN1101", typeId: 6 },
//     { programmeId: 1, courseCode: "FOUN1105", typeId: 6 },
//     { programmeId: 1, courseCode: "FOUN1301", typeId: 6 },
//     { programmeId: 1, courseCode: "INFO1600", typeId: 1 },
//     { programmeId: 1, courseCode: "INFO1601", typeId: 1 },
//     { programmeId: 1, courseCode: "INFO2602", typeId: 2 },
//     { programmeId: 1, courseCode: 'INFO2604', typeId: 2 },
//     { programmeId: 1, courseCode: "INFO2605", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3600", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3604", typeId: 3 },
//     { programmeId: 1, courseCode: "INFO3605", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3606", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3607", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3608", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3609", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3610", typeId: 5 },
//     { programmeId: 1, courseCode: "INFO3611", typeId: 5 },
//     { programmeId: 1, courseCode: 'MATH1115', typeId: 1 },
//     { programmeId: 1, courseCode: "MATH2250", typeId: 2 },
// ];

// programmeId 2
const programmeCourses = [
    { programmeId: 2, courseCode: "ACCT1002", typeId: 1 },
    { programmeId: 2, courseCode: "ACCT1003", typeId: 1 },
    { programmeId: 2, courseCode: "COMP1600", typeId: 1 },
    { programmeId: 2, courseCode: "COMP1601", typeId: 1 },
    { programmeId: 2, courseCode: "COMP1602", typeId: 1 },
    { programmeId: 2, courseCode: "COMP1603", typeId: 1 },
    { programmeId: 2, courseCode: "ECON1001", typeId: 1 },
    { programmeId: 2, courseCode: "ECON1002", typeId: 1 },
    { programmeId: 2, courseCode: "FOUN1101", typeId: 6 },
    { programmeId: 2, courseCode: "FOUN1105", typeId: 6 },

    { programmeId: 2, courseCode: "COMP2601", typeId: 2 },
    { programmeId: 2, courseCode: "COMP2602", typeId: 2 },
    { programmeId: 2, courseCode: "COMP2603", typeId: 2 },
    { programmeId: 2, courseCode: "COMP2604", typeId: 2 },
    { programmeId: 2, courseCode: "COMP2605", typeId: 2 },
    { programmeId: 2, courseCode: "COMP2611", typeId: 2 },
    { programmeId: 2, courseCode: "MGMT2008", typeId: 4 },
    { programmeId: 2, courseCode: "MGMT2021", typeId: 4 },
    { programmeId: 2, courseCode: "MKTG2001", typeId: 4 },
    { programmeId: 2, courseCode: "FOUN1301", typeId: 6 },

    { programmeId: 2, courseCode: "ACCT2017", typeId: 4 },
    { programmeId: 2, courseCode: "MGMT2012", typeId: 4 },
    { programmeId: 2, courseCode: "MGMT2023", typeId: 4 },
    { programmeId: 2, courseCode: "MKTG3000", typeId: 4 },

    { programmeId: 2, courseCode: "COMP2606", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3601", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3602", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3603", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3605", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3606", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3607", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3608", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3609", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3610", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3611", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3612", typeId: 7 },
    { programmeId: 2, courseCode: "COMP3613", typeId: 7 },
    { programmeId: 2, courseCode: "INFO2602", typeId: 7 },
    { programmeId: 2, courseCode: "INFO2604", typeId: 7 },
    { programmeId: 2, courseCode: "INFO2605", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3600", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3605", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3604", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3606", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3607", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3608", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3609", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3610", typeId: 7 },
    { programmeId: 2, courseCode: "INFO3611", typeId: 7 },

];

// credit requirement for the programme
const programmeCreditRequirements = [
    // programme 1
    // {
    //     programmeId: 1,
    //     creditRequirements: {
    //         Level1Core: 24, // Level1Core
    //         Level2Core: 30, // Level2Core
    //         Level3Core: 15, // Level3Core
    //         AdvanceElective: 15, // AdvanceElective
    //         Foundation: 9   // Foundation
    //     },
    //     total: 93
    // }

    // programme 2
    {
        programmeId: 2,
        creditRequirements: {
            Level1Core: 24,
            Level2Core: 18,
            AdvancedCore: 15,
            AdvanceElective: 15,
            Foundation: 9,
            "AdvancedElectiveCS/IT": 12,
            "AdvancedElectiveCS/IT/E/MATH/M": 15,

        },
        total: 93
    }
];

function getDegreeProgress(programmeId, studentCourseCodes, courses, programmeCreditRequirements, programmeCourses) {
    let totalCredits = 0;
    let completedCourses = [];

    let programmeCreditRequirement = programmeCreditRequirements.find((pcr) => pcr.programmeId === programmeId);
    let creditRequirements = programmeCreditRequirement.creditRequirements;

    for (let i = 0; i < studentCourseCodes.length; i++) {
        let course = courses.find((c) => c.courseCode === studentCourseCodes[i]);
        let programmeCourse = programmeCourses.find((c) => c.courseCode === studentCourseCodes[i]);

        if (programmeCourse) {

            //let type = typeTable[programmeCourse.typeId];
            let typeId = programmeCourse.typeId;
            let typeObj = typeTable.find((type) => type.typeId === typeId);
            let type = typeObj ? typeObj.type : null;
            if (type) {
                //console.log("!!!!!",course.courseCode);
                let credits = course.credits;
                creditRequirements[type] -= credits;
                totalCredits += credits;
                completedCourses.push(course.courseCode);
            }

        }
    }

    let remainingRequirements = [];
    for (let type in creditRequirements) {
        remainingRequirements.push({ type, remainingCredits: creditRequirements[type] });
    }

    let degreeProgress = {
        remainingRequirements: remainingRequirements,
        completedCourses: completedCourses,
        totalCompletedCredits: totalCredits,
        remainingCredits: programmeCreditRequirement.total - totalCredits
    };

    return degreeProgress;
}

degreeProgress = getDegreeProgress(2, studentCourseCodes, courses, programmeCreditRequirements, programmeCourses);
console.log("LOG::> Degree Progress: ");
console.log("Completed Courses: ", degreeProgress.completedCourses);
console.log("Total Completed Credits: ", degreeProgress.totalCompletedCredits);
console.log("Remaining Requirements: ", degreeProgress.remainingRequirements);
