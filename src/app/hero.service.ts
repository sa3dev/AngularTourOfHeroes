import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { MessagesService } from './messages.service';



@Injectable()
export class HeroService {
    private apiUrl = 'https://jsonplaceholder.typicode.com/';

    constructor(private messagesService: MessagesService) { }

    getHeroes(): Observable<Hero[]> {
      this.messagesService.add('HeroService ajouté: fetched heroes');
      return of(HEROES);
    }

    getHero(id: number): Observable<Hero> {
      // attention au `` pour pouvoir mettre a linterieur la variable ${id}
      this.messagesService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }
}
