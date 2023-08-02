import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../models/node';

@Injectable({
  providedIn: 'root'
})
export class SidenavDataService {

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>("http://localhost:3000/projects");
  }

  getProjectDetails(uri: string): Observable<Node> {
    return this.http.get<Node>(uri);
  }
}
