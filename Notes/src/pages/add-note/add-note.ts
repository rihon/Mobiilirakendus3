import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from '../../providers/note-service/note-service';
import {Note} from '../../models/note.model';

@IonicPage()
@Component({
  selector: 'page-add-note',
  templateUrl: 'add-note.html',
})
export class AddNotePage {

  constructor(public navCtrl: NavController, private noteService : NoteServiceProvider) {
  }
  saveNote(note: Note){
    this.noteService.saveNote(note);
  }


}
