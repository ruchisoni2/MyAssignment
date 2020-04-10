class Student { 
    enrollmentNumber: string;
    studentName: string;

    constructor(enrollmentNumber, studentName) { 
        this.enrollmentNumber = enrollmentNumber;
        this.studentName = studentName;
    }

    display = () => { 
        console.log(this.enrollmentNumber);
        console.log(this.studentName);
    }
}

var student = new Student('23', 'Ruchi');
student.display();