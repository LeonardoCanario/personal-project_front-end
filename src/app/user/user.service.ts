import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "./user";

@Injectable({providedIn: 'root'})
export class UserService{

  private userSubject = new BehaviorSubject<User>(null);

  getUser(){
    return this.userSubject.asObservable();
  }


}
