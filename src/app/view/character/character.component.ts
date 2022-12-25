import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent implements OnInit {
  characterList: any;
  gender: any = 'genderless';
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterService.readAllCharacter().subscribe((res) => {
      this.characterList = res.results;
      console.log(this.characterList);
    });
  }

  filterAll(event: Event) {
    this.characterService.readAllCharacter().subscribe((res) => {
      this.characterList = res.results;
    });
  }

  filterMale(gender: any) {
    this.characterService.readCharacterByGender(gender).subscribe((res) => {
      this.characterList = res.results;
    });
  }

  filterFemale(gender: any) {
    this.characterService.readCharacterByGender(gender).subscribe((res) => {
      this.characterList = res.results;
    });
  }
}
