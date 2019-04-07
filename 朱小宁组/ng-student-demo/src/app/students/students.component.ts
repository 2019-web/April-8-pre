import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  students: Student[];

  ngOnInit() {
    this.getStudents();
  }

  getStudents(): void {
    this.studentService.getStudents().subscribe(students => this.students = students);
  }

  add(name: string, gpa: number): void {
    name = name.trim();
    if (!name) { return; }
    this.studentService.addStudent({ name, gpa } as Student)
      .subscribe(student => {
        this.students.push(student);
      });
  }
}
