import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl:string;


  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9092/contact/contact";
   }
   getAll() : Observable<Contact []>{
    return this.httpClient.get<Contact []>(this.baseUrl);
   }
   getById(email:string) : Observable<Contact >{ 
    return this.httpClient.get<Contact>(`${this.baseUrl}/${email}`);
   }
   add(user:Contact) : Observable<Contact >{
     return this.httpClient.post<Contact >(this.baseUrl,user);
   }
  }
 
