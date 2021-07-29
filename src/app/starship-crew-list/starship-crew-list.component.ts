import { Component, OnInit } from '@angular/core';
import { CrewMember } from '../core/models/crew-member';
import { StarshipCrewService } from '../core/services/starship-crew.service';

@Component({
  selector: 'app-starship-crew-list',
  templateUrl: './starship-crew-list.component.html',
})
export class StarshipCrewListComponent implements OnInit {
  crew: CrewMember[] = [];
  selectedMember?: CrewMember;
  constructor(private starshipCrewService: StarshipCrewService) {}

  ngOnInit(): void {
    this.crew = this.starshipCrewService.getList();
  }

  onMemberSelect(member: CrewMember): void {
    this.selectedMember = this.starshipCrewService.getOne(member.id);
  }
}
