import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NotesComponent } from './components/notes/notes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NotesPublicComponent } from './components/notes/notes-public/notes-public.component';
import { NotesPersonalComponent } from './components/notes/notes-personal/notes-personal.component';

const app_routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'notes', component: NotesComponent,
  children: [
    {path: 'public', component: NotesPublicComponent},
    {path: 'personal', component: NotesPersonalComponent}
  ]
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TasksComponent,
    NotesComponent,
    NavbarComponent,
    NotesPersonalComponent,
    NotesPublicComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(app_routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
