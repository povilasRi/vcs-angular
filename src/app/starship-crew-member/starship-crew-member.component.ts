import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewMember } from '../core/models/crew-member';
import { StarshipCrewService } from '../core/services/starship-crew.service';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-starship-crew-member',
  templateUrl: './starship-crew-member.component.html',
  styleUrls: ['./starship-crew-member.component.css'],
})
export class StarshipCrewMemberComponent implements OnInit {
  // @Input() member!: CrewMember;  // nebereikalingas
  member?: CrewMember;
  crewMemberPhoto = '/assets/pilot_icon.png';
  constructor(
    public toastService: ToastService,
    private route: ActivatedRoute,
    private starshipCrewService: StarshipCrewService
  ) {}

  ngOnInit(): void {
    const id: Number = +this.route.snapshot.paramMap.get('id')!; // + reiskia ta pati kas Number()
    this.member = this.starshipCrewService.getOne(id);
  }

  editCrewMemberClick(): void {
    console.log('Unimplemented card edit');
    this.toastService.show('Unimplemented card edit', {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
}
