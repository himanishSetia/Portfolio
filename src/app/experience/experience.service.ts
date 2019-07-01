import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    constructor(private http: HttpClient){}

    public getExperience(): Observable<any>{
        return this.http.get('../../assets/mock-data/experience.json')
    }
}