// Student Result Data

const students = {

    "101": {

        name: "Ishwari Khadangale",

        subjects: [

            ["Data Structures", 100, 82],

            ["Digital Electronics", 100, 76],

            ["Object Oriented Programming", 100, 88],

            ["Discrete Mathematics", 100, 72],

            ["Database Management System", 100, 84],

            ["Computer Networks", 100, 79]

        ]

    },


    "102": {

        name: "Rahul Patil",

        subjects: [

            ["Data Structures", 100, 75],

            ["Digital Electronics", 100, 81],

            ["Object Oriented Programming", 100, 78],

            ["Discrete Mathematics", 100, 69],

            ["Database Management System", 100, 86],

            ["Computer Networks", 100, 74]

        ]

    }

};


// Grade Calculation

function getGrade(mark) {

    if (mark >= 90)
        return ["O", 10];

    if (mark >= 80)
        return ["A+", 9];

    if (mark >= 70)
        return ["A", 8];

    if (mark >= 60)
        return ["B+", 7];

    if (mark >= 50)
        return ["B", 6];

    if (mark >= 40)
        return ["C", 5];

    return ["F", 0];
}


// Display Result

function showResult() {

    const roll =
        document.getElementById("rollInput").value.trim();

    const student =
        students[roll];

    const message =
        document.getElementById("message");


    // Check Roll Number

    if (!student) {

        message.textContent =
            "Roll number not found. Try 101 or 102.";

        return;
    }


    message.textContent = "";


    // Student Details

    document.getElementById("studentName")
        .textContent = student.name;


    document.getElementById("rollNo")
        .textContent = roll;


    let table = "";

    let total = 0;

    let points = 0;

    let passed = true;


    // Display Subjects

    student.subjects.forEach(

        (subject, index) => {

            const name = subject[0];

            const max = subject[1];

            const marks = subject[2];


            const grade =
                getGrade(marks);


            total += marks;

            points += grade[1];


            if (grade[0] === "F") {

                passed = false;

            }


            table += `

                <tr>

                    <td>${index + 1}</td>

                    <td>${name}</td>

                    <td>${max}</td>

                    <td>${marks}</td>

                    <td>${grade[0]}</td>

                    <td>${grade[1]}</td>

                </tr>

            `;
        }
    );


    // Put table into webpage

    document.getElementById("resultTable")
        .innerHTML = table;


    // Total Marks

    document.getElementById("totalMarks")
        .textContent = total + " / 600";


    // Percentage

    document.getElementById("percentage")
        .textContent =
        ((total / 600) * 100).toFixed(2) + "%";


    // SGPA

    document.getElementById("sgpa")
        .textContent =
        (points / student.subjects.length)
        .toFixed(2);


    // Result Status

    const status =
        document.getElementById("status");


    status.textContent =
        passed ? "PASS" : "FAIL";


    status.style.color =
        passed ? "green" : "red";
}