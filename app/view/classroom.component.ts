import { Component } from '@angular/core';
import { Classroom } from '../model/Classroom.mdl';
import { Teacher } from '../model/Teacher.mdl';

@Component({
    selector:'classroom',
    template:`<div id="classroom-wrapper">
                <div>
                    <div>
                        <label for="grade">Grade</label>
                        <select id="grade" value="{{classroom.name}}"}>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                        </select>
                    </div>
                    <div>
                        <label for="className">Grade</label>
                        <input type="text" id="className">{{classroom.numberOfStudents}}</input>
                    </div>
                    <div>
                        <label for="classTeacher">Class Teacher</label>
                        <select id="classTeacher" value="{{classroom.class}}">
                            <option *ngFor="let teacher of teachers" value="{{teacher.id}}">{{teacher.firstName}} {{teacher.lastName}}</option>
                        </select>
                    </div>
                    <div>
                        <label for="noStudents">Number Of Students</label>
                        <input type="text" id="noStudents">{{classroom.numberOfStudents}}</input>
                    </div>
                </div>
                <div>
                </div>
            </div>`,
})

export class ClassroomComponent {
    classroom: Classroom = Classroom.getSampleClassroom();
    teachers: Array<Teacher> = Teacher.getAllTeachers();
}