import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Skills } from './model/skills';

@Injectable({
    providedIn: 'root'
})
export class SkillsService {

    constructor(private http: HttpClient){}

    public getSkills(): Observable<any> {
        return this.http.get('../../assets/mock-data/skills.json');
    }
}