import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-alter-ego',
  templateUrl: './character-alter-ego.component.html',
  styleUrls: ['./character-alter-ego.component.scss'],
})
export class CharacterAlterEgoComponent implements OnInit {
  characterAlterEgo: any;

  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      let characterName = params['characterName'];
      let name = characterName.split(' ');
      console.log(name[0]);
      this.characterService.readCharacterByName(name[0]).subscribe((res) => {
        this.characterAlterEgo = res.results;
        console.log(this.characterAlterEgo);
      });
    });
  }
}
