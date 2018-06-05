import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Service qui coordonne les données
  users =
  [
    {
      id: 0,
      name: 'Aisha Eichmann',
      // tslint:disable-next-line:max-line-length
      image: 'https://media.ouest-france.fr/v1/pictures/66a3301d3fed004ef0997b464a636b45-roland-garros-caroline-garcia-se-qualifie-sereinement-pour-les-huitiemes.jpg',
      jobTitle: 'Customer Division Assistant'
    },
    {
      id: 1,
      name: 'Calista Skiles',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/nessoila/128.jpg',
      jobTitle: 'Dynamic Solutions Orchestrator'
    },
    {
      id: 2,
      name: 'Kristofer Hermiston',
      image: 'https://s3.amazonaws.com/uifaces/faces/twitter/ernestsemerda/128.jpg',
      jobTitle: 'Dynamic Markets Planner'
    }
  ];

  constructor() { }
}
