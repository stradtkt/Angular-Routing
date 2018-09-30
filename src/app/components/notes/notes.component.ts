import { NotesPublicComponent } from './notes-public/notes-public.component';
import { NotesPersonalComponent } from './notes-personal/notes-personal.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
