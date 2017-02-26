import { Person } from './Person.mdl';
import { Subject } from './Subject.mdl';
export class Teacher extends Person {
    subjects: Array<Subject>;
    public static getAllTeachers(): Array<Teacher> {
        let teachers: Array<Teacher> = new Array<Teacher>();
        let index: number;
        let teacher : Teacher;
        for( index = 0; index < 5 ; index = index + 1 ){
            teacher = new Teacher();
            teacher.id = "Teacher" + index;
            teacher.firstName = "FN" + index;
            teacher.lastName = "LN" + index;
            teacher.address = "Address" +index;
        }
        return teachers;
    }
}