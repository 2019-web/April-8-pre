import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component'
import { IndexComponent } from './index/index.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [
  {path: 'students', component: StudentsComponent},
  {path: 'index', component: IndexComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'detail/:id', component: StudentDetailComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
