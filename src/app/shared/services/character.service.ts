import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  readAllCharacter(): Observable<any> {
    return this.http.get(`${this.baseUrl}/character`);
  }

  readCharacterByName(characterName: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/?name=${characterName}`);
  }

  readCharacterByGender(characterGender: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/?gender=${characterGender}`);
  }
}
