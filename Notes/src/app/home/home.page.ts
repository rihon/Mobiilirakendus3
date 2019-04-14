import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NoteServiceService } from '../note-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: {title: string}[]=[]
constructor(public navCtrl: NavController, private noteService: NoteServiceService){

}
ionViewWillEnter(){
  this.notes=this.getAllNotes();
}
getAllNotes(){
  return this.noteService.getAllNotes();
}


}
