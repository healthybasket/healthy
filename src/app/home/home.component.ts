import { Component } from '@angular/core';
import {TestService} from '../service/test.service'
import { User } from '../Model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private userService: TestService) { }

  users:User[]=[]

  ngOnInit(){
    this.getUsers()
  }

  getUsers(): void{

    this.userService.getAllUsers().subscribe(data=>{

      this.users = data;
      console.log(this.users);
    })
  }

}


