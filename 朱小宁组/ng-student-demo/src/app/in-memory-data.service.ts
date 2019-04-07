import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Student } from './student';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const students = [
      {id: 1, name: '张伟', gpa: 3.11},
      {id: 2, name: '李伟', gpa: 3.2},
      {id: 3, name: '王伟', gpa: 3.3},
      {id: 4, name: '张敏', gpa: 3.42},
      {id: 5, name: '李敏', gpa: 3.5},
      {id: 6, name: '张敏', gpa: 3.6},
      {id: 7, name: '张勇', gpa: 3.74},
      {id: 8, name: '王勇', gpa: 3.8},
      {id: 9, name: '李勇', gpa: 3.9},
    ];
    return {students};
  }

  // Overrides the genId method to ensure that a student always has an id.
  // If the students array is empty,
  // the method below returns the initial number (11).
  // if the students array is not empty, the method below returns the highest
  // student id + 1.
  genId(students: Student[]): number {
    return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
  }
}
