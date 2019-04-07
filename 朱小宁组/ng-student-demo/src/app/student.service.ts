import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Student } from './student';
import { Observable, of } from 'rxjs';
import { LogService } from './log.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentsUrl = 'api/students';

  constructor(
    private logService: LogService,
    private http: HttpClient) { }

  private log(message: string) {
    this.logService.add(`StudentService: ${message}`);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
    .pipe(
      tap(_ => this.log('fetched students')),
      catchError(this.handleError<Student[]>('getStudents', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getStudent(id: number): Observable<Student> {
    const url = `${this.studentsUrl}/${id}`;
    return this.http.get<Student>(url).pipe(
      tap(_ => this.log(`fetched student id=${id}`)),
      catchError(this.handleError<Student>(`get Student id=${id}`))
    );
  }

  updateStudent (student: Student): Observable<any> {
    return this.http.put(this.studentsUrl, student, httpOptions).pipe(
      tap(_ => this.log(`updated student id=${student.id}`)),
      catchError(this.handleError<any>('updateStudent'))
    );
  }

  addStudent (student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student, httpOptions).pipe(
      tap((s: Student) => this.log(`added student id=${s.id}`)),
      catchError(this.handleError<Student>('addStudent'))
    );
  }

  deleteStudent (student: Student): Observable<Student> {
    const url = `${this.studentsUrl}/${student.id}`;
    return this.http.delete<Student>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted student id=${student.id}`)),
      catchError(this.handleError<Student>('deleteStudent'))
    );
  }

  searchStudents(term: string): Observable<Student[]> {
    if (!term.trim()) {
      // if not search term, return empty student array.
      return of([]);
    }
    return this.http.get<Student[]>(`${this.studentsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found students matching "${term}"`)),
      catchError(this.handleError<Student[]>('searchStudents', []))
    );
  }
}
