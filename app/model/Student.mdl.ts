import { Person } from './Person.mdl';
import { Classroom } from './Classroom.mdl';
export class Student extends Person{
    classRoom: Classroom;
    gurdian: Person;
}