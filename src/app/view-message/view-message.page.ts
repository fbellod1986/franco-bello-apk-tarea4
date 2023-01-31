import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  public message?: Message;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    const id = this.activatedRoute.snapshot.paramMap.get('id') as any;

      
    let equiposAgregados = this.dataService.equiposRestantes.find((equipo: any) => equipo.id == id);

    if (equiposAgregados) {
      this.message =  this.dataService.getMessageById(id);
    }

      /*this.dataService.equiposRestantes.find((equipo: any) => {
        if (equipo.id == id) {
          this.message =  this.dataService.getMessageById(id);
          console.log("message: ",this.message)
        }
      })*/
      

    /*this.data.getMessages().map(data => {

      if (data.id == id) {
        console.log("entro");
        console.log("data.id: ", data.id)
        console.log("id: ", id)
        this.message = this.data.getMessageById(id);
        console.log("this.message: ", this.message)
      }
    })*/
    
    
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Inbox' : '';
  }
}
