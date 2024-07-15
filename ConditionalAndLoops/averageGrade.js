let students = [
    { name: "David", marks: 80 },
    { name: "Vinoth", marks: 77 },
    { name: "Divya", marks: 88 },
    { name: "Ishitha", marks: 95 },
    { name: "Thomas", marks: 68 }
];

function computeAverage(students) {
    let totalMarks = 0;
    for (let i = 0; i < students.length; i++) {
        totalMarks += students[i].marks;
    }
    return totalMarks / students.length;
}

function determineGrade(average) {
    if (average < 60) {
        return "F";
    } else if (average < 70) {
        return "D";
    } else if (average < 80) {
        return "C";
    } else if (average < 90) {
        return "B";
    } else {
        return "A";
    }
}

let averageMarks = computeAverage(students);

let grade = determineGrade(averageMarks);

console.log(`Average marks: ${averageMarks}`);
console.log(`Grade: ${grade}`);