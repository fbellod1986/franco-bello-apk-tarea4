import { Component, Input, OnInit } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { AlertController } from '@ionic/angular'
import { Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit{

  @Input() message?: Message;

  constructor(private data: DataService, private alertController: AlertController, private router: Router) {}

  ngOnInit(): void {}

  isIos() {
    const win = window as any;
    return win && win.Ionic && win.Ionic.mode === 'ios';
  }

  eliminaEquipo(id: number) {

    let equipoEliminar = this.data.getMessages().find(data => data.id === id);
    if(equipoEliminar !== undefined){
      let indexMetadata = this.data.getMessages().indexOf(equipoEliminar);
      if(indexMetadata !== -1 && this.data.getMessages().length){
        this.data.getMessages().splice(indexMetadata, 1);
        this.data.equiposRestantes = this.data.getMessages();
        this.validaSiHayEquipo(this.data.getMessages().length)
      }
    } 
  }

  async validaSiHayEquipo(cantidadEquipo: number) {
    if (!cantidadEquipo) {
        const alert = await this.alertController.create({
          header: 'Alerta',
          message: 'No quedan mas equipos por eliminar',
          buttons: ['OK'],
        });
        
        await alert.present();
    }
  }

}
