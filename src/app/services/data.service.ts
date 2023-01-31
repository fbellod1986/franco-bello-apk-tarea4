import { Injectable } from '@angular/core';

export interface Message {
  id: any;
  name: string;
  descripcion: string;
  img: string;
  estadio: string;
  fundacion: string;
  campeonatos: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  equiposRestantes!: any;

  public messages: Message[] = [
    { id: 0,
      name: 'Colo-Colo',
      descripcion: 'El Club Social y Deportivo Colo-Colo es una institución deportiva con sede en la ciudad de Santiago, Chile, cuya actividad principal es el fútbol profesional., la cantidad máxima que a llevado colo colo de local es mas de 40 mil personas',
      img: 'assets/img/equipos/chile-colo-colo.png',
      estadio: 'Estadio Monumental David Arellano',
      fundacion: '19 de abril de 1925',
      campeonatos: '33 estrellas'
    },
    { id: 1,
      name: 'Universidad Católica',
      descripcion: 'La rama de fútbol del Club Deportivo Universidad Católica es la más importante de la institución. Radicada en la ciudad de Santiago, la cantidad máxima que a llevado universidad catolica de local es de 16,000 personas',
      img: 'assets/img/equipos/chile-universidad-catolica.png',
      estadio: 'Estadio San Carlos de Apoquindo',
      fundacion: '1937',
      campeonatos: '15 estrellas'
    },
    { id: 2,
      name: 'Universidad de chile',
      descripcion: 'El Club Universidad de Chile​ es un club de fútbol profesional de Chile con sede en Santiago. La actual concesionaria del club, Azul Azul S.A, la cantidad máxima que a llevado la U de local es de 43,000 personas',
      img: 'assets/img/equipos/chile-universidad-de-chile.png',
      estadio: 'Estadio Nacional de Chile',
      fundacion: '24 de mayo de 1927',
      campeonatos: '15 estrellas'
    },
    { id: 3,
      name: 'Audax Italiano',
      descripcion: 'Audax Italiano La Florida​ es un club profesional de fútbol de Chile, radicado en la comuna de La Florida, en la ciudad de Santiago, la cantidad máxima que a llevado audax de local es de 10.000 personas',
      img: 'assets/img/equipos/chile-audax-italiano.png',
      estadio: 'Bicentenario Municipal de La Florida',
      fundacion: '24 de mayo de 1927',
      campeonatos: '15 estrellas'
    },
    { id: 4,
      name: 'Everton',
      descripcion: 'Everton de Viña del Mar es una institución deportiva de Chile radicada en la ciudad de Viña del Mar, en la Región de Valparaíso. Actualmente milita en la Primera División de Chile, la cantidad máxima que a llevado everto de viña de local es de 15.000 personas',
      img: 'assets/img/equipos/chile-everton.png',
      estadio: 'Estadio Sausalito',
      fundacion: '8 de septiembre de 1929',
      campeonatos: '4 estrellas'
    },
    { id: 5,
      name: 'Huachipato',
      descripcion: 'El Club Deportivo Huachipato es una institución deportiva de Chile radicada en la ciudad de Talcahuano de la Región del Biobío, la cantidad máxima que a llevado huachipato de local es de 10,500 personas',
      img: 'assets/img/equipos/chile-huachipato.png',
      estadio: 'Estadio Huachipato-CAP Acero',
      fundacion: '7 de junio de 1947',
      campeonatos: '2 estrellas'
    },
    { id: 6,
      name: 'Palestino',
      descripcion: 'El Club Deportivo Palestino es una institución deportiva radicada en la ciudad de Santiago, Chile. Fue fundado oficialmente como club de fútbol el 20 de agosto de 1920 por miembros de la colonia palestina residente en el país, la cantidad máxima que a llevado palestino de local es de 5,500 personas',
      img: 'assets/img/equipos/chile-palestino.png',
      estadio: 'Estadio Municipal de La Cisterna',
      fundacion: '20 de agosto de 1920',
      campeonatos: '2 estrellas'
    },
    { id: 7,
      name: 'Union Española',
      descripcion: 'Unión Española es una entidad deportiva con sede en el barrio de Independencia, comuna de Santiago, Chile. Su principal actividad es el fútbol profesional, donde actualmente participa en la Primera División de Chile, la cantidad máxima que a llevado palestino de local es de 15,887 personas',
      img: 'assets/img/equipos/chile-union-espanola.png',
      estadio: 'Estadio Santa Laura',
      fundacion: '1897',
      campeonatos: '4 estrellas'
    }
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
