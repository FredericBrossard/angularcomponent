import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  // Selecteur equivalent a une balise html
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private userServive: UserService) { }
  public users;

  ngOnInit() {
    // composant est pret a etre utilisé
    this.users = this.userServive.users;  }

    selectUser() {}
}
