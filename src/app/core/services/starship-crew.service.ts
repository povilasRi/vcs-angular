import { Injectable } from '@angular/core';
import { STARSHIP_CREW } from '../mocks/starship-crew-mock';
import { CrewMember } from '../models/crew-member';

@Injectable({ providedIn: 'root' })
export class StarshipCrewService {
  crew = STARSHIP_CREW;
  constructor() {}

  getList(): CrewMember[] {
    return this.crew;
  }

  getOne(id: number): CrewMember | undefined {
    return this.crew.find((x) => x.id === id);
  }
}
