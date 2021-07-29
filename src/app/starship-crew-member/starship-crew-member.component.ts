import { Component, Input, OnInit } from '@angular/core';
import { CrewMember } from '../core/models/crew-member';
import { ToastService } from '../core/services/toast.service';

@Component({
  selector: 'app-starship-crew-member',
  templateUrl: './starship-crew-member.component.html',
  styleUrls: ['./starship-crew-member.component.css'],
})
export class StarshipCrewMemberComponent implements OnInit {
  @Input() member!: CrewMember;
  crewMemberPhoto = '/assets/pilot_icon.png';
  constructor(public toastService: ToastService) {}

  ngOnInit(): void {}
  editCrewMemberClick(): void {
    console.log('Unimplemented card edit');
    this.toastService.show('Unimplemented card edit', {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }
}
