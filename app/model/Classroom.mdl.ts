import { SubjectTeacher } from './SubjectTeacher.mdl';
import { Student } from './Student.mdl';
import { Teacher } from './Teacher.mdl';
export class Classroom {
    name: string;
    grade: number;
    classTeacher: string;
    numberOfStudents: number;
    // maths: string;
    // science: string;
    // primaryLanguage: string;
    // secondaryLanguage: string;
    // literature: string;
    // commerce: string;
    // religion: string;
    // socialStudies: string;
    // fineArt: string;
    // politicalScience: String;
    // history: string;
    subjectTeachers: Array<SubjectTeacher>;
    students: Array<Student>;
    public static getSampleClassroom(): Classroom {
        let classroom: Classroom = new Classroom();
        classroom.name = "9-A";
        classroom.grade = 9;
        classroom.classTeacher = Teacher.getAllTeachers[ 2 ];
        classroom.numberOfStudents = 35;
        return classroom;
    }
}