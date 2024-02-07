import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/'; // Replace with your API base URL
   private empData=null;
  constructor(private http: HttpClient) {}

  getdepartments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'departments');
  }

  getdepartmentsById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+'departments'}/${id}`);
  }

  setEmp(emp:any){
    this.empData=emp;

  }
  getEmp(){
   return  this.empData;
  }
}
