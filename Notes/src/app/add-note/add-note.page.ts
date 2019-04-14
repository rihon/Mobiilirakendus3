import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  constructor(private noteService:NoteServiceService) { }

  ngOnInit() {
  }
  saveNote(value:{title : string}){
    this.noteService.saveNote(value);

  }

}
