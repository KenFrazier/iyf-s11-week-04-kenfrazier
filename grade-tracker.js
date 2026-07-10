const gradeTracker = {
    students: [],

    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    // Get a student by name
    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return null;
        const scores = Object.values(student.grades);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return total / scores.length;
    },

    // Get class average for a subject
    getSubjectAverage(subject) {
        const scores = this.students
            .map(student => student.grades[subject])
            .filter(score => score !== undefined);
        const total = scores.reduce((sum, score) => sum + score, 0);
        return total / scores.length;
    },

    // Get top performer
    getTopStudent() {
        return this.students.reduce((top, student) => {
            const studentAvg = this.getStudentAverage(student.name);
            const topAvg = this.getStudentAverage(top.name);
            return studentAvg > topAvg ? student : top;
        });
    },

    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(student => this.getStudentAverage(student.name) < 70);
    },

    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        else if (score >= 80) return "B";
        else if (score >= 70) return "C";
        else if (score >= 60) return "D";
        else return "F";
    },

    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return `No student found named ${name}`;

        const average = this.getStudentAverage(name);
        const letter = this.getLetterGrade(average);

        let report = `--- Report Card: ${student.name} ---\n`;
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject}: ${score}\n`;
        }
        report += `Average: ${average.toFixed(2)}\n`;
        report += `Letter Grade: ${letter}`;

        return report;
    }
};

// Test
gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Bob", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });

console.log(gradeTracker.getStudentAverage("Alice"));
console.log(gradeTracker.getSubjectAverage("math"));
console.log(gradeTracker.getTopStudent());
console.log(gradeTracker.getStrugglingStudents());
console.log(gradeTracker.generateReportCard("Alice"));
