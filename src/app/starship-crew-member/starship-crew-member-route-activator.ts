import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { StarshipCrewService } from '../core/services/starship-crew.service';

@Injectable({ providedIn: 'root' })
export class StarshipCrewMemberRouteActivatorService implements CanActivate {
  constructor(private service: StarshipCrewService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const id: Number = +route.params['id']; // su + kovertuojam i number
    const exists: boolean = !!this.service.getOne(id); // su dviem sauktukais kovertuojame i boolean tipa ir paneigiame
    if (!exists) this.router.navigate(['404']);
    return true;
  }
}
